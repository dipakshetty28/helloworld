// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as cp from 'child_process';

function runJavaParserOnWorkspace(workspacePath: string): any {
	// const jarPath = path.join(__dirname, 'JdtParserExample.jar');
	const jarPath = path.join('C:\\Users\\dipak\\helloworld\\JdtParserExample.jar');
	const command = `java -jar ${jarPath} ${workspacePath}`;
	const output = cp.execSync(command, { encoding: 'utf8' });
	return JSON.parse(output);
}

function getAllFilesInDirectory(dir: string, ext: string): string[] {
	let results: string[] = [];
	const list = fs.readdirSync(dir);
	list.forEach(file => {
		file = path.join(dir, file);
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			results = results.concat(getAllFilesInDirectory(file, ext));
		} else if (path.extname(file) === ext) {
			results.push(file);
		}
	});
	return results;
}

function readRulesFromJSON(workspacePath: string): any {
	const jsonFilePath = path.join(workspacePath, 'rules', 'rules.json');
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
	return JSON.parse(jsonData);
}

function writeNonMatchingClassNamesToJSON(workspacePath: string, nonMatchedClasses: any[]) {
	const jsonFilePath = path.join(workspacePath, 'nonMatchingClasses.json');
	const jsonData = {
		nonMatchingClasses: nonMatchedClasses
	};
	fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 4), 'utf8');
	vscode.window.showInformationMessage('Non-matching classes written to nonMatchingClasses.json!');
}

function getVariablePositionInText(text: string, variableName: string): { row: number, col: number } | null {
	const lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		const col = lines[i].indexOf(variableName);
		if (col !== -1) {
			return { row: i + 1, col: col + 1 }; // +1 to make it human-friendly (1-indexed)
		}
	}
	return null;
}

function createVSCodeHyperlink(filePath: string, row: number, col: number): string {
	const absolutePath = path.resolve(filePath);
	const encodedPath = encodeURIComponent(absolutePath);
	let uriPath: string;
	uriPath = 'file:///' + absolutePath.replace(/\\/g, '/');

	return `${uriPath}#L${row},${col}`;
}

function writeNonMatchingVariablesToJSON(workspacePath: string, nonMatchedVariables: any[]) {
	const jsonFilePath = path.join(workspacePath, 'nonMatchingVariables.json');
	const jsonData = {
		nonMatchingVariables: nonMatchedVariables
	};
	fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 4), 'utf8');
	vscode.window.showInformationMessage('Non-matching variables written to nonMatchingVariables.json!');
}

function removeJavaComments(content: string): string {
	// Remove multi-line comments first
	let noMultiLineComments = content.replace(/\/\*[\s\S]*?\*\//gm, '');

	// Remove single line comments
	let noComments = noMultiLineComments.replace(/\/\/[^\n]*\n/gm, '\n');

	return noComments;
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.listJavaClasses', () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (workspaceFolders && workspaceFolders.length) {
			const workspacePath = workspaceFolders[0].uri.fsPath;
			const parsedResults = runJavaParserOnWorkspace(workspacePath);


			const rules = readRulesFromJSON(workspacePath);
			const filteredRules = rules.rules.filter((rule: any) => rule.type === 'style' && rule.object === 'variable');
			const variableNames = parsedResults.nonMatchingVariables;
			let nonMatchedVariables: any[] = [];

			for (const rule of filteredRules) {
				const regex = new RegExp(rule.pattern);
				for (const variableName of variableNames) {
					if (!regex.test(variableName)) {
						const javaFiles = getAllFilesInDirectory(workspacePath, '.java');
						for (const javaFile of javaFiles) {
							const fileContent = fs.readFileSync(javaFile, 'utf8');
							const contentWithoutComments = removeJavaComments(fileContent);
							const position = getVariablePositionInText(contentWithoutComments, variableName);
							if (position) {
								nonMatchedVariables.push({
									variableName: variableName,
									message: rule.message,
									severity: rule.severity,
									file: javaFile,
									row: position.row,
									col: position.col,
									hyperlink: createVSCodeHyperlink(javaFile, position.row, position.col)

								});
								break; // Break once the first instance is found, remove this if you want all instances
							}
						}
					}
				}
			}

			const filteredRulesClass = rules.rules.filter((rule: any) => rule.type === 'style' && rule.object === 'class');
			const classNames = parsedResults.nonMatchingClasses;
			let nonMatchedClasses: any[] = [];

			for (const rule of filteredRulesClass) {
				const regex = new RegExp(rule.pattern);
				for (const className of classNames) {
					if (!regex.test(className)) {
						nonMatchedClasses.push({
							className: className,
							message: rule.message,
							severity: rule.severity
						});
					}
				}
			}

			writeNonMatchingClassNamesToJSON(workspacePath, nonMatchedClasses);
			writeNonMatchingVariablesToJSON(workspacePath, nonMatchedVariables);
		} else {
			vscode.window.showErrorMessage('No workspace found!');
		}
	});

	context.subscriptions.push(disposable);
}


