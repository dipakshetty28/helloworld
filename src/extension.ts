// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import { CharStreams, CommonTokenStream, RuleContext } from 'antlr4';
import JavaLexer  from './JavaLexer';
import JavaParser from './JavaParser'
import { ClassDeclarationContext, VariableDeclaratorIdContext } from './JavaParser';

function extractJavaInfo(input: string): { classes: string[], variables: string[] } {
    const chars = CharStreams.fromString(input);
    const lexer = new JavaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new JavaParser(tokens);
    const tree = parser.compilationUnit();

    const classes: string[] = [];
    const variables: string[] = [];

    // Extract class names
    findClassNames(tree, classes);

    // Extract variable names
    findVariableNames(tree, variables);

    return { classes, variables };
}

function findClassNames(node: RuleContext, classes: string[]): void {
    if (node instanceof ClassDeclarationContext && node.identifier()) {
        classes.push(node.identifier().getText());
    }
    // if (node.children) {
    //     for (const child of node.children) {
    //         if (child instanceof RuleContext) {
    //             findClassNames(child, classes);
    //         }
    //     }
    // }
}

function findVariableNames(node: RuleContext, variables: string[]): void {
    if (node instanceof VariableDeclaratorIdContext && node.identifier()) {
        variables.push(node.identifier().getText());
    }
    // for (let i = 0; i < node.childCount; i++) {
    //     findVariableNames(node.getChild(i), variables);
    // }
}



// function extractJavaInfo(input: string): { classes: string[], variables: string[] } {
//     const chars = CharStreams.fromString(input);
//     const lexer = new JavaLexer(chars);
//     const tokens = new CommonTokenStream(lexer);
//     const parser = new JavaParser(tokens);
//     const tree = parser.compilationUnit();

//     const classes: string[] = [];
//     const variables: string[] = [];

//     // Visit class names
//     const classDeclarations = tree.descendantsOfType(ClassDeclarationContext);
//     for (const classDeclaration of classDeclarations) {
//         if (classDeclaration.IDENTIFIER()) {
//             classes.push(classDeclaration.IDENTIFIER().text);
//         }
//     }

//     // Visit variable names
//     const variableDeclarations = tree.descendantsOfType(VariableDeclaratorIdContext);
//     for (const variableDeclaration of variableDeclarations) {
//         if (variableDeclaration.IDENTIFIER()) {
//             variables.push(variableDeclaration.IDENTIFIER().text);
//         }
//     }

//     return { classes, variables };
// }


// For testing
// const testCode = `
// public class MyClass {
//     int myVariable;
//     static String anotherVariable;
// }
// `;

//const result = extractJavaInfo(testCode);


function getClassNamesFromJavaFile(fileContent: string): string[] {
	const classNameRegex = /class\s+([\w]+)/g;
	let match;
	const classNames: string[] = [];
	while (match = classNameRegex.exec(fileContent)) {
		classNames.push(match[1]);
	}
	return classNames;
}

function getAllJavaClassNamesInWorkspace(workspacePath: string): string[] {
	let results: string[] = [];
	const javaFiles = getAllFilesInDirectory(workspacePath, '.java');
	for (const javaFile of javaFiles) {
		const fileContent = fs.readFileSync(javaFile, 'utf-8');
		const classNames = getClassNamesFromJavaFile(fileContent);
		results = results.concat(classNames);
	}
	return results;
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

function writeClassNamesToJSON(workspacePath: string, classNames: string[]) {
	const jsonFilePath = path.join(workspacePath, 'javaClasses.json');
	const jsonData = {
		classes: classNames
	};
	fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 4), 'utf8');
	vscode.window.showInformationMessage('Java Classes written to javaClasses.json!');
}

function readRulesFromJSON(workspacePath: string): any {
	const jsonFilePath = path.join(workspacePath, 'rules', 'rules.json');
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
	return JSON.parse(jsonData);
}

function getClassNamesMatchingRules(workspacePath: string): string[] {
	const rules = readRulesFromJSON(workspacePath);
	const filteredRules = rules.rules.filter((rule: any) => rule.type === 'style' && rule.object === 'class');
	const classNames = getAllJavaClassNamesInWorkspace(workspacePath);
	let matchedClassNames: string[] = [];

	for (const rule of filteredRules) {
		const regex = new RegExp(rule.pattern);
		for (const className of classNames) {
			if (regex.test(className)) {
				matchedClassNames.push(className);
			}
		}
	}

	return matchedClassNames;
}

function getClassNamesNotMatchingRules(workspacePath: string) {
	const rules = readRulesFromJSON(workspacePath);
	const filteredRules = rules.rules.filter((rule: any) => rule.type === 'style' && rule.object === 'class');
	const classNames = getAllJavaClassNamesInWorkspace(workspacePath);
	let nonMatchedClasses: any[] = [];

	for (const rule of filteredRules) {
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

	return nonMatchedClasses;
}

function writeNonMatchingClassNamesToJSON(workspacePath: string, nonMatchedClasses: any[]) {
	const jsonFilePath = path.join(workspacePath, 'nonMatchingClasses.json');
	const jsonData = {
		nonMatchingClasses: nonMatchedClasses
	};
	fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 4), 'utf8');
	vscode.window.showInformationMessage('Non-matching classes written to nonMatchingClasses.json!');
}

function getVariableNamesFromJavaFile(fileContent: string): string[] {
	// A basic regex to match Java variable names.
	// This might not capture all variable names accurately especially in complex Java files.
	// const variableNameRegex = /\b(?:int|float|double|String|char|short|byte|long|boolean)[\[\] ]+([\w]+)/g;
	// const variableNameRegex = /\b(?:int|float|double|String|char|short|byte|long|boolean)(?:\s*\[\s*\])?\s+([a-zA-Z_]\w*)/g;
	const variableNameRegex = /(?<![public|private|protected|static|final])\s(?:byte|short|int|long|float|double|char|boolean|[A-Z]\w+)\s+([a-z]\w*)/g;
	;

	let match;
	const variableNames: string[] = [];
	while (match = variableNameRegex.exec(fileContent)) {
		variableNames.push(match[1]);
	}
	return variableNames;
}

function getAllJavaVariableNamesInWorkspace(workspacePath: string): string[] {
	let results: string[] = [];
	const javaFiles = getAllFilesInDirectory(workspacePath, '.java');
	for (const javaFile of javaFiles) {
		const fileContent = fs.readFileSync(javaFile, 'utf8');
		const contentWithoutComments = removeJavaComments(fileContent);
		const variableNames = getVariableNamesFromJavaFile(contentWithoutComments);
		results = results.concat(variableNames);
	}
	return results;
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


function getVariablesNotMatchingRules(workspacePath: string) {
	const rules = readRulesFromJSON(workspacePath);
	const filteredRules = rules.rules.filter((rule: any) => rule.type === 'style' && rule.object === 'variable');
	const variableNames = getAllJavaVariableNamesInWorkspace(workspacePath);
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

	return nonMatchedVariables;
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
			const nonMatchedClasses = getClassNamesNotMatchingRules(workspacePath);
			writeNonMatchingClassNamesToJSON(workspacePath, nonMatchedClasses);
			const nonMatchedVariables = getVariablesNotMatchingRules(workspacePath);
			writeNonMatchingVariablesToJSON(workspacePath, nonMatchedVariables);
		} else {
			vscode.window.showErrorMessage('No workspace found!');
		}
	});

	context.subscriptions.push(disposable);
}



