// Generated from JavaParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JavaParserListener from "./JavaParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JavaParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly MODULE = 51;
	public static readonly OPEN = 52;
	public static readonly REQUIRES = 53;
	public static readonly EXPORTS = 54;
	public static readonly OPENS = 55;
	public static readonly TO = 56;
	public static readonly USES = 57;
	public static readonly PROVIDES = 58;
	public static readonly WITH = 59;
	public static readonly TRANSITIVE = 60;
	public static readonly VAR = 61;
	public static readonly YIELD = 62;
	public static readonly RECORD = 63;
	public static readonly SEALED = 64;
	public static readonly PERMITS = 65;
	public static readonly NON_SEALED = 66;
	public static readonly DECIMAL_LITERAL = 67;
	public static readonly HEX_LITERAL = 68;
	public static readonly OCT_LITERAL = 69;
	public static readonly BINARY_LITERAL = 70;
	public static readonly FLOAT_LITERAL = 71;
	public static readonly HEX_FLOAT_LITERAL = 72;
	public static readonly BOOL_LITERAL = 73;
	public static readonly CHAR_LITERAL = 74;
	public static readonly STRING_LITERAL = 75;
	public static readonly TEXT_BLOCK = 76;
	public static readonly NULL_LITERAL = 77;
	public static readonly LPAREN = 78;
	public static readonly RPAREN = 79;
	public static readonly LBRACE = 80;
	public static readonly RBRACE = 81;
	public static readonly LBRACK = 82;
	public static readonly RBRACK = 83;
	public static readonly SEMI = 84;
	public static readonly COMMA = 85;
	public static readonly DOT = 86;
	public static readonly ASSIGN = 87;
	public static readonly GT = 88;
	public static readonly LT = 89;
	public static readonly BANG = 90;
	public static readonly TILDE = 91;
	public static readonly QUESTION = 92;
	public static readonly COLON = 93;
	public static readonly EQUAL = 94;
	public static readonly LE = 95;
	public static readonly GE = 96;
	public static readonly NOTEQUAL = 97;
	public static readonly AND = 98;
	public static readonly OR = 99;
	public static readonly INC = 100;
	public static readonly DEC = 101;
	public static readonly ADD = 102;
	public static readonly SUB = 103;
	public static readonly MUL = 104;
	public static readonly DIV = 105;
	public static readonly BITAND = 106;
	public static readonly BITOR = 107;
	public static readonly CARET = 108;
	public static readonly MOD = 109;
	public static readonly ADD_ASSIGN = 110;
	public static readonly SUB_ASSIGN = 111;
	public static readonly MUL_ASSIGN = 112;
	public static readonly DIV_ASSIGN = 113;
	public static readonly AND_ASSIGN = 114;
	public static readonly OR_ASSIGN = 115;
	public static readonly XOR_ASSIGN = 116;
	public static readonly MOD_ASSIGN = 117;
	public static readonly LSHIFT_ASSIGN = 118;
	public static readonly RSHIFT_ASSIGN = 119;
	public static readonly URSHIFT_ASSIGN = 120;
	public static readonly ARROW = 121;
	public static readonly COLONCOLON = 122;
	public static readonly AT = 123;
	public static readonly ELLIPSIS = 124;
	public static readonly WS = 125;
	public static readonly COMMENT = 126;
	public static readonly LINE_COMMENT = 127;
	public static readonly IDENTIFIER = 128;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_typeParameters = 8;
	public static readonly RULE_typeParameter = 9;
	public static readonly RULE_typeBound = 10;
	public static readonly RULE_enumDeclaration = 11;
	public static readonly RULE_enumConstants = 12;
	public static readonly RULE_enumConstant = 13;
	public static readonly RULE_enumBodyDeclarations = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_classBody = 16;
	public static readonly RULE_interfaceBody = 17;
	public static readonly RULE_classBodyDeclaration = 18;
	public static readonly RULE_memberDeclaration = 19;
	public static readonly RULE_methodDeclaration = 20;
	public static readonly RULE_methodBody = 21;
	public static readonly RULE_typeTypeOrVoid = 22;
	public static readonly RULE_genericMethodDeclaration = 23;
	public static readonly RULE_genericConstructorDeclaration = 24;
	public static readonly RULE_constructorDeclaration = 25;
	public static readonly RULE_compactConstructorDeclaration = 26;
	public static readonly RULE_fieldDeclaration = 27;
	public static readonly RULE_interfaceBodyDeclaration = 28;
	public static readonly RULE_interfaceMemberDeclaration = 29;
	public static readonly RULE_constDeclaration = 30;
	public static readonly RULE_constantDeclarator = 31;
	public static readonly RULE_interfaceMethodDeclaration = 32;
	public static readonly RULE_interfaceMethodModifier = 33;
	public static readonly RULE_genericInterfaceMethodDeclaration = 34;
	public static readonly RULE_interfaceCommonBodyDeclaration = 35;
	public static readonly RULE_variableDeclarators = 36;
	public static readonly RULE_variableDeclarator = 37;
	public static readonly RULE_variableDeclaratorId = 38;
	public static readonly RULE_variableInitializer = 39;
	public static readonly RULE_arrayInitializer = 40;
	public static readonly RULE_classOrInterfaceType = 41;
	public static readonly RULE_typeArgument = 42;
	public static readonly RULE_qualifiedNameList = 43;
	public static readonly RULE_formalParameters = 44;
	public static readonly RULE_receiverParameter = 45;
	public static readonly RULE_formalParameterList = 46;
	public static readonly RULE_formalParameter = 47;
	public static readonly RULE_lastFormalParameter = 48;
	public static readonly RULE_lambdaLVTIList = 49;
	public static readonly RULE_lambdaLVTIParameter = 50;
	public static readonly RULE_qualifiedName = 51;
	public static readonly RULE_literal = 52;
	public static readonly RULE_integerLiteral = 53;
	public static readonly RULE_floatLiteral = 54;
	public static readonly RULE_altAnnotationQualifiedName = 55;
	public static readonly RULE_annotation = 56;
	public static readonly RULE_elementValuePairs = 57;
	public static readonly RULE_elementValuePair = 58;
	public static readonly RULE_elementValue = 59;
	public static readonly RULE_elementValueArrayInitializer = 60;
	public static readonly RULE_annotationTypeDeclaration = 61;
	public static readonly RULE_annotationTypeBody = 62;
	public static readonly RULE_annotationTypeElementDeclaration = 63;
	public static readonly RULE_annotationTypeElementRest = 64;
	public static readonly RULE_annotationMethodOrConstantRest = 65;
	public static readonly RULE_annotationMethodRest = 66;
	public static readonly RULE_annotationConstantRest = 67;
	public static readonly RULE_defaultValue = 68;
	public static readonly RULE_moduleDeclaration = 69;
	public static readonly RULE_moduleBody = 70;
	public static readonly RULE_moduleDirective = 71;
	public static readonly RULE_requiresModifier = 72;
	public static readonly RULE_recordDeclaration = 73;
	public static readonly RULE_recordHeader = 74;
	public static readonly RULE_recordComponentList = 75;
	public static readonly RULE_recordComponent = 76;
	public static readonly RULE_recordBody = 77;
	public static readonly RULE_block = 78;
	public static readonly RULE_blockStatement = 79;
	public static readonly RULE_localVariableDeclaration = 80;
	public static readonly RULE_identifier = 81;
	public static readonly RULE_typeIdentifier = 82;
	public static readonly RULE_localTypeDeclaration = 83;
	public static readonly RULE_statement = 84;
	public static readonly RULE_catchClause = 85;
	public static readonly RULE_catchType = 86;
	public static readonly RULE_finallyBlock = 87;
	public static readonly RULE_resourceSpecification = 88;
	public static readonly RULE_resources = 89;
	public static readonly RULE_resource = 90;
	public static readonly RULE_switchBlockStatementGroup = 91;
	public static readonly RULE_switchLabel = 92;
	public static readonly RULE_forControl = 93;
	public static readonly RULE_forInit = 94;
	public static readonly RULE_enhancedForControl = 95;
	public static readonly RULE_parExpression = 96;
	public static readonly RULE_expressionList = 97;
	public static readonly RULE_methodCall = 98;
	public static readonly RULE_expression = 99;
	public static readonly RULE_pattern = 100;
	public static readonly RULE_lambdaExpression = 101;
	public static readonly RULE_lambdaParameters = 102;
	public static readonly RULE_lambdaBody = 103;
	public static readonly RULE_primary = 104;
	public static readonly RULE_switchExpression = 105;
	public static readonly RULE_switchLabeledRule = 106;
	public static readonly RULE_guardedPattern = 107;
	public static readonly RULE_switchRuleOutcome = 108;
	public static readonly RULE_classType = 109;
	public static readonly RULE_creator = 110;
	public static readonly RULE_createdName = 111;
	public static readonly RULE_innerCreator = 112;
	public static readonly RULE_arrayCreatorRest = 113;
	public static readonly RULE_classCreatorRest = 114;
	public static readonly RULE_explicitGenericInvocation = 115;
	public static readonly RULE_typeArgumentsOrDiamond = 116;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 117;
	public static readonly RULE_nonWildcardTypeArguments = 118;
	public static readonly RULE_typeList = 119;
	public static readonly RULE_typeType = 120;
	public static readonly RULE_primitiveType = 121;
	public static readonly RULE_typeArguments = 122;
	public static readonly RULE_superSuffix = 123;
	public static readonly RULE_explicitGenericInvocationSuffix = 124;
	public static readonly RULE_arguments = 125;
	public static readonly literalNames: (string | null)[] = [ null, "'abstract'", 
                                                            "'assert'", 
                                                            "'boolean'", 
                                                            "'break'", "'byte'", 
                                                            "'case'", "'catch'", 
                                                            "'char'", "'class'", 
                                                            "'const'", "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extends'", 
                                                            "'final'", "'finally'", 
                                                            "'float'", "'for'", 
                                                            "'if'", "'goto'", 
                                                            "'implements'", 
                                                            "'import'", 
                                                            "'instanceof'", 
                                                            "'int'", "'interface'", 
                                                            "'long'", "'native'", 
                                                            "'new'", "'package'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'public'", 
                                                            "'return'", 
                                                            "'short'", "'static'", 
                                                            "'strictfp'", 
                                                            "'super'", "'switch'", 
                                                            "'synchronized'", 
                                                            "'this'", "'throw'", 
                                                            "'throws'", 
                                                            "'transient'", 
                                                            "'try'", "'void'", 
                                                            "'volatile'", 
                                                            "'while'", "'module'", 
                                                            "'open'", "'requires'", 
                                                            "'exports'", 
                                                            "'opens'", "'to'", 
                                                            "'uses'", "'provides'", 
                                                            "'with'", "'transitive'", 
                                                            "'var'", "'yield'", 
                                                            "'record'", 
                                                            "'sealed'", 
                                                            "'permits'", 
                                                            "'non-sealed'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'null'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "';'", 
                                                            "','", "'.'", 
                                                            "'='", "'>'", 
                                                            "'<'", "'!'", 
                                                            "'~'", "'?'", 
                                                            "':'", "'=='", 
                                                            "'<='", "'>='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'&'", 
                                                            "'|'", "'^'", 
                                                            "'%'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'%='", "'<<='", 
                                                            "'>>='", "'>>>='", 
                                                            "'->'", "'::'", 
                                                            "'@'", "'...'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ABSTRACT", 
                                                             "ASSERT", "BOOLEAN", 
                                                             "BREAK", "BYTE", 
                                                             "CASE", "CATCH", 
                                                             "CHAR", "CLASS", 
                                                             "CONST", "CONTINUE", 
                                                             "DEFAULT", 
                                                             "DO", "DOUBLE", 
                                                             "ELSE", "ENUM", 
                                                             "EXTENDS", 
                                                             "FINAL", "FINALLY", 
                                                             "FLOAT", "FOR", 
                                                             "IF", "GOTO", 
                                                             "IMPLEMENTS", 
                                                             "IMPORT", "INSTANCEOF", 
                                                             "INT", "INTERFACE", 
                                                             "LONG", "NATIVE", 
                                                             "NEW", "PACKAGE", 
                                                             "PRIVATE", 
                                                             "PROTECTED", 
                                                             "PUBLIC", "RETURN", 
                                                             "SHORT", "STATIC", 
                                                             "STRICTFP", 
                                                             "SUPER", "SWITCH", 
                                                             "SYNCHRONIZED", 
                                                             "THIS", "THROW", 
                                                             "THROWS", "TRANSIENT", 
                                                             "TRY", "VOID", 
                                                             "VOLATILE", 
                                                             "WHILE", "MODULE", 
                                                             "OPEN", "REQUIRES", 
                                                             "EXPORTS", 
                                                             "OPENS", "TO", 
                                                             "USES", "PROVIDES", 
                                                             "WITH", "TRANSITIVE", 
                                                             "VAR", "YIELD", 
                                                             "RECORD", "SEALED", 
                                                             "PERMITS", 
                                                             "NON_SEALED", 
                                                             "DECIMAL_LITERAL", 
                                                             "HEX_LITERAL", 
                                                             "OCT_LITERAL", 
                                                             "BINARY_LITERAL", 
                                                             "FLOAT_LITERAL", 
                                                             "HEX_FLOAT_LITERAL", 
                                                             "BOOL_LITERAL", 
                                                             "CHAR_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "TEXT_BLOCK", 
                                                             "NULL_LITERAL", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LBRACK", "RBRACK", 
                                                             "SEMI", "COMMA", 
                                                             "DOT", "ASSIGN", 
                                                             "GT", "LT", 
                                                             "BANG", "TILDE", 
                                                             "QUESTION", 
                                                             "COLON", "EQUAL", 
                                                             "LE", "GE", 
                                                             "NOTEQUAL", 
                                                             "AND", "OR", 
                                                             "INC", "DEC", 
                                                             "ADD", "SUB", 
                                                             "MUL", "DIV", 
                                                             "BITAND", "BITOR", 
                                                             "CARET", "MOD", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MUL_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "LSHIFT_ASSIGN", 
                                                             "RSHIFT_ASSIGN", 
                                                             "URSHIFT_ASSIGN", 
                                                             "ARROW", "COLONCOLON", 
                                                             "AT", "ELLIPSIS", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT", 
                                                             "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants", 
		"enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody", 
		"interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration", 
		"methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration", 
		"constructorDeclaration", "compactConstructorDeclaration", "fieldDeclaration", 
		"interfaceBodyDeclaration", "interfaceMemberDeclaration", "constDeclaration", 
		"constantDeclarator", "interfaceMethodDeclaration", "interfaceMethodModifier", 
		"genericInterfaceMethodDeclaration", "interfaceCommonBodyDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "receiverParameter", "formalParameterList", "formalParameter", 
		"lastFormalParameter", "lambdaLVTIList", "lambdaLVTIParameter", "qualifiedName", 
		"literal", "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
		"annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "moduleDeclaration", 
		"moduleBody", "moduleDirective", "requiresModifier", "recordDeclaration", 
		"recordHeader", "recordComponentList", "recordComponent", "recordBody", 
		"block", "blockStatement", "localVariableDeclaration", "identifier", "typeIdentifier", 
		"localTypeDeclaration", "statement", "catchClause", "catchType", "finallyBlock", 
		"resourceSpecification", "resources", "resource", "switchBlockStatementGroup", 
		"switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression", 
		"expressionList", "methodCall", "expression", "pattern", "lambdaExpression", 
		"lambdaParameters", "lambdaBody", "primary", "switchExpression", "switchLabeledRule", 
		"guardedPattern", "switchRuleOutcome", "classType", "creator", "createdName", 
		"innerCreator", "arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", 
		"typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", 
		"typeList", "typeType", "primitiveType", "typeArguments", "superSuffix", 
		"explicitGenericInvocationSuffix", "arguments",
	];
	public get grammarFileName(): string { return "JavaParser.g4"; }
	public get literalNames(): (string | null)[] { return JavaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JavaParser.symbolicNames; }
	public get ruleNames(): string[] { return JavaParser.ruleNames; }
	public get serializedATN(): number[] { return JavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JavaParser._ATN, JavaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 252;
					this.packageDeclaration();
					}
					break;
				}
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 257;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 25:
							{
							this.state = 255;
							this.importDeclaration();
							}
							break;
						case 84:
							{
							this.state = 256;
							this.match(JavaParser.SEMI);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268763650) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294705255) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 524291) !== 0) || _la===123 || _la===128) {
					{
					this.state = 264;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 9:
					case 16:
					case 18:
					case 28:
					case 33:
					case 34:
					case 35:
					case 38:
					case 39:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 123:
					case 128:
						{
						this.state = 262;
						this.typeDeclaration();
						}
						break;
					case 84:
						{
						this.state = 263;
						this.match(JavaParser.SEMI);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 269;
				this.moduleDeclaration();
				this.state = 270;
				this.match(JavaParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JavaParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 274;
				this.annotation();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 280;
			this.match(JavaParser.PACKAGE);
			this.state = 281;
			this.qualifiedName();
			this.state = 282;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.match(JavaParser.IMPORT);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 285;
				this.match(JavaParser.STATIC);
				}
			}

			this.state = 288;
			this.qualifiedName();
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===86) {
				{
				this.state = 289;
				this.match(JavaParser.DOT);
				this.state = 290;
				this.match(JavaParser.MUL);
				}
			}

			this.state = 293;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JavaParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 295;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				{
				this.state = 301;
				this.classDeclaration();
				}
				break;
			case 16:
				{
				this.state = 302;
				this.enumDeclaration();
				}
				break;
			case 28:
				{
				this.state = 303;
				this.interfaceDeclaration();
				}
				break;
			case 123:
				{
				this.state = 304;
				this.annotationTypeDeclaration();
				}
				break;
			case 63:
				{
				this.state = 305;
				this.recordDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JavaParser.RULE_modifier);
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 18:
			case 33:
			case 34:
			case 35:
			case 38:
			case 39:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 308;
				this.classOrInterfaceModifier();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 309;
				this.match(JavaParser.NATIVE);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 310;
				this.match(JavaParser.SYNCHRONIZED);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 311;
				this.match(JavaParser.TRANSIENT);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 312;
				this.match(JavaParser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 315;
				this.annotation();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 316;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 317;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 318;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 319;
				this.match(JavaParser.STATIC);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 320;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 321;
				this.match(JavaParser.FINAL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 322;
				this.match(JavaParser.STRICTFP);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 323;
				this.match(JavaParser.SEALED);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 324;
				this.match(JavaParser.NON_SEALED);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let localctx: VariableModifierContext = new VariableModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JavaParser.RULE_variableModifier);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 327;
				this.match(JavaParser.FINAL);
				}
				break;
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 328;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.match(JavaParser.CLASS);
			this.state = 332;
			this.identifier();
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 333;
				this.typeParameters();
				}
			}

			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 336;
				this.match(JavaParser.EXTENDS);
				this.state = 337;
				this.typeType();
				}
			}

			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 340;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 341;
				this.typeList();
				}
			}

			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 344;
				this.match(JavaParser.PERMITS);
				this.state = 345;
				this.typeList();
				}
			}

			this.state = 348;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.match(JavaParser.LT);
			this.state = 351;
			this.typeParameter();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 352;
				this.match(JavaParser.COMMA);
				this.state = 353;
				this.typeParameter();
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 359;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 361;
					this.annotation();
					}
					}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 367;
			this.identifier();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 368;
				this.match(JavaParser.EXTENDS);
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 369;
						this.annotation();
						}
						}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 375;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let localctx: TypeBoundContext = new TypeBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.typeType();
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===106) {
				{
				{
				this.state = 379;
				this.match(JavaParser.BITAND);
				this.state = 380;
				this.typeType();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.match(JavaParser.ENUM);
			this.state = 387;
			this.identifier();
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 388;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 389;
				this.typeList();
				}
			}

			this.state = 392;
			this.match(JavaParser.LBRACE);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
				{
				this.state = 393;
				this.enumConstants();
				}
			}

			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===85) {
				{
				this.state = 396;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===84) {
				{
				this.state = 399;
				this.enumBodyDeclarations();
				}
			}

			this.state = 402;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let localctx: EnumConstantsContext = new EnumConstantsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 404;
			this.enumConstant();
			this.state = 409;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 405;
					this.match(JavaParser.COMMA);
					this.state = 406;
					this.enumConstant();
					}
					}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let localctx: EnumConstantContext = new EnumConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 412;
					this.annotation();
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 418;
			this.identifier();
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 419;
				this.arguments();
				}
			}

			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80) {
				{
				this.state = 422;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(JavaParser.SEMI);
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 426;
				this.classBodyDeclaration();
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JavaParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 432;
			this.match(JavaParser.INTERFACE);
			this.state = 433;
			this.identifier();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 434;
				this.typeParameters();
				}
			}

			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 437;
				this.match(JavaParser.EXTENDS);
				this.state = 438;
				this.typeList();
				}
			}

			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 441;
				this.match(JavaParser.PERMITS);
				this.state = 442;
				this.typeList();
				}
			}

			this.state = 445;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let localctx: ClassBodyContext = new ClassBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
			this.match(JavaParser.LBRACE);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 448;
				this.classBodyDeclaration();
				}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 454;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let localctx: InterfaceBodyContext = new InterfaceBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 456;
			this.match(JavaParser.LBRACE);
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014663466) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17301507) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 457;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 463;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 465;
				this.match(JavaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===38) {
					{
					this.state = 466;
					this.match(JavaParser.STATIC);
					}
				}

				this.state = 469;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 473;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 470;
						this.modifier();
						}
						}
					}
					this.state = 475;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 476;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JavaParser.RULE_memberDeclaration);
		try {
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 479;
				this.recordDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 480;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 481;
				this.genericMethodDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 482;
				this.fieldDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 483;
				this.constructorDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 484;
				this.genericConstructorDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 485;
				this.interfaceDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 486;
				this.annotationTypeDeclaration();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 487;
				this.classDeclaration();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 488;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 491;
			this.typeTypeOrVoid();
			this.state = 492;
			this.identifier();
			this.state = 493;
			this.formalParameters();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===82) {
				{
				{
				this.state = 494;
				this.match(JavaParser.LBRACK);
				this.state = 495;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 501;
				this.match(JavaParser.THROWS);
				this.state = 502;
				this.qualifiedNameList();
				}
			}

			this.state = 505;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let localctx: MethodBodyContext = new MethodBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, JavaParser.RULE_methodBody);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 80:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 507;
				this.block();
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 508;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, JavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 511;
				this.typeType();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 512;
				this.match(JavaParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			this.typeParameters();
			this.state = 516;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 518;
			this.typeParameters();
			this.state = 519;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 521;
			this.identifier();
			this.state = 522;
			this.formalParameters();
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 523;
				this.match(JavaParser.THROWS);
				this.state = 524;
				this.qualifiedNameList();
				}
			}

			this.state = 527;
			localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		let localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, JavaParser.RULE_compactConstructorDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 529;
					this.modifier();
					}
					}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 535;
			this.identifier();
			this.state = 536;
			localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let localctx: FieldDeclarationContext = new FieldDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 538;
			this.typeType();
			this.state = 539;
			this.variableDeclarators();
			this.state = 540;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 5:
			case 8:
			case 9:
			case 12:
			case 14:
			case 16:
			case 18:
			case 20:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 35:
			case 37:
			case 38:
			case 39:
			case 42:
			case 46:
			case 48:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 89:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 542;
						this.modifier();
						}
						}
					}
					this.state = 547;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 548;
				this.interfaceMemberDeclaration();
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 549;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, JavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 552;
				this.recordDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 553;
				this.constDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 554;
				this.interfaceMethodDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 555;
				this.genericInterfaceMethodDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 556;
				this.interfaceDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 557;
				this.annotationTypeDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 558;
				this.classDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 559;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let localctx: ConstDeclarationContext = new ConstDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, JavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this.typeType();
			this.state = 563;
			this.constantDeclarator();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 564;
				this.match(JavaParser.COMMA);
				this.state = 565;
				this.constantDeclarator();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, JavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this.identifier();
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===82) {
				{
				{
				this.state = 574;
				this.match(JavaParser.LBRACK);
				this.state = 575;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 581;
			this.match(JavaParser.ASSIGN);
			this.state = 582;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, JavaParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 587;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 584;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 590;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, JavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 592;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 593;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 594;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 595;
				this.match(JavaParser.DEFAULT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 596;
				this.match(JavaParser.STATIC);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 597;
				this.match(JavaParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, JavaParser.RULE_genericInterfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===12 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2147418137) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 600;
				this.interfaceMethodModifier();
				}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 606;
			this.typeParameters();
			this.state = 607;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		let localctx: InterfaceCommonBodyDeclarationContext = new InterfaceCommonBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, JavaParser.RULE_interfaceCommonBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 609;
					this.annotation();
					}
					}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 615;
			this.typeTypeOrVoid();
			this.state = 616;
			this.identifier();
			this.state = 617;
			this.formalParameters();
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===82) {
				{
				{
				this.state = 618;
				this.match(JavaParser.LBRACK);
				this.state = 619;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 625;
				this.match(JavaParser.THROWS);
				this.state = 626;
				this.qualifiedNameList();
				}
			}

			this.state = 629;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 631;
			this.variableDeclarator();
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 632;
				this.match(JavaParser.COMMA);
				this.state = 633;
				this.variableDeclarator();
				}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 639;
			this.variableDeclaratorId();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===87) {
				{
				this.state = 640;
				this.match(JavaParser.ASSIGN);
				this.state = 641;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 644;
			this.identifier();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===82) {
				{
				{
				this.state = 645;
				this.match(JavaParser.LBRACK);
				this.state = 646;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let localctx: VariableInitializerContext = new VariableInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, JavaParser.RULE_variableInitializer);
		try {
			this.state = 654;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 80:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 652;
				this.arrayInitializer();
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 41:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 89:
			case 90:
			case 91:
			case 100:
			case 101:
			case 102:
			case 103:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 653;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let localctx: ArrayInitializerContext = new ArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 656;
			this.match(JavaParser.LBRACE);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154826751) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
				{
				this.state = 657;
				this.variableInitializer();
				this.state = 662;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 658;
						this.match(JavaParser.COMMA);
						this.state = 659;
						this.variableInitializer();
						}
						}
					}
					this.state = 664;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 665;
					this.match(JavaParser.COMMA);
					}
				}

				}
			}

			this.state = 670;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, JavaParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 672;
					this.identifier();
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===89) {
						{
						this.state = 673;
						this.typeArguments();
						}
					}

					this.state = 676;
					this.match(JavaParser.DOT);
					}
					}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 683;
			this.typeIdentifier();
			this.state = 685;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 684;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 699;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 687;
				this.typeType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
					{
					{
					this.state = 688;
					this.annotation();
					}
					}
					this.state = 693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 694;
				this.match(JavaParser.QUESTION);
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17 || _la===40) {
					{
					this.state = 695;
					_la = this._input.LA(1);
					if(!(_la===17 || _la===40)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 696;
					this.typeType();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let localctx: QualifiedNameListContext = new QualifiedNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 701;
			this.qualifiedName();
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 702;
				this.match(JavaParser.COMMA);
				this.state = 703;
				this.qualifiedName();
				}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let localctx: FormalParametersContext = new FormalParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 709;
			this.match(JavaParser.LPAREN);
			this.state = 721;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la===123 || _la===128) {
					{
					this.state = 710;
					this.receiverParameter();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 713;
				this.receiverParameter();
				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 714;
					this.match(JavaParser.COMMA);
					this.state = 715;
					this.formalParameterList();
					}
				}

				}
				break;
			case 3:
				{
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la===123 || _la===128) {
					{
					this.state = 718;
					this.formalParameterList();
					}
				}

				}
				break;
			}
			this.state = 723;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let localctx: ReceiverParameterContext = new ReceiverParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, JavaParser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 725;
			this.typeType();
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===128) {
				{
				{
				this.state = 726;
				this.identifier();
				this.state = 727;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 734;
			this.match(JavaParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, JavaParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 749;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 736;
				this.formalParameter();
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 737;
						this.match(JavaParser.COMMA);
						this.state = 738;
						this.formalParameter();
						}
						}
					}
					this.state = 743;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 744;
					this.match(JavaParser.COMMA);
					this.state = 745;
					this.lastFormalParameter();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 748;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let localctx: FormalParameterContext = new FormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, JavaParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 754;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 751;
					this.variableModifier();
					}
					}
				}
				this.state = 756;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			}
			this.state = 757;
			this.typeType();
			this.state = 758;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let localctx: LastFormalParameterContext = new LastFormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, JavaParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 763;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 760;
					this.variableModifier();
					}
					}
				}
				this.state = 765;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
			}
			this.state = 766;
			this.typeType();
			this.state = 770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 767;
				this.annotation();
				}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 773;
			this.match(JavaParser.ELLIPSIS);
			this.state = 774;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIList(): LambdaLVTIListContext {
		let localctx: LambdaLVTIListContext = new LambdaLVTIListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, JavaParser.RULE_lambdaLVTIList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 776;
			this.lambdaLVTIParameter();
			this.state = 781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 777;
				this.match(JavaParser.COMMA);
				this.state = 778;
				this.lambdaLVTIParameter();
				}
				}
				this.state = 783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIParameter(): LambdaLVTIParameterContext {
		let localctx: LambdaLVTIParameterContext = new LambdaLVTIParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, JavaParser.RULE_lambdaLVTIParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 787;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 784;
					this.variableModifier();
					}
					}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			}
			this.state = 790;
			this.match(JavaParser.VAR);
			this.state = 791;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 793;
			this.identifier();
			this.state = 798;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 794;
					this.match(JavaParser.DOT);
					this.state = 795;
					this.identifier();
					}
					}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, JavaParser.RULE_literal);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 67:
			case 68:
			case 69:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 801;
				this.integerLiteral();
				}
				break;
			case 71:
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 802;
				this.floatLiteral();
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 803;
				this.match(JavaParser.CHAR_LITERAL);
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 804;
				this.match(JavaParser.STRING_LITERAL);
				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 805;
				this.match(JavaParser.BOOL_LITERAL);
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 806;
				this.match(JavaParser.NULL_LITERAL);
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 807;
				this.match(JavaParser.TEXT_BLOCK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let localctx: IntegerLiteralContext = new IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 810;
			_la = this._input.LA(1);
			if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let localctx: FloatLiteralContext = new FloatLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, JavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 812;
			_la = this._input.LA(1);
			if(!(_la===71 || _la===72)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		let localctx: AltAnnotationQualifiedNameContext = new AltAnnotationQualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, JavaParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===128) {
				{
				{
				this.state = 814;
				this.identifier();
				this.state = 815;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 822;
			this.match(JavaParser.AT);
			this.state = 823;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 825;
				this.match(JavaParser.AT);
				this.state = 826;
				this.qualifiedName();
				}
				break;
			case 2:
				{
				this.state = 827;
				this.altAnnotationQualifiedName();
				}
				break;
			}
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 830;
				this.match(JavaParser.LPAREN);
				this.state = 833;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 831;
					this.elementValuePairs();
					}
					break;
				case 2:
					{
					this.state = 832;
					this.elementValue();
					}
					break;
				}
				this.state = 835;
				this.match(JavaParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let localctx: ElementValuePairsContext = new ElementValuePairsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 838;
			this.elementValuePair();
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 839;
				this.match(JavaParser.COMMA);
				this.state = 840;
				this.elementValuePair();
				}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let localctx: ElementValuePairContext = new ElementValuePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 846;
			this.identifier();
			this.state = 847;
			this.match(JavaParser.ASSIGN);
			this.state = 848;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let localctx: ElementValueContext = new ElementValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, JavaParser.RULE_elementValue);
		try {
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 850;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 851;
				this.annotation();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 852;
				this.elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this.match(JavaParser.LBRACE);
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154826751) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
				{
				this.state = 856;
				this.elementValue();
				this.state = 861;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 857;
						this.match(JavaParser.COMMA);
						this.state = 858;
						this.elementValue();
						}
						}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
				}
				}
			}

			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===85) {
				{
				this.state = 866;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 869;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 871;
			this.match(JavaParser.AT);
			this.state = 872;
			this.match(JavaParser.INTERFACE);
			this.state = 873;
			this.identifier();
			this.state = 874;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 876;
			this.match(JavaParser.LBRACE);
			this.state = 880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294779511) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 524291) !== 0) || _la===123 || _la===128) {
				{
				{
				this.state = 877;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 883;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 5:
			case 8:
			case 9:
			case 14:
			case 16:
			case 18:
			case 20:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 35:
			case 37:
			case 38:
			case 39:
			case 42:
			case 46:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 888;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 885;
						this.modifier();
						}
						}
					}
					this.state = 890;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
				}
				this.state = 891;
				this.annotationTypeElementRest();
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 892;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, JavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 919;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 895;
				this.typeType();
				this.state = 896;
				this.annotationMethodOrConstantRest();
				this.state = 897;
				this.match(JavaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 899;
				this.classDeclaration();
				this.state = 901;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 900;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 903;
				this.interfaceDeclaration();
				this.state = 905;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 904;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 907;
				this.enumDeclaration();
				this.state = 909;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 908;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 911;
				this.annotationTypeDeclaration();
				this.state = 913;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 912;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 915;
				this.recordDeclaration();
				this.state = 917;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 916;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 921;
				this.annotationMethodRest();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 922;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this.identifier();
			this.state = 926;
			this.match(JavaParser.LPAREN);
			this.state = 927;
			this.match(JavaParser.RPAREN);
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 928;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 931;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let localctx: DefaultValueContext = new DefaultValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 933;
			this.match(JavaParser.DEFAULT);
			this.state = 934;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, JavaParser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 936;
				this.match(JavaParser.OPEN);
				}
			}

			this.state = 939;
			this.match(JavaParser.MODULE);
			this.state = 940;
			this.qualifiedName();
			this.state = 941;
			this.moduleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let localctx: ModuleBodyContext = new ModuleBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, JavaParser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 943;
			this.match(JavaParser.LBRACE);
			this.state = 947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 55) !== 0)) {
				{
				{
				this.state = 944;
				this.moduleDirective();
				}
				}
				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 950;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, JavaParser.RULE_moduleDirective);
		let _la: number;
		try {
			let _alt: number;
			this.state = 988;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 53:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 952;
				this.match(JavaParser.REQUIRES);
				this.state = 956;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 953;
						this.requiresModifier();
						}
						}
					}
					this.state = 958;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 959;
				this.qualifiedName();
				this.state = 960;
				this.match(JavaParser.SEMI);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 962;
				this.match(JavaParser.EXPORTS);
				this.state = 963;
				this.qualifiedName();
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===56) {
					{
					this.state = 964;
					this.match(JavaParser.TO);
					this.state = 965;
					this.qualifiedName();
					}
				}

				this.state = 968;
				this.match(JavaParser.SEMI);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 970;
				this.match(JavaParser.OPENS);
				this.state = 971;
				this.qualifiedName();
				this.state = 974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===56) {
					{
					this.state = 972;
					this.match(JavaParser.TO);
					this.state = 973;
					this.qualifiedName();
					}
				}

				this.state = 976;
				this.match(JavaParser.SEMI);
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 978;
				this.match(JavaParser.USES);
				this.state = 979;
				this.qualifiedName();
				this.state = 980;
				this.match(JavaParser.SEMI);
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 982;
				this.match(JavaParser.PROVIDES);
				this.state = 983;
				this.qualifiedName();
				this.state = 984;
				this.match(JavaParser.WITH);
				this.state = 985;
				this.qualifiedName();
				this.state = 986;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let localctx: RequiresModifierContext = new RequiresModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, JavaParser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 990;
			_la = this._input.LA(1);
			if(!(_la===38 || _la===60)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let localctx: RecordDeclarationContext = new RecordDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, JavaParser.RULE_recordDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 992;
			this.match(JavaParser.RECORD);
			this.state = 993;
			this.identifier();
			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 994;
				this.typeParameters();
				}
			}

			this.state = 997;
			this.recordHeader();
			this.state = 1000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 998;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 999;
				this.typeList();
				}
			}

			this.state = 1002;
			this.recordBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordHeader(): RecordHeaderContext {
		let localctx: RecordHeaderContext = new RecordHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, JavaParser.RULE_recordHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1004;
			this.match(JavaParser.LPAREN);
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la===123 || _la===128) {
				{
				this.state = 1005;
				this.recordComponentList();
				}
			}

			this.state = 1008;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordComponentList(): RecordComponentListContext {
		let localctx: RecordComponentListContext = new RecordComponentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, JavaParser.RULE_recordComponentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1010;
			this.recordComponent();
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 1011;
				this.match(JavaParser.COMMA);
				this.state = 1012;
				this.recordComponent();
				}
				}
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordComponent(): RecordComponentContext {
		let localctx: RecordComponentContext = new RecordComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, JavaParser.RULE_recordComponent);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1018;
			this.typeType();
			this.state = 1019;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordBody(): RecordBodyContext {
		let localctx: RecordBodyContext = new RecordBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, JavaParser.RULE_recordBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1021;
			this.match(JavaParser.LBRACE);
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la===123 || _la===128) {
				{
				this.state = 1024;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1022;
					this.classBodyDeclaration();
					}
					break;
				case 2:
					{
					this.state = 1023;
					this.compactConstructorDeclaration();
					}
					break;
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1029;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1031;
			this.match(JavaParser.LBRACE);
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 276824079) !== 0)) {
				{
				{
				this.state = 1032;
				this.blockStatement();
				}
				}
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1038;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, JavaParser.RULE_blockStatement);
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1040;
				this.localVariableDeclaration();
				this.state = 1041;
				this.match(JavaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1043;
				this.localTypeDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1044;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, JavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1050;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1047;
					this.variableModifier();
					}
					}
				}
				this.state = 1052;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 1061;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1053;
				this.match(JavaParser.VAR);
				this.state = 1054;
				this.identifier();
				this.state = 1055;
				this.match(JavaParser.ASSIGN);
				this.state = 1056;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 1058;
				this.typeType();
				this.state = 1059;
				this.variableDeclarators();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, JavaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1063;
			_la = this._input.LA(1);
			if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===128)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let localctx: TypeIdentifierContext = new TypeIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, JavaParser.RULE_typeIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1065;
			_la = this._input.LA(1);
			if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 29695) !== 0) || _la===128)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, JavaParser.RULE_localTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1070;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1067;
					this.classOrInterfaceModifier();
					}
					}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1076;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				{
				this.state = 1073;
				this.classDeclaration();
				}
				break;
			case 28:
				{
				this.state = 1074;
				this.interfaceDeclaration();
				}
				break;
			case 63:
				{
				this.state = 1075;
				this.recordDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, JavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1078;
				localctx._blockLabel = this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1079;
				this.match(JavaParser.ASSERT);
				this.state = 1080;
				this.expression(0);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===93) {
					{
					this.state = 1081;
					this.match(JavaParser.COLON);
					this.state = 1082;
					this.expression(0);
					}
				}

				this.state = 1085;
				this.match(JavaParser.SEMI);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1087;
				this.match(JavaParser.IF);
				this.state = 1088;
				this.parExpression();
				this.state = 1089;
				this.statement();
				this.state = 1092;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1090;
					this.match(JavaParser.ELSE);
					this.state = 1091;
					this.statement();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1094;
				this.match(JavaParser.FOR);
				this.state = 1095;
				this.match(JavaParser.LPAREN);
				this.state = 1096;
				this.forControl();
				this.state = 1097;
				this.match(JavaParser.RPAREN);
				this.state = 1098;
				this.statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1100;
				this.match(JavaParser.WHILE);
				this.state = 1101;
				this.parExpression();
				this.state = 1102;
				this.statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1104;
				this.match(JavaParser.DO);
				this.state = 1105;
				this.statement();
				this.state = 1106;
				this.match(JavaParser.WHILE);
				this.state = 1107;
				this.parExpression();
				this.state = 1108;
				this.match(JavaParser.SEMI);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1110;
				this.match(JavaParser.TRY);
				this.state = 1111;
				this.block();
				this.state = 1121;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 7:
					{
					this.state = 1113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1112;
						this.catchClause();
						}
						}
						this.state = 1115;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===7);
					this.state = 1118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===19) {
						{
						this.state = 1117;
						this.finallyBlock();
						}
					}

					}
					break;
				case 19:
					{
					this.state = 1120;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1123;
				this.match(JavaParser.TRY);
				this.state = 1124;
				this.resourceSpecification();
				this.state = 1125;
				this.block();
				this.state = 1129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===7) {
					{
					{
					this.state = 1126;
					this.catchClause();
					}
					}
					this.state = 1131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 1132;
					this.finallyBlock();
					}
				}

				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1135;
				this.match(JavaParser.SWITCH);
				this.state = 1136;
				this.parExpression();
				this.state = 1137;
				this.match(JavaParser.LBRACE);
				this.state = 1141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1138;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 1143;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				}
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===12) {
					{
					{
					this.state = 1144;
					this.switchLabel();
					}
					}
					this.state = 1149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1150;
				this.match(JavaParser.RBRACE);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1152;
				this.match(JavaParser.SYNCHRONIZED);
				this.state = 1153;
				this.parExpression();
				this.state = 1154;
				this.block();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1156;
				this.match(JavaParser.RETURN);
				this.state = 1158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
					{
					this.state = 1157;
					this.expression(0);
					}
				}

				this.state = 1160;
				this.match(JavaParser.SEMI);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1161;
				this.match(JavaParser.THROW);
				this.state = 1162;
				this.expression(0);
				this.state = 1163;
				this.match(JavaParser.SEMI);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1165;
				this.match(JavaParser.BREAK);
				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===128) {
					{
					this.state = 1166;
					this.identifier();
					}
				}

				this.state = 1169;
				this.match(JavaParser.SEMI);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1170;
				this.match(JavaParser.CONTINUE);
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===128) {
					{
					this.state = 1171;
					this.identifier();
					}
				}

				this.state = 1174;
				this.match(JavaParser.SEMI);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1175;
				this.match(JavaParser.YIELD);
				this.state = 1176;
				this.expression(0);
				this.state = 1177;
				this.match(JavaParser.SEMI);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1179;
				this.match(JavaParser.SEMI);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1180;
				localctx._statementExpression = this.expression(0);
				this.state = 1181;
				this.match(JavaParser.SEMI);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 1183;
				this.switchExpression();
				this.state = 1185;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
				case 1:
					{
					this.state = 1184;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 1187;
				localctx._identifierLabel = this.identifier();
				this.state = 1188;
				this.match(JavaParser.COLON);
				this.state = 1189;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, JavaParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1193;
			this.match(JavaParser.CATCH);
			this.state = 1194;
			this.match(JavaParser.LPAREN);
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1195;
					this.variableModifier();
					}
					}
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			}
			this.state = 1201;
			this.catchType();
			this.state = 1202;
			this.identifier();
			this.state = 1203;
			this.match(JavaParser.RPAREN);
			this.state = 1204;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let localctx: CatchTypeContext = new CatchTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, JavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1206;
			this.qualifiedName();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===107) {
				{
				{
				this.state = 1207;
				this.match(JavaParser.BITOR);
				this.state = 1208;
				this.qualifiedName();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let localctx: FinallyBlockContext = new FinallyBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, JavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1214;
			this.match(JavaParser.FINALLY);
			this.state = 1215;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, JavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1217;
			this.match(JavaParser.LPAREN);
			this.state = 1218;
			this.resources();
			this.state = 1220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===84) {
				{
				this.state = 1219;
				this.match(JavaParser.SEMI);
				}
			}

			this.state = 1222;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let localctx: ResourcesContext = new ResourcesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, JavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1224;
			this.resource();
			this.state = 1229;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1225;
					this.match(JavaParser.SEMI);
					this.state = 1226;
					this.resource();
					}
					}
				}
				this.state = 1231;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let localctx: ResourceContext = new ResourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, JavaParser.RULE_resource);
		try {
			let _alt: number;
			this.state = 1249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1235;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1232;
						this.variableModifier();
						}
						}
					}
					this.state = 1237;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
				}
				this.state = 1243;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 1238;
					this.classOrInterfaceType();
					this.state = 1239;
					this.variableDeclaratorId();
					}
					break;
				case 2:
					{
					this.state = 1241;
					this.match(JavaParser.VAR);
					this.state = 1242;
					this.identifier();
					}
					break;
				}
				this.state = 1245;
				this.match(JavaParser.ASSIGN);
				this.state = 1246;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1248;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1251;
				this.switchLabel();
				}
				}
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===6 || _la===12);
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1256;
				this.blockStatement();
				}
				}
				this.state = 1259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 276824079) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let localctx: SwitchLabelContext = new SwitchLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, JavaParser.RULE_switchLabel);
		try {
			this.state = 1272;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1261;
				this.match(JavaParser.CASE);
				this.state = 1267;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1262;
					localctx._constantExpression = this.expression(0);
					}
					break;
				case 2:
					{
					this.state = 1263;
					localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
					}
					break;
				case 3:
					{
					this.state = 1264;
					this.typeType();
					this.state = 1265;
					localctx._varName = this.identifier();
					}
					break;
				}
				this.state = 1269;
				this.match(JavaParser.COLON);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1270;
				this.match(JavaParser.DEFAULT);
				this.state = 1271;
				this.match(JavaParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let localctx: ForControlContext = new ForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1286;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1274;
				this.enhancedForControl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
					{
					this.state = 1275;
					this.forInit();
					}
				}

				this.state = 1278;
				this.match(JavaParser.SEMI);
				this.state = 1280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
					{
					this.state = 1279;
					this.expression(0);
					}
				}

				this.state = 1282;
				this.match(JavaParser.SEMI);
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
					{
					this.state = 1283;
					localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, JavaParser.RULE_forInit);
		try {
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1288;
				this.localVariableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1289;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let localctx: EnhancedForControlContext = new EnhancedForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, JavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1295;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1292;
					this.variableModifier();
					}
					}
				}
				this.state = 1297;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 155, this._ctx);
			}
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1298;
				this.typeType();
				}
				break;
			case 2:
				{
				this.state = 1299;
				this.match(JavaParser.VAR);
				}
				break;
			}
			this.state = 1302;
			this.variableDeclaratorId();
			this.state = 1303;
			this.match(JavaParser.COLON);
			this.state = 1304;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let localctx: ParExpressionContext = new ParExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1306;
			this.match(JavaParser.LPAREN);
			this.state = 1307;
			this.expression(0);
			this.state = 1308;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1310;
			this.expression(0);
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 1311;
				this.match(JavaParser.COMMA);
				this.state = 1312;
				this.expression(0);
				}
				}
				this.state = 1317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let localctx: MethodCallContext = new MethodCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, JavaParser.RULE_methodCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 128:
				{
				this.state = 1318;
				this.identifier();
				}
				break;
			case 43:
				{
				this.state = 1319;
				this.match(JavaParser.THIS);
				}
				break;
			case 40:
				{
				this.state = 1320;
				this.match(JavaParser.SUPER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1323;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 198;
		this.enterRecursionRule(localctx, 198, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1368;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				{
				this.state = 1326;
				this.primary();
				}
				break;
			case 2:
				{
				this.state = 1327;
				this.methodCall();
				}
				break;
			case 3:
				{
				this.state = 1328;
				this.typeType();
				this.state = 1329;
				this.match(JavaParser.COLONCOLON);
				this.state = 1335;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 89:
				case 128:
					{
					this.state = 1331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===89) {
						{
						this.state = 1330;
						this.typeArguments();
						}
					}

					this.state = 1333;
					this.identifier();
					}
					break;
				case 31:
					{
					this.state = 1334;
					this.match(JavaParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				{
				this.state = 1337;
				this.classType();
				this.state = 1338;
				this.match(JavaParser.COLONCOLON);
				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===89) {
					{
					this.state = 1339;
					this.typeArguments();
					}
				}

				this.state = 1342;
				this.match(JavaParser.NEW);
				}
				break;
			case 5:
				{
				this.state = 1344;
				this.switchExpression();
				}
				break;
			case 6:
				{
				this.state = 1345;
				localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15363) !== 0))) {
				    localctx._prefix = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1346;
				this.expression(17);
				}
				break;
			case 7:
				{
				this.state = 1347;
				this.match(JavaParser.LPAREN);
				this.state = 1351;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1348;
						this.annotation();
						}
						}
					}
					this.state = 1353;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
				}
				this.state = 1354;
				this.typeType();
				this.state = 1359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===106) {
					{
					{
					this.state = 1355;
					this.match(JavaParser.BITAND);
					this.state = 1356;
					this.typeType();
					}
					}
					this.state = 1361;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1362;
				this.match(JavaParser.RPAREN);
				this.state = 1363;
				this.expression(16);
				}
				break;
			case 8:
				{
				this.state = 1365;
				this.match(JavaParser.NEW);
				this.state = 1366;
				this.creator();
				}
				break;
			case 9:
				{
				this.state = 1367;
				this.lambdaExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1453;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1451;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1370;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1371;
						localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 35) !== 0))) {
						    localctx._bop = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1372;
						this.expression(15);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1373;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1374;
						localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===102 || _la===103)) {
						    localctx._bop = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1375;
						this.expression(14);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1376;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1384;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
						case 1:
							{
							this.state = 1377;
							this.match(JavaParser.LT);
							this.state = 1378;
							this.match(JavaParser.LT);
							}
							break;
						case 2:
							{
							this.state = 1379;
							this.match(JavaParser.GT);
							this.state = 1380;
							this.match(JavaParser.GT);
							this.state = 1381;
							this.match(JavaParser.GT);
							}
							break;
						case 3:
							{
							this.state = 1382;
							this.match(JavaParser.GT);
							this.state = 1383;
							this.match(JavaParser.GT);
							}
							break;
						}
						this.state = 1386;
						this.expression(13);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1387;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1388;
						localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 387) !== 0))) {
						    localctx._bop = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1389;
						this.expression(12);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1390;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1391;
						localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===94 || _la===97)) {
						    localctx._bop = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1392;
						this.expression(10);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1393;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1394;
						localctx._bop = this.match(JavaParser.BITAND);
						this.state = 1395;
						this.expression(9);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1396;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1397;
						localctx._bop = this.match(JavaParser.CARET);
						this.state = 1398;
						this.expression(8);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1399;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1400;
						localctx._bop = this.match(JavaParser.BITOR);
						this.state = 1401;
						this.expression(7);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1402;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1403;
						localctx._bop = this.match(JavaParser.AND);
						this.state = 1404;
						this.expression(6);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1405;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1406;
						localctx._bop = this.match(JavaParser.OR);
						this.state = 1407;
						this.expression(5);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1408;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1409;
						localctx._bop = this.match(JavaParser.QUESTION);
						this.state = 1410;
						this.expression(0);
						this.state = 1411;
						this.match(JavaParser.COLON);
						this.state = 1412;
						this.expression(3);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1414;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1415;
						localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4286578689) !== 0) || _la===119 || _la===120)) {
						    localctx._bop = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1416;
						this.expression(2);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1417;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1418;
						this.match(JavaParser.LBRACK);
						this.state = 1419;
						this.expression(0);
						this.state = 1420;
						this.match(JavaParser.RBRACK);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1422;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1423;
						localctx._bop = this.match(JavaParser.DOT);
						this.state = 1435;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
						case 1:
							{
							this.state = 1424;
							this.identifier();
							}
							break;
						case 2:
							{
							this.state = 1425;
							this.methodCall();
							}
							break;
						case 3:
							{
							this.state = 1426;
							this.match(JavaParser.THIS);
							}
							break;
						case 4:
							{
							this.state = 1427;
							this.match(JavaParser.NEW);
							this.state = 1429;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===89) {
								{
								this.state = 1428;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1431;
							this.innerCreator();
							}
							break;
						case 5:
							{
							this.state = 1432;
							this.match(JavaParser.SUPER);
							this.state = 1433;
							this.superSuffix();
							}
							break;
						case 6:
							{
							this.state = 1434;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1437;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1438;
						this.match(JavaParser.COLONCOLON);
						this.state = 1440;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===89) {
							{
							this.state = 1439;
							this.typeArguments();
							}
						}

						this.state = 1442;
						this.identifier();
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1443;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1444;
						localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===100 || _la===101)) {
						    localctx._postfix = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_expression);
						this.state = 1445;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1446;
						localctx._bop = this.match(JavaParser.INSTANCEOF);
						this.state = 1449;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
						case 1:
							{
							this.state = 1447;
							this.typeType();
							}
							break;
						case 2:
							{
							this.state = 1448;
							this.pattern();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1455;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, JavaParser.RULE_pattern);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1459;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1456;
					this.variableModifier();
					}
					}
				}
				this.state = 1461;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
			}
			this.state = 1462;
			this.typeType();
			this.state = 1466;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1463;
					this.annotation();
					}
					}
				}
				this.state = 1468;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
			}
			this.state = 1469;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, JavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1471;
			this.lambdaParameters();
			this.state = 1472;
			this.match(JavaParser.ARROW);
			this.state = 1473;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let localctx: LambdaParametersContext = new LambdaParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, JavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1497;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1475;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1476;
				this.match(JavaParser.LPAREN);
				this.state = 1478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la===123 || _la===128) {
					{
					this.state = 1477;
					this.formalParameterList();
					}
				}

				this.state = 1480;
				this.match(JavaParser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1481;
				this.match(JavaParser.LPAREN);
				this.state = 1482;
				this.identifier();
				this.state = 1487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===85) {
					{
					{
					this.state = 1483;
					this.match(JavaParser.COMMA);
					this.state = 1484;
					this.identifier();
					}
					}
					this.state = 1489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1490;
				this.match(JavaParser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1492;
				this.match(JavaParser.LPAREN);
				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18 || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
					{
					this.state = 1493;
					this.lambdaLVTIList();
					}
				}

				this.state = 1496;
				this.match(JavaParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let localctx: LambdaBodyContext = new LambdaBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, JavaParser.RULE_lambdaBody);
		try {
			this.state = 1501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 41:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 89:
			case 90:
			case 91:
			case 100:
			case 101:
			case 102:
			case 103:
			case 123:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1499;
				this.expression(0);
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1500;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, JavaParser.RULE_primary);
		try {
			this.state = 1521;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1503;
				this.match(JavaParser.LPAREN);
				this.state = 1504;
				this.expression(0);
				this.state = 1505;
				this.match(JavaParser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1507;
				this.match(JavaParser.THIS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1508;
				this.match(JavaParser.SUPER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1509;
				this.literal();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1510;
				this.identifier();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1511;
				this.typeTypeOrVoid();
				this.state = 1512;
				this.match(JavaParser.DOT);
				this.state = 1513;
				this.match(JavaParser.CLASS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1515;
				this.nonWildcardTypeArguments();
				this.state = 1519;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 40:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 128:
					{
					this.state = 1516;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case 43:
					{
					this.state = 1517;
					this.match(JavaParser.THIS);
					this.state = 1518;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let localctx: SwitchExpressionContext = new SwitchExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, JavaParser.RULE_switchExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1523;
			this.match(JavaParser.SWITCH);
			this.state = 1524;
			this.parExpression();
			this.state = 1525;
			this.match(JavaParser.LBRACE);
			this.state = 1529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===12) {
				{
				{
				this.state = 1526;
				this.switchLabeledRule();
				}
				}
				this.state = 1531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1532;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchLabeledRule(): SwitchLabeledRuleContext {
		let localctx: SwitchLabeledRuleContext = new SwitchLabeledRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, JavaParser.RULE_switchLabeledRule);
		let _la: number;
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1534;
				this.match(JavaParser.CASE);
				this.state = 1538;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1535;
					this.expressionList();
					}
					break;
				case 2:
					{
					this.state = 1536;
					this.match(JavaParser.NULL_LITERAL);
					}
					break;
				case 3:
					{
					this.state = 1537;
					this.guardedPattern(0);
					}
					break;
				}
				this.state = 1540;
				_la = this._input.LA(1);
				if(!(_la===93 || _la===121)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1541;
				this.switchRuleOutcome();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1542;
				this.match(JavaParser.DEFAULT);
				this.state = 1543;
				_la = this._input.LA(1);
				if(!(_la===93 || _la===121)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1544;
				this.switchRuleOutcome();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public guardedPattern(): GuardedPatternContext;
	public guardedPattern(_p: number): GuardedPatternContext;
	// @RuleVersion(0)
	public guardedPattern(_p?: number): GuardedPatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: GuardedPatternContext = new GuardedPatternContext(this, this._ctx, _parentState);
		let _prevctx: GuardedPatternContext = localctx;
		let _startState: number = 214;
		this.enterRecursionRule(localctx, 214, JavaParser.RULE_guardedPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1573;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				{
				this.state = 1548;
				this.match(JavaParser.LPAREN);
				this.state = 1549;
				this.guardedPattern(0);
				this.state = 1550;
				this.match(JavaParser.RPAREN);
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 18:
			case 20:
			case 27:
			case 29:
			case 37:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 123:
			case 128:
				{
				this.state = 1555;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1552;
						this.variableModifier();
						}
						}
					}
					this.state = 1557;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
				}
				this.state = 1558;
				this.typeType();
				this.state = 1562;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1559;
						this.annotation();
						}
						}
					}
					this.state = 1564;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
				}
				this.state = 1565;
				this.identifier();
				this.state = 1570;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1566;
						this.match(JavaParser.AND);
						this.state = 1567;
						this.expression(0);
						}
						}
					}
					this.state = 1572;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1580;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new GuardedPatternContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, JavaParser.RULE_guardedPattern);
					this.state = 1575;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1576;
					this.match(JavaParser.AND);
					this.state = 1577;
					this.expression(0);
					}
					}
				}
				this.state = 1582;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		let localctx: SwitchRuleOutcomeContext = new SwitchRuleOutcomeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, JavaParser.RULE_switchRuleOutcome);
		let _la: number;
		try {
			this.state = 1590;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1583;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 276824079) !== 0)) {
					{
					{
					this.state = 1584;
					this.blockStatement();
					}
					}
					this.state = 1589;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let localctx: ClassTypeContext = new ClassTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, JavaParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				this.state = 1592;
				this.classOrInterfaceType();
				this.state = 1593;
				this.match(JavaParser.DOT);
				}
				break;
			}
			this.state = 1600;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1597;
					this.annotation();
					}
					}
				}
				this.state = 1602;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
			}
			this.state = 1603;
			this.identifier();
			this.state = 1605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 1604;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let localctx: CreatorContext = new CreatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, JavaParser.RULE_creator);
		let _la: number;
		try {
			this.state = 1616;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===89) {
					{
					this.state = 1607;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 1610;
				this.createdName();
				this.state = 1611;
				this.classCreatorRest();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1613;
				this.createdName();
				this.state = 1614;
				this.arrayCreatorRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let localctx: CreatedNameContext = new CreatedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, JavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1618;
				this.identifier();
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===89) {
					{
					this.state = 1619;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 1622;
					this.match(JavaParser.DOT);
					this.state = 1623;
					this.identifier();
					this.state = 1625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===89) {
						{
						this.state = 1624;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1632;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let localctx: InnerCreatorContext = new InnerCreatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1635;
			this.identifier();
			this.state = 1637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 1636;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1639;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1663;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1641;
					this.match(JavaParser.LBRACK);
					this.state = 1642;
					this.match(JavaParser.RBRACK);
					}
					}
					this.state = 1645;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===82);
				this.state = 1647;
				this.arrayInitializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1652;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1648;
						this.match(JavaParser.LBRACK);
						this.state = 1649;
						this.expression(0);
						this.state = 1650;
						this.match(JavaParser.RBRACK);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1654;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1660;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1656;
						this.match(JavaParser.LBRACK);
						this.state = 1657;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1662;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1665;
			this.arguments();
			this.state = 1667;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1666;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1669;
			this.nonWildcardTypeArguments();
			this.state = 1670;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, JavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1675;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1672;
				this.match(JavaParser.LT);
				this.state = 1673;
				this.match(JavaParser.GT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1674;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1677;
				this.match(JavaParser.LT);
				this.state = 1678;
				this.match(JavaParser.GT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1679;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1682;
			this.match(JavaParser.LT);
			this.state = 1683;
			this.typeList();
			this.state = 1684;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1686;
			this.typeType();
			this.state = 1691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 1687;
				this.match(JavaParser.COMMA);
				this.state = 1688;
				this.typeType();
				}
				}
				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let localctx: TypeTypeContext = new TypeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, JavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1697;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1694;
					this.annotation();
					}
					}
				}
				this.state = 1699;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			}
			this.state = 1702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 128:
				{
				this.state = 1700;
				this.classOrInterfaceType();
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
				{
				this.state = 1701;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1714;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la===123 || _la===128) {
						{
						{
						this.state = 1704;
						this.annotation();
						}
						}
						this.state = 1709;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1710;
					this.match(JavaParser.LBRACK);
					this.state = 1711;
					this.match(JavaParser.RBRACK);
					}
					}
				}
				this.state = 1716;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1717;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1719;
			this.match(JavaParser.LT);
			this.state = 1720;
			this.typeArgument();
			this.state = 1725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 1721;
				this.match(JavaParser.COMMA);
				this.state = 1722;
				this.typeArgument();
				}
				}
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1728;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let localctx: SuperSuffixContext = new SuperSuffixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, JavaParser.RULE_superSuffix);
		let _la: number;
		try {
			this.state = 1739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1730;
				this.arguments();
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1731;
				this.match(JavaParser.DOT);
				this.state = 1733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===89) {
					{
					this.state = 1732;
					this.typeArguments();
					}
				}

				this.state = 1735;
				this.identifier();
				this.state = 1737;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
				case 1:
					{
					this.state = 1736;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, JavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1746;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1741;
				this.match(JavaParser.SUPER);
				this.state = 1742;
				this.superSuffix();
				}
				break;
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 128:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1743;
				this.identifier();
				this.state = 1744;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1748;
			this.match(JavaParser.LPAREN);
			this.state = 1750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 138412039) !== 0)) {
				{
				this.state = 1749;
				this.expressionList();
				}
			}

			this.state = 1752;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 99:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		case 107:
			return this.guardedPattern_sempred(localctx as GuardedPatternContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		case 10:
			return this.precpred(this._ctx, 3);
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 25);
		case 13:
			return this.precpred(this._ctx, 24);
		case 14:
			return this.precpred(this._ctx, 22);
		case 15:
			return this.precpred(this._ctx, 18);
		case 16:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}
	private guardedPattern_sempred(localctx: GuardedPatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,128,1755,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,1,0,3,0,254,8,0,1,
	0,1,0,5,0,258,8,0,10,0,12,0,261,9,0,1,0,1,0,5,0,265,8,0,10,0,12,0,268,9,
	0,1,0,1,0,1,0,3,0,273,8,0,1,1,5,1,276,8,1,10,1,12,1,279,9,1,1,1,1,1,1,1,
	1,1,1,2,1,2,3,2,287,8,2,1,2,1,2,1,2,3,2,292,8,2,1,2,1,2,1,3,5,3,297,8,3,
	10,3,12,3,300,9,3,1,3,1,3,1,3,1,3,1,3,3,3,307,8,3,1,4,1,4,1,4,1,4,1,4,3,
	4,314,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,326,8,5,1,6,1,6,3,
	6,330,8,6,1,7,1,7,1,7,3,7,335,8,7,1,7,1,7,3,7,339,8,7,1,7,1,7,3,7,343,8,
	7,1,7,1,7,3,7,347,8,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,355,8,8,10,8,12,8,358,
	9,8,1,8,1,8,1,9,5,9,363,8,9,10,9,12,9,366,9,9,1,9,1,9,1,9,5,9,371,8,9,10,
	9,12,9,374,9,9,1,9,3,9,377,8,9,1,10,1,10,1,10,5,10,382,8,10,10,10,12,10,
	385,9,10,1,11,1,11,1,11,1,11,3,11,391,8,11,1,11,1,11,3,11,395,8,11,1,11,
	3,11,398,8,11,1,11,3,11,401,8,11,1,11,1,11,1,12,1,12,1,12,5,12,408,8,12,
	10,12,12,12,411,9,12,1,13,5,13,414,8,13,10,13,12,13,417,9,13,1,13,1,13,
	3,13,421,8,13,1,13,3,13,424,8,13,1,14,1,14,5,14,428,8,14,10,14,12,14,431,
	9,14,1,15,1,15,1,15,3,15,436,8,15,1,15,1,15,3,15,440,8,15,1,15,1,15,3,15,
	444,8,15,1,15,1,15,1,16,1,16,5,16,450,8,16,10,16,12,16,453,9,16,1,16,1,
	16,1,17,1,17,5,17,459,8,17,10,17,12,17,462,9,17,1,17,1,17,1,18,1,18,3,18,
	468,8,18,1,18,1,18,5,18,472,8,18,10,18,12,18,475,9,18,1,18,3,18,478,8,18,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,490,8,19,1,20,1,
	20,1,20,1,20,1,20,5,20,497,8,20,10,20,12,20,500,9,20,1,20,1,20,3,20,504,
	8,20,1,20,1,20,1,21,1,21,3,21,510,8,21,1,22,1,22,3,22,514,8,22,1,23,1,23,
	1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,3,25,526,8,25,1,25,1,25,1,26,5,
	26,531,8,26,10,26,12,26,534,9,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,
	5,28,544,8,28,10,28,12,28,547,9,28,1,28,1,28,3,28,551,8,28,1,29,1,29,1,
	29,1,29,1,29,1,29,1,29,1,29,3,29,561,8,29,1,30,1,30,1,30,1,30,5,30,567,
	8,30,10,30,12,30,570,9,30,1,30,1,30,1,31,1,31,1,31,5,31,577,8,31,10,31,
	12,31,580,9,31,1,31,1,31,1,31,1,32,5,32,586,8,32,10,32,12,32,589,9,32,1,
	32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,599,8,33,1,34,5,34,602,8,34,
	10,34,12,34,605,9,34,1,34,1,34,1,34,1,35,5,35,611,8,35,10,35,12,35,614,
	9,35,1,35,1,35,1,35,1,35,1,35,5,35,621,8,35,10,35,12,35,624,9,35,1,35,1,
	35,3,35,628,8,35,1,35,1,35,1,36,1,36,1,36,5,36,635,8,36,10,36,12,36,638,
	9,36,1,37,1,37,1,37,3,37,643,8,37,1,38,1,38,1,38,5,38,648,8,38,10,38,12,
	38,651,9,38,1,39,1,39,3,39,655,8,39,1,40,1,40,1,40,1,40,5,40,661,8,40,10,
	40,12,40,664,9,40,1,40,3,40,667,8,40,3,40,669,8,40,1,40,1,40,1,41,1,41,
	3,41,675,8,41,1,41,1,41,5,41,679,8,41,10,41,12,41,682,9,41,1,41,1,41,3,
	41,686,8,41,1,42,1,42,5,42,690,8,42,10,42,12,42,693,9,42,1,42,1,42,1,42,
	3,42,698,8,42,3,42,700,8,42,1,43,1,43,1,43,5,43,705,8,43,10,43,12,43,708,
	9,43,1,44,1,44,3,44,712,8,44,1,44,1,44,1,44,3,44,717,8,44,1,44,3,44,720,
	8,44,3,44,722,8,44,1,44,1,44,1,45,1,45,1,45,1,45,5,45,730,8,45,10,45,12,
	45,733,9,45,1,45,1,45,1,46,1,46,1,46,5,46,740,8,46,10,46,12,46,743,9,46,
	1,46,1,46,3,46,747,8,46,1,46,3,46,750,8,46,1,47,5,47,753,8,47,10,47,12,
	47,756,9,47,1,47,1,47,1,47,1,48,5,48,762,8,48,10,48,12,48,765,9,48,1,48,
	1,48,5,48,769,8,48,10,48,12,48,772,9,48,1,48,1,48,1,48,1,49,1,49,1,49,5,
	49,780,8,49,10,49,12,49,783,9,49,1,50,5,50,786,8,50,10,50,12,50,789,9,50,
	1,50,1,50,1,50,1,51,1,51,1,51,5,51,797,8,51,10,51,12,51,800,9,51,1,52,1,
	52,1,52,1,52,1,52,1,52,1,52,3,52,809,8,52,1,53,1,53,1,54,1,54,1,55,1,55,
	1,55,5,55,818,8,55,10,55,12,55,821,9,55,1,55,1,55,1,55,1,56,1,56,1,56,3,
	56,829,8,56,1,56,1,56,1,56,3,56,834,8,56,1,56,3,56,837,8,56,1,57,1,57,1,
	57,5,57,842,8,57,10,57,12,57,845,9,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,
	3,59,854,8,59,1,60,1,60,1,60,1,60,5,60,860,8,60,10,60,12,60,863,9,60,3,
	60,865,8,60,1,60,3,60,868,8,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,
	1,62,5,62,879,8,62,10,62,12,62,882,9,62,1,62,1,62,1,63,5,63,887,8,63,10,
	63,12,63,890,9,63,1,63,1,63,3,63,894,8,63,1,64,1,64,1,64,1,64,1,64,1,64,
	3,64,902,8,64,1,64,1,64,3,64,906,8,64,1,64,1,64,3,64,910,8,64,1,64,1,64,
	3,64,914,8,64,1,64,1,64,3,64,918,8,64,3,64,920,8,64,1,65,1,65,3,65,924,
	8,65,1,66,1,66,1,66,1,66,3,66,930,8,66,1,67,1,67,1,68,1,68,1,68,1,69,3,
	69,938,8,69,1,69,1,69,1,69,1,69,1,70,1,70,5,70,946,8,70,10,70,12,70,949,
	9,70,1,70,1,70,1,71,1,71,5,71,955,8,71,10,71,12,71,958,9,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,3,71,967,8,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,
	975,8,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,
	71,989,8,71,1,72,1,72,1,73,1,73,1,73,3,73,996,8,73,1,73,1,73,1,73,3,73,
	1001,8,73,1,73,1,73,1,74,1,74,3,74,1007,8,74,1,74,1,74,1,75,1,75,1,75,5,
	75,1014,8,75,10,75,12,75,1017,9,75,1,76,1,76,1,76,1,77,1,77,1,77,5,77,1025,
	8,77,10,77,12,77,1028,9,77,1,77,1,77,1,78,1,78,5,78,1034,8,78,10,78,12,
	78,1037,9,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,3,79,1046,8,79,1,80,5,80,
	1049,8,80,10,80,12,80,1052,9,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,
	3,80,1062,8,80,1,81,1,81,1,82,1,82,1,83,5,83,1069,8,83,10,83,12,83,1072,
	9,83,1,83,1,83,1,83,3,83,1077,8,83,1,84,1,84,1,84,1,84,1,84,3,84,1084,8,
	84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1093,8,84,1,84,1,84,1,84,1,84,
	1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,
	84,4,84,1114,8,84,11,84,12,84,1115,1,84,3,84,1119,8,84,1,84,3,84,1122,8,
	84,1,84,1,84,1,84,1,84,5,84,1128,8,84,10,84,12,84,1131,9,84,1,84,3,84,1134,
	8,84,1,84,1,84,1,84,1,84,5,84,1140,8,84,10,84,12,84,1143,9,84,1,84,5,84,
	1146,8,84,10,84,12,84,1149,9,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,
	3,84,1159,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1168,8,84,1,84,1,
	84,1,84,3,84,1173,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,
	1,84,3,84,1186,8,84,1,84,1,84,1,84,1,84,3,84,1192,8,84,1,85,1,85,1,85,5,
	85,1197,8,85,10,85,12,85,1200,9,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,
	86,5,86,1210,8,86,10,86,12,86,1213,9,86,1,87,1,87,1,87,1,88,1,88,1,88,3,
	88,1221,8,88,1,88,1,88,1,89,1,89,1,89,5,89,1228,8,89,10,89,12,89,1231,9,
	89,1,90,5,90,1234,8,90,10,90,12,90,1237,9,90,1,90,1,90,1,90,1,90,1,90,3,
	90,1244,8,90,1,90,1,90,1,90,1,90,3,90,1250,8,90,1,91,4,91,1253,8,91,11,
	91,12,91,1254,1,91,4,91,1258,8,91,11,91,12,91,1259,1,92,1,92,1,92,1,92,
	1,92,1,92,3,92,1268,8,92,1,92,1,92,1,92,3,92,1273,8,92,1,93,1,93,3,93,1277,
	8,93,1,93,1,93,3,93,1281,8,93,1,93,1,93,3,93,1285,8,93,3,93,1287,8,93,1,
	94,1,94,3,94,1291,8,94,1,95,5,95,1294,8,95,10,95,12,95,1297,9,95,1,95,1,
	95,3,95,1301,8,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,97,1,97,1,97,
	5,97,1314,8,97,10,97,12,97,1317,9,97,1,98,1,98,1,98,3,98,1322,8,98,1,98,
	1,98,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1332,8,99,1,99,1,99,3,99,1336,8,
	99,1,99,1,99,1,99,3,99,1341,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,5,99,
	1350,8,99,10,99,12,99,1353,9,99,1,99,1,99,1,99,5,99,1358,8,99,10,99,12,
	99,1361,9,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1369,8,99,1,99,1,99,1,99,
	1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1385,8,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,
	1430,8,99,1,99,1,99,1,99,1,99,3,99,1436,8,99,1,99,1,99,1,99,3,99,1441,8,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1450,8,99,5,99,1452,8,99,10,
	99,12,99,1455,9,99,1,100,5,100,1458,8,100,10,100,12,100,1461,9,100,1,100,
	1,100,5,100,1465,8,100,10,100,12,100,1468,9,100,1,100,1,100,1,101,1,101,
	1,101,1,101,1,102,1,102,1,102,3,102,1479,8,102,1,102,1,102,1,102,1,102,
	1,102,5,102,1486,8,102,10,102,12,102,1489,9,102,1,102,1,102,1,102,1,102,
	3,102,1495,8,102,1,102,3,102,1498,8,102,1,103,1,103,3,103,1502,8,103,1,
	104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,
	104,1,104,1,104,1,104,3,104,1520,8,104,3,104,1522,8,104,1,105,1,105,1,105,
	1,105,5,105,1528,8,105,10,105,12,105,1531,9,105,1,105,1,105,1,106,1,106,
	1,106,1,106,3,106,1539,8,106,1,106,1,106,1,106,1,106,1,106,3,106,1546,8,
	106,1,107,1,107,1,107,1,107,1,107,1,107,5,107,1554,8,107,10,107,12,107,
	1557,9,107,1,107,1,107,5,107,1561,8,107,10,107,12,107,1564,9,107,1,107,
	1,107,1,107,5,107,1569,8,107,10,107,12,107,1572,9,107,3,107,1574,8,107,
	1,107,1,107,1,107,5,107,1579,8,107,10,107,12,107,1582,9,107,1,108,1,108,
	5,108,1586,8,108,10,108,12,108,1589,9,108,3,108,1591,8,108,1,109,1,109,
	1,109,3,109,1596,8,109,1,109,5,109,1599,8,109,10,109,12,109,1602,9,109,
	1,109,1,109,3,109,1606,8,109,1,110,3,110,1609,8,110,1,110,1,110,1,110,1,
	110,1,110,1,110,3,110,1617,8,110,1,111,1,111,3,111,1621,8,111,1,111,1,111,
	1,111,3,111,1626,8,111,5,111,1628,8,111,10,111,12,111,1631,9,111,1,111,
	3,111,1634,8,111,1,112,1,112,3,112,1638,8,112,1,112,1,112,1,113,1,113,4,
	113,1644,8,113,11,113,12,113,1645,1,113,1,113,1,113,1,113,1,113,4,113,1653,
	8,113,11,113,12,113,1654,1,113,1,113,5,113,1659,8,113,10,113,12,113,1662,
	9,113,3,113,1664,8,113,1,114,1,114,3,114,1668,8,114,1,115,1,115,1,115,1,
	116,1,116,1,116,3,116,1676,8,116,1,117,1,117,1,117,3,117,1681,8,117,1,118,
	1,118,1,118,1,118,1,119,1,119,1,119,5,119,1690,8,119,10,119,12,119,1693,
	9,119,1,120,5,120,1696,8,120,10,120,12,120,1699,9,120,1,120,1,120,3,120,
	1703,8,120,1,120,5,120,1706,8,120,10,120,12,120,1709,9,120,1,120,1,120,
	5,120,1713,8,120,10,120,12,120,1716,9,120,1,121,1,121,1,122,1,122,1,122,
	1,122,5,122,1724,8,122,10,122,12,122,1727,9,122,1,122,1,122,1,123,1,123,
	1,123,3,123,1734,8,123,1,123,1,123,3,123,1738,8,123,3,123,1740,8,123,1,
	124,1,124,1,124,1,124,1,124,3,124,1747,8,124,1,125,1,125,3,125,1751,8,125,
	1,125,1,125,1,125,0,2,198,214,126,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
	118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
	154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
	190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,
	226,228,230,232,234,236,238,240,242,244,246,248,250,0,15,2,0,17,17,40,40,
	1,0,67,70,1,0,71,72,2,0,38,38,60,60,2,0,51,65,128,128,3,0,51,60,63,65,128,
	128,2,0,90,91,100,103,2,0,104,105,109,109,1,0,102,103,2,0,88,89,95,96,2,
	0,94,94,97,97,2,0,87,87,110,120,1,0,100,101,2,0,93,93,121,121,8,0,3,3,5,
	5,8,8,14,14,20,20,27,27,29,29,37,37,1951,0,272,1,0,0,0,2,277,1,0,0,0,4,
	284,1,0,0,0,6,298,1,0,0,0,8,313,1,0,0,0,10,325,1,0,0,0,12,329,1,0,0,0,14,
	331,1,0,0,0,16,350,1,0,0,0,18,364,1,0,0,0,20,378,1,0,0,0,22,386,1,0,0,0,
	24,404,1,0,0,0,26,415,1,0,0,0,28,425,1,0,0,0,30,432,1,0,0,0,32,447,1,0,
	0,0,34,456,1,0,0,0,36,477,1,0,0,0,38,489,1,0,0,0,40,491,1,0,0,0,42,509,
	1,0,0,0,44,513,1,0,0,0,46,515,1,0,0,0,48,518,1,0,0,0,50,521,1,0,0,0,52,
	532,1,0,0,0,54,538,1,0,0,0,56,550,1,0,0,0,58,560,1,0,0,0,60,562,1,0,0,0,
	62,573,1,0,0,0,64,587,1,0,0,0,66,598,1,0,0,0,68,603,1,0,0,0,70,612,1,0,
	0,0,72,631,1,0,0,0,74,639,1,0,0,0,76,644,1,0,0,0,78,654,1,0,0,0,80,656,
	1,0,0,0,82,680,1,0,0,0,84,699,1,0,0,0,86,701,1,0,0,0,88,709,1,0,0,0,90,
	725,1,0,0,0,92,749,1,0,0,0,94,754,1,0,0,0,96,763,1,0,0,0,98,776,1,0,0,0,
	100,787,1,0,0,0,102,793,1,0,0,0,104,808,1,0,0,0,106,810,1,0,0,0,108,812,
	1,0,0,0,110,819,1,0,0,0,112,828,1,0,0,0,114,838,1,0,0,0,116,846,1,0,0,0,
	118,853,1,0,0,0,120,855,1,0,0,0,122,871,1,0,0,0,124,876,1,0,0,0,126,893,
	1,0,0,0,128,919,1,0,0,0,130,923,1,0,0,0,132,925,1,0,0,0,134,931,1,0,0,0,
	136,933,1,0,0,0,138,937,1,0,0,0,140,943,1,0,0,0,142,988,1,0,0,0,144,990,
	1,0,0,0,146,992,1,0,0,0,148,1004,1,0,0,0,150,1010,1,0,0,0,152,1018,1,0,
	0,0,154,1021,1,0,0,0,156,1031,1,0,0,0,158,1045,1,0,0,0,160,1050,1,0,0,0,
	162,1063,1,0,0,0,164,1065,1,0,0,0,166,1070,1,0,0,0,168,1191,1,0,0,0,170,
	1193,1,0,0,0,172,1206,1,0,0,0,174,1214,1,0,0,0,176,1217,1,0,0,0,178,1224,
	1,0,0,0,180,1249,1,0,0,0,182,1252,1,0,0,0,184,1272,1,0,0,0,186,1286,1,0,
	0,0,188,1290,1,0,0,0,190,1295,1,0,0,0,192,1306,1,0,0,0,194,1310,1,0,0,0,
	196,1321,1,0,0,0,198,1368,1,0,0,0,200,1459,1,0,0,0,202,1471,1,0,0,0,204,
	1497,1,0,0,0,206,1501,1,0,0,0,208,1521,1,0,0,0,210,1523,1,0,0,0,212,1545,
	1,0,0,0,214,1573,1,0,0,0,216,1590,1,0,0,0,218,1595,1,0,0,0,220,1616,1,0,
	0,0,222,1633,1,0,0,0,224,1635,1,0,0,0,226,1663,1,0,0,0,228,1665,1,0,0,0,
	230,1669,1,0,0,0,232,1675,1,0,0,0,234,1680,1,0,0,0,236,1682,1,0,0,0,238,
	1686,1,0,0,0,240,1697,1,0,0,0,242,1717,1,0,0,0,244,1719,1,0,0,0,246,1739,
	1,0,0,0,248,1746,1,0,0,0,250,1748,1,0,0,0,252,254,3,2,1,0,253,252,1,0,0,
	0,253,254,1,0,0,0,254,259,1,0,0,0,255,258,3,4,2,0,256,258,5,84,0,0,257,
	255,1,0,0,0,257,256,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,
	0,0,260,266,1,0,0,0,261,259,1,0,0,0,262,265,3,6,3,0,263,265,5,84,0,0,264,
	262,1,0,0,0,264,263,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,
	0,0,267,273,1,0,0,0,268,266,1,0,0,0,269,270,3,138,69,0,270,271,5,0,0,1,
	271,273,1,0,0,0,272,253,1,0,0,0,272,269,1,0,0,0,273,1,1,0,0,0,274,276,3,
	112,56,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,
	0,278,280,1,0,0,0,279,277,1,0,0,0,280,281,5,32,0,0,281,282,3,102,51,0,282,
	283,5,84,0,0,283,3,1,0,0,0,284,286,5,25,0,0,285,287,5,38,0,0,286,285,1,
	0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,291,3,102,51,0,289,290,5,86,0,
	0,290,292,5,104,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,
	294,5,84,0,0,294,5,1,0,0,0,295,297,3,10,5,0,296,295,1,0,0,0,297,300,1,0,
	0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,306,1,0,0,0,300,298,1,0,0,0,301,
	307,3,14,7,0,302,307,3,22,11,0,303,307,3,30,15,0,304,307,3,122,61,0,305,
	307,3,146,73,0,306,301,1,0,0,0,306,302,1,0,0,0,306,303,1,0,0,0,306,304,
	1,0,0,0,306,305,1,0,0,0,307,7,1,0,0,0,308,314,3,10,5,0,309,314,5,30,0,0,
	310,314,5,42,0,0,311,314,5,46,0,0,312,314,5,49,0,0,313,308,1,0,0,0,313,
	309,1,0,0,0,313,310,1,0,0,0,313,311,1,0,0,0,313,312,1,0,0,0,314,9,1,0,0,
	0,315,326,3,112,56,0,316,326,5,35,0,0,317,326,5,34,0,0,318,326,5,33,0,0,
	319,326,5,38,0,0,320,326,5,1,0,0,321,326,5,18,0,0,322,326,5,39,0,0,323,
	326,5,64,0,0,324,326,5,66,0,0,325,315,1,0,0,0,325,316,1,0,0,0,325,317,1,
	0,0,0,325,318,1,0,0,0,325,319,1,0,0,0,325,320,1,0,0,0,325,321,1,0,0,0,325,
	322,1,0,0,0,325,323,1,0,0,0,325,324,1,0,0,0,326,11,1,0,0,0,327,330,5,18,
	0,0,328,330,3,112,56,0,329,327,1,0,0,0,329,328,1,0,0,0,330,13,1,0,0,0,331,
	332,5,9,0,0,332,334,3,162,81,0,333,335,3,16,8,0,334,333,1,0,0,0,334,335,
	1,0,0,0,335,338,1,0,0,0,336,337,5,17,0,0,337,339,3,240,120,0,338,336,1,
	0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,341,5,24,0,0,341,343,3,238,119,
	0,342,340,1,0,0,0,342,343,1,0,0,0,343,346,1,0,0,0,344,345,5,65,0,0,345,
	347,3,238,119,0,346,344,1,0,0,0,346,347,1,0,0,0,347,348,1,0,0,0,348,349,
	3,32,16,0,349,15,1,0,0,0,350,351,5,89,0,0,351,356,3,18,9,0,352,353,5,85,
	0,0,353,355,3,18,9,0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,
	357,1,0,0,0,357,359,1,0,0,0,358,356,1,0,0,0,359,360,5,88,0,0,360,17,1,0,
	0,0,361,363,3,112,56,0,362,361,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,
	364,365,1,0,0,0,365,367,1,0,0,0,366,364,1,0,0,0,367,376,3,162,81,0,368,
	372,5,17,0,0,369,371,3,112,56,0,370,369,1,0,0,0,371,374,1,0,0,0,372,370,
	1,0,0,0,372,373,1,0,0,0,373,375,1,0,0,0,374,372,1,0,0,0,375,377,3,20,10,
	0,376,368,1,0,0,0,376,377,1,0,0,0,377,19,1,0,0,0,378,383,3,240,120,0,379,
	380,5,106,0,0,380,382,3,240,120,0,381,379,1,0,0,0,382,385,1,0,0,0,383,381,
	1,0,0,0,383,384,1,0,0,0,384,21,1,0,0,0,385,383,1,0,0,0,386,387,5,16,0,0,
	387,390,3,162,81,0,388,389,5,24,0,0,389,391,3,238,119,0,390,388,1,0,0,0,
	390,391,1,0,0,0,391,392,1,0,0,0,392,394,5,80,0,0,393,395,3,24,12,0,394,
	393,1,0,0,0,394,395,1,0,0,0,395,397,1,0,0,0,396,398,5,85,0,0,397,396,1,
	0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,401,3,28,14,0,400,399,1,0,0,0,
	400,401,1,0,0,0,401,402,1,0,0,0,402,403,5,81,0,0,403,23,1,0,0,0,404,409,
	3,26,13,0,405,406,5,85,0,0,406,408,3,26,13,0,407,405,1,0,0,0,408,411,1,
	0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,25,1,0,0,0,411,409,1,0,0,0,412,
	414,3,112,56,0,413,412,1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,415,416,
	1,0,0,0,416,418,1,0,0,0,417,415,1,0,0,0,418,420,3,162,81,0,419,421,3,250,
	125,0,420,419,1,0,0,0,420,421,1,0,0,0,421,423,1,0,0,0,422,424,3,32,16,0,
	423,422,1,0,0,0,423,424,1,0,0,0,424,27,1,0,0,0,425,429,5,84,0,0,426,428,
	3,36,18,0,427,426,1,0,0,0,428,431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,
	0,430,29,1,0,0,0,431,429,1,0,0,0,432,433,5,28,0,0,433,435,3,162,81,0,434,
	436,3,16,8,0,435,434,1,0,0,0,435,436,1,0,0,0,436,439,1,0,0,0,437,438,5,
	17,0,0,438,440,3,238,119,0,439,437,1,0,0,0,439,440,1,0,0,0,440,443,1,0,
	0,0,441,442,5,65,0,0,442,444,3,238,119,0,443,441,1,0,0,0,443,444,1,0,0,
	0,444,445,1,0,0,0,445,446,3,34,17,0,446,31,1,0,0,0,447,451,5,80,0,0,448,
	450,3,36,18,0,449,448,1,0,0,0,450,453,1,0,0,0,451,449,1,0,0,0,451,452,1,
	0,0,0,452,454,1,0,0,0,453,451,1,0,0,0,454,455,5,81,0,0,455,33,1,0,0,0,456,
	460,5,80,0,0,457,459,3,56,28,0,458,457,1,0,0,0,459,462,1,0,0,0,460,458,
	1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,462,460,1,0,0,0,463,464,5,81,0,
	0,464,35,1,0,0,0,465,478,5,84,0,0,466,468,5,38,0,0,467,466,1,0,0,0,467,
	468,1,0,0,0,468,469,1,0,0,0,469,478,3,156,78,0,470,472,3,8,4,0,471,470,
	1,0,0,0,472,475,1,0,0,0,473,471,1,0,0,0,473,474,1,0,0,0,474,476,1,0,0,0,
	475,473,1,0,0,0,476,478,3,38,19,0,477,465,1,0,0,0,477,467,1,0,0,0,477,473,
	1,0,0,0,478,37,1,0,0,0,479,490,3,146,73,0,480,490,3,40,20,0,481,490,3,46,
	23,0,482,490,3,54,27,0,483,490,3,50,25,0,484,490,3,48,24,0,485,490,3,30,
	15,0,486,490,3,122,61,0,487,490,3,14,7,0,488,490,3,22,11,0,489,479,1,0,
	0,0,489,480,1,0,0,0,489,481,1,0,0,0,489,482,1,0,0,0,489,483,1,0,0,0,489,
	484,1,0,0,0,489,485,1,0,0,0,489,486,1,0,0,0,489,487,1,0,0,0,489,488,1,0,
	0,0,490,39,1,0,0,0,491,492,3,44,22,0,492,493,3,162,81,0,493,498,3,88,44,
	0,494,495,5,82,0,0,495,497,5,83,0,0,496,494,1,0,0,0,497,500,1,0,0,0,498,
	496,1,0,0,0,498,499,1,0,0,0,499,503,1,0,0,0,500,498,1,0,0,0,501,502,5,45,
	0,0,502,504,3,86,43,0,503,501,1,0,0,0,503,504,1,0,0,0,504,505,1,0,0,0,505,
	506,3,42,21,0,506,41,1,0,0,0,507,510,3,156,78,0,508,510,5,84,0,0,509,507,
	1,0,0,0,509,508,1,0,0,0,510,43,1,0,0,0,511,514,3,240,120,0,512,514,5,48,
	0,0,513,511,1,0,0,0,513,512,1,0,0,0,514,45,1,0,0,0,515,516,3,16,8,0,516,
	517,3,40,20,0,517,47,1,0,0,0,518,519,3,16,8,0,519,520,3,50,25,0,520,49,
	1,0,0,0,521,522,3,162,81,0,522,525,3,88,44,0,523,524,5,45,0,0,524,526,3,
	86,43,0,525,523,1,0,0,0,525,526,1,0,0,0,526,527,1,0,0,0,527,528,3,156,78,
	0,528,51,1,0,0,0,529,531,3,8,4,0,530,529,1,0,0,0,531,534,1,0,0,0,532,530,
	1,0,0,0,532,533,1,0,0,0,533,535,1,0,0,0,534,532,1,0,0,0,535,536,3,162,81,
	0,536,537,3,156,78,0,537,53,1,0,0,0,538,539,3,240,120,0,539,540,3,72,36,
	0,540,541,5,84,0,0,541,55,1,0,0,0,542,544,3,8,4,0,543,542,1,0,0,0,544,547,
	1,0,0,0,545,543,1,0,0,0,545,546,1,0,0,0,546,548,1,0,0,0,547,545,1,0,0,0,
	548,551,3,58,29,0,549,551,5,84,0,0,550,545,1,0,0,0,550,549,1,0,0,0,551,
	57,1,0,0,0,552,561,3,146,73,0,553,561,3,60,30,0,554,561,3,64,32,0,555,561,
	3,68,34,0,556,561,3,30,15,0,557,561,3,122,61,0,558,561,3,14,7,0,559,561,
	3,22,11,0,560,552,1,0,0,0,560,553,1,0,0,0,560,554,1,0,0,0,560,555,1,0,0,
	0,560,556,1,0,0,0,560,557,1,0,0,0,560,558,1,0,0,0,560,559,1,0,0,0,561,59,
	1,0,0,0,562,563,3,240,120,0,563,568,3,62,31,0,564,565,5,85,0,0,565,567,
	3,62,31,0,566,564,1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,
	0,569,571,1,0,0,0,570,568,1,0,0,0,571,572,5,84,0,0,572,61,1,0,0,0,573,578,
	3,162,81,0,574,575,5,82,0,0,575,577,5,83,0,0,576,574,1,0,0,0,577,580,1,
	0,0,0,578,576,1,0,0,0,578,579,1,0,0,0,579,581,1,0,0,0,580,578,1,0,0,0,581,
	582,5,87,0,0,582,583,3,78,39,0,583,63,1,0,0,0,584,586,3,66,33,0,585,584,
	1,0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,588,1,0,0,0,588,590,1,0,0,0,
	589,587,1,0,0,0,590,591,3,70,35,0,591,65,1,0,0,0,592,599,3,112,56,0,593,
	599,5,35,0,0,594,599,5,1,0,0,595,599,5,12,0,0,596,599,5,38,0,0,597,599,
	5,39,0,0,598,592,1,0,0,0,598,593,1,0,0,0,598,594,1,0,0,0,598,595,1,0,0,
	0,598,596,1,0,0,0,598,597,1,0,0,0,599,67,1,0,0,0,600,602,3,66,33,0,601,
	600,1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,606,1,0,
	0,0,605,603,1,0,0,0,606,607,3,16,8,0,607,608,3,70,35,0,608,69,1,0,0,0,609,
	611,3,112,56,0,610,609,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,
	1,0,0,0,613,615,1,0,0,0,614,612,1,0,0,0,615,616,3,44,22,0,616,617,3,162,
	81,0,617,622,3,88,44,0,618,619,5,82,0,0,619,621,5,83,0,0,620,618,1,0,0,
	0,621,624,1,0,0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,627,1,0,0,0,624,622,
	1,0,0,0,625,626,5,45,0,0,626,628,3,86,43,0,627,625,1,0,0,0,627,628,1,0,
	0,0,628,629,1,0,0,0,629,630,3,42,21,0,630,71,1,0,0,0,631,636,3,74,37,0,
	632,633,5,85,0,0,633,635,3,74,37,0,634,632,1,0,0,0,635,638,1,0,0,0,636,
	634,1,0,0,0,636,637,1,0,0,0,637,73,1,0,0,0,638,636,1,0,0,0,639,642,3,76,
	38,0,640,641,5,87,0,0,641,643,3,78,39,0,642,640,1,0,0,0,642,643,1,0,0,0,
	643,75,1,0,0,0,644,649,3,162,81,0,645,646,5,82,0,0,646,648,5,83,0,0,647,
	645,1,0,0,0,648,651,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,77,1,0,
	0,0,651,649,1,0,0,0,652,655,3,80,40,0,653,655,3,198,99,0,654,652,1,0,0,
	0,654,653,1,0,0,0,655,79,1,0,0,0,656,668,5,80,0,0,657,662,3,78,39,0,658,
	659,5,85,0,0,659,661,3,78,39,0,660,658,1,0,0,0,661,664,1,0,0,0,662,660,
	1,0,0,0,662,663,1,0,0,0,663,666,1,0,0,0,664,662,1,0,0,0,665,667,5,85,0,
	0,666,665,1,0,0,0,666,667,1,0,0,0,667,669,1,0,0,0,668,657,1,0,0,0,668,669,
	1,0,0,0,669,670,1,0,0,0,670,671,5,81,0,0,671,81,1,0,0,0,672,674,3,162,81,
	0,673,675,3,244,122,0,674,673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,
	677,5,86,0,0,677,679,1,0,0,0,678,672,1,0,0,0,679,682,1,0,0,0,680,678,1,
	0,0,0,680,681,1,0,0,0,681,683,1,0,0,0,682,680,1,0,0,0,683,685,3,164,82,
	0,684,686,3,244,122,0,685,684,1,0,0,0,685,686,1,0,0,0,686,83,1,0,0,0,687,
	700,3,240,120,0,688,690,3,112,56,0,689,688,1,0,0,0,690,693,1,0,0,0,691,
	689,1,0,0,0,691,692,1,0,0,0,692,694,1,0,0,0,693,691,1,0,0,0,694,697,5,92,
	0,0,695,696,7,0,0,0,696,698,3,240,120,0,697,695,1,0,0,0,697,698,1,0,0,0,
	698,700,1,0,0,0,699,687,1,0,0,0,699,691,1,0,0,0,700,85,1,0,0,0,701,706,
	3,102,51,0,702,703,5,85,0,0,703,705,3,102,51,0,704,702,1,0,0,0,705,708,
	1,0,0,0,706,704,1,0,0,0,706,707,1,0,0,0,707,87,1,0,0,0,708,706,1,0,0,0,
	709,721,5,78,0,0,710,712,3,90,45,0,711,710,1,0,0,0,711,712,1,0,0,0,712,
	722,1,0,0,0,713,716,3,90,45,0,714,715,5,85,0,0,715,717,3,92,46,0,716,714,
	1,0,0,0,716,717,1,0,0,0,717,722,1,0,0,0,718,720,3,92,46,0,719,718,1,0,0,
	0,719,720,1,0,0,0,720,722,1,0,0,0,721,711,1,0,0,0,721,713,1,0,0,0,721,719,
	1,0,0,0,722,723,1,0,0,0,723,724,5,79,0,0,724,89,1,0,0,0,725,731,3,240,120,
	0,726,727,3,162,81,0,727,728,5,86,0,0,728,730,1,0,0,0,729,726,1,0,0,0,730,
	733,1,0,0,0,731,729,1,0,0,0,731,732,1,0,0,0,732,734,1,0,0,0,733,731,1,0,
	0,0,734,735,5,43,0,0,735,91,1,0,0,0,736,741,3,94,47,0,737,738,5,85,0,0,
	738,740,3,94,47,0,739,737,1,0,0,0,740,743,1,0,0,0,741,739,1,0,0,0,741,742,
	1,0,0,0,742,746,1,0,0,0,743,741,1,0,0,0,744,745,5,85,0,0,745,747,3,96,48,
	0,746,744,1,0,0,0,746,747,1,0,0,0,747,750,1,0,0,0,748,750,3,96,48,0,749,
	736,1,0,0,0,749,748,1,0,0,0,750,93,1,0,0,0,751,753,3,12,6,0,752,751,1,0,
	0,0,753,756,1,0,0,0,754,752,1,0,0,0,754,755,1,0,0,0,755,757,1,0,0,0,756,
	754,1,0,0,0,757,758,3,240,120,0,758,759,3,76,38,0,759,95,1,0,0,0,760,762,
	3,12,6,0,761,760,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,
	0,764,766,1,0,0,0,765,763,1,0,0,0,766,770,3,240,120,0,767,769,3,112,56,
	0,768,767,1,0,0,0,769,772,1,0,0,0,770,768,1,0,0,0,770,771,1,0,0,0,771,773,
	1,0,0,0,772,770,1,0,0,0,773,774,5,124,0,0,774,775,3,76,38,0,775,97,1,0,
	0,0,776,781,3,100,50,0,777,778,5,85,0,0,778,780,3,100,50,0,779,777,1,0,
	0,0,780,783,1,0,0,0,781,779,1,0,0,0,781,782,1,0,0,0,782,99,1,0,0,0,783,
	781,1,0,0,0,784,786,3,12,6,0,785,784,1,0,0,0,786,789,1,0,0,0,787,785,1,
	0,0,0,787,788,1,0,0,0,788,790,1,0,0,0,789,787,1,0,0,0,790,791,5,61,0,0,
	791,792,3,162,81,0,792,101,1,0,0,0,793,798,3,162,81,0,794,795,5,86,0,0,
	795,797,3,162,81,0,796,794,1,0,0,0,797,800,1,0,0,0,798,796,1,0,0,0,798,
	799,1,0,0,0,799,103,1,0,0,0,800,798,1,0,0,0,801,809,3,106,53,0,802,809,
	3,108,54,0,803,809,5,74,0,0,804,809,5,75,0,0,805,809,5,73,0,0,806,809,5,
	77,0,0,807,809,5,76,0,0,808,801,1,0,0,0,808,802,1,0,0,0,808,803,1,0,0,0,
	808,804,1,0,0,0,808,805,1,0,0,0,808,806,1,0,0,0,808,807,1,0,0,0,809,105,
	1,0,0,0,810,811,7,1,0,0,811,107,1,0,0,0,812,813,7,2,0,0,813,109,1,0,0,0,
	814,815,3,162,81,0,815,816,5,86,0,0,816,818,1,0,0,0,817,814,1,0,0,0,818,
	821,1,0,0,0,819,817,1,0,0,0,819,820,1,0,0,0,820,822,1,0,0,0,821,819,1,0,
	0,0,822,823,5,123,0,0,823,824,3,162,81,0,824,111,1,0,0,0,825,826,5,123,
	0,0,826,829,3,102,51,0,827,829,3,110,55,0,828,825,1,0,0,0,828,827,1,0,0,
	0,829,836,1,0,0,0,830,833,5,78,0,0,831,834,3,114,57,0,832,834,3,118,59,
	0,833,831,1,0,0,0,833,832,1,0,0,0,833,834,1,0,0,0,834,835,1,0,0,0,835,837,
	5,79,0,0,836,830,1,0,0,0,836,837,1,0,0,0,837,113,1,0,0,0,838,843,3,116,
	58,0,839,840,5,85,0,0,840,842,3,116,58,0,841,839,1,0,0,0,842,845,1,0,0,
	0,843,841,1,0,0,0,843,844,1,0,0,0,844,115,1,0,0,0,845,843,1,0,0,0,846,847,
	3,162,81,0,847,848,5,87,0,0,848,849,3,118,59,0,849,117,1,0,0,0,850,854,
	3,198,99,0,851,854,3,112,56,0,852,854,3,120,60,0,853,850,1,0,0,0,853,851,
	1,0,0,0,853,852,1,0,0,0,854,119,1,0,0,0,855,864,5,80,0,0,856,861,3,118,
	59,0,857,858,5,85,0,0,858,860,3,118,59,0,859,857,1,0,0,0,860,863,1,0,0,
	0,861,859,1,0,0,0,861,862,1,0,0,0,862,865,1,0,0,0,863,861,1,0,0,0,864,856,
	1,0,0,0,864,865,1,0,0,0,865,867,1,0,0,0,866,868,5,85,0,0,867,866,1,0,0,
	0,867,868,1,0,0,0,868,869,1,0,0,0,869,870,5,81,0,0,870,121,1,0,0,0,871,
	872,5,123,0,0,872,873,5,28,0,0,873,874,3,162,81,0,874,875,3,124,62,0,875,
	123,1,0,0,0,876,880,5,80,0,0,877,879,3,126,63,0,878,877,1,0,0,0,879,882,
	1,0,0,0,880,878,1,0,0,0,880,881,1,0,0,0,881,883,1,0,0,0,882,880,1,0,0,0,
	883,884,5,81,0,0,884,125,1,0,0,0,885,887,3,8,4,0,886,885,1,0,0,0,887,890,
	1,0,0,0,888,886,1,0,0,0,888,889,1,0,0,0,889,891,1,0,0,0,890,888,1,0,0,0,
	891,894,3,128,64,0,892,894,5,84,0,0,893,888,1,0,0,0,893,892,1,0,0,0,894,
	127,1,0,0,0,895,896,3,240,120,0,896,897,3,130,65,0,897,898,5,84,0,0,898,
	920,1,0,0,0,899,901,3,14,7,0,900,902,5,84,0,0,901,900,1,0,0,0,901,902,1,
	0,0,0,902,920,1,0,0,0,903,905,3,30,15,0,904,906,5,84,0,0,905,904,1,0,0,
	0,905,906,1,0,0,0,906,920,1,0,0,0,907,909,3,22,11,0,908,910,5,84,0,0,909,
	908,1,0,0,0,909,910,1,0,0,0,910,920,1,0,0,0,911,913,3,122,61,0,912,914,
	5,84,0,0,913,912,1,0,0,0,913,914,1,0,0,0,914,920,1,0,0,0,915,917,3,146,
	73,0,916,918,5,84,0,0,917,916,1,0,0,0,917,918,1,0,0,0,918,920,1,0,0,0,919,
	895,1,0,0,0,919,899,1,0,0,0,919,903,1,0,0,0,919,907,1,0,0,0,919,911,1,0,
	0,0,919,915,1,0,0,0,920,129,1,0,0,0,921,924,3,132,66,0,922,924,3,134,67,
	0,923,921,1,0,0,0,923,922,1,0,0,0,924,131,1,0,0,0,925,926,3,162,81,0,926,
	927,5,78,0,0,927,929,5,79,0,0,928,930,3,136,68,0,929,928,1,0,0,0,929,930,
	1,0,0,0,930,133,1,0,0,0,931,932,3,72,36,0,932,135,1,0,0,0,933,934,5,12,
	0,0,934,935,3,118,59,0,935,137,1,0,0,0,936,938,5,52,0,0,937,936,1,0,0,0,
	937,938,1,0,0,0,938,939,1,0,0,0,939,940,5,51,0,0,940,941,3,102,51,0,941,
	942,3,140,70,0,942,139,1,0,0,0,943,947,5,80,0,0,944,946,3,142,71,0,945,
	944,1,0,0,0,946,949,1,0,0,0,947,945,1,0,0,0,947,948,1,0,0,0,948,950,1,0,
	0,0,949,947,1,0,0,0,950,951,5,81,0,0,951,141,1,0,0,0,952,956,5,53,0,0,953,
	955,3,144,72,0,954,953,1,0,0,0,955,958,1,0,0,0,956,954,1,0,0,0,956,957,
	1,0,0,0,957,959,1,0,0,0,958,956,1,0,0,0,959,960,3,102,51,0,960,961,5,84,
	0,0,961,989,1,0,0,0,962,963,5,54,0,0,963,966,3,102,51,0,964,965,5,56,0,
	0,965,967,3,102,51,0,966,964,1,0,0,0,966,967,1,0,0,0,967,968,1,0,0,0,968,
	969,5,84,0,0,969,989,1,0,0,0,970,971,5,55,0,0,971,974,3,102,51,0,972,973,
	5,56,0,0,973,975,3,102,51,0,974,972,1,0,0,0,974,975,1,0,0,0,975,976,1,0,
	0,0,976,977,5,84,0,0,977,989,1,0,0,0,978,979,5,57,0,0,979,980,3,102,51,
	0,980,981,5,84,0,0,981,989,1,0,0,0,982,983,5,58,0,0,983,984,3,102,51,0,
	984,985,5,59,0,0,985,986,3,102,51,0,986,987,5,84,0,0,987,989,1,0,0,0,988,
	952,1,0,0,0,988,962,1,0,0,0,988,970,1,0,0,0,988,978,1,0,0,0,988,982,1,0,
	0,0,989,143,1,0,0,0,990,991,7,3,0,0,991,145,1,0,0,0,992,993,5,63,0,0,993,
	995,3,162,81,0,994,996,3,16,8,0,995,994,1,0,0,0,995,996,1,0,0,0,996,997,
	1,0,0,0,997,1000,3,148,74,0,998,999,5,24,0,0,999,1001,3,238,119,0,1000,
	998,1,0,0,0,1000,1001,1,0,0,0,1001,1002,1,0,0,0,1002,1003,3,154,77,0,1003,
	147,1,0,0,0,1004,1006,5,78,0,0,1005,1007,3,150,75,0,1006,1005,1,0,0,0,1006,
	1007,1,0,0,0,1007,1008,1,0,0,0,1008,1009,5,79,0,0,1009,149,1,0,0,0,1010,
	1015,3,152,76,0,1011,1012,5,85,0,0,1012,1014,3,152,76,0,1013,1011,1,0,0,
	0,1014,1017,1,0,0,0,1015,1013,1,0,0,0,1015,1016,1,0,0,0,1016,151,1,0,0,
	0,1017,1015,1,0,0,0,1018,1019,3,240,120,0,1019,1020,3,162,81,0,1020,153,
	1,0,0,0,1021,1026,5,80,0,0,1022,1025,3,36,18,0,1023,1025,3,52,26,0,1024,
	1022,1,0,0,0,1024,1023,1,0,0,0,1025,1028,1,0,0,0,1026,1024,1,0,0,0,1026,
	1027,1,0,0,0,1027,1029,1,0,0,0,1028,1026,1,0,0,0,1029,1030,5,81,0,0,1030,
	155,1,0,0,0,1031,1035,5,80,0,0,1032,1034,3,158,79,0,1033,1032,1,0,0,0,1034,
	1037,1,0,0,0,1035,1033,1,0,0,0,1035,1036,1,0,0,0,1036,1038,1,0,0,0,1037,
	1035,1,0,0,0,1038,1039,5,81,0,0,1039,157,1,0,0,0,1040,1041,3,160,80,0,1041,
	1042,5,84,0,0,1042,1046,1,0,0,0,1043,1046,3,166,83,0,1044,1046,3,168,84,
	0,1045,1040,1,0,0,0,1045,1043,1,0,0,0,1045,1044,1,0,0,0,1046,159,1,0,0,
	0,1047,1049,3,12,6,0,1048,1047,1,0,0,0,1049,1052,1,0,0,0,1050,1048,1,0,
	0,0,1050,1051,1,0,0,0,1051,1061,1,0,0,0,1052,1050,1,0,0,0,1053,1054,5,61,
	0,0,1054,1055,3,162,81,0,1055,1056,5,87,0,0,1056,1057,3,198,99,0,1057,1062,
	1,0,0,0,1058,1059,3,240,120,0,1059,1060,3,72,36,0,1060,1062,1,0,0,0,1061,
	1053,1,0,0,0,1061,1058,1,0,0,0,1062,161,1,0,0,0,1063,1064,7,4,0,0,1064,
	163,1,0,0,0,1065,1066,7,5,0,0,1066,165,1,0,0,0,1067,1069,3,10,5,0,1068,
	1067,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,0,0,0,1070,1071,1,0,0,0,1071,
	1076,1,0,0,0,1072,1070,1,0,0,0,1073,1077,3,14,7,0,1074,1077,3,30,15,0,1075,
	1077,3,146,73,0,1076,1073,1,0,0,0,1076,1074,1,0,0,0,1076,1075,1,0,0,0,1077,
	167,1,0,0,0,1078,1192,3,156,78,0,1079,1080,5,2,0,0,1080,1083,3,198,99,0,
	1081,1082,5,93,0,0,1082,1084,3,198,99,0,1083,1081,1,0,0,0,1083,1084,1,0,
	0,0,1084,1085,1,0,0,0,1085,1086,5,84,0,0,1086,1192,1,0,0,0,1087,1088,5,
	22,0,0,1088,1089,3,192,96,0,1089,1092,3,168,84,0,1090,1091,5,15,0,0,1091,
	1093,3,168,84,0,1092,1090,1,0,0,0,1092,1093,1,0,0,0,1093,1192,1,0,0,0,1094,
	1095,5,21,0,0,1095,1096,5,78,0,0,1096,1097,3,186,93,0,1097,1098,5,79,0,
	0,1098,1099,3,168,84,0,1099,1192,1,0,0,0,1100,1101,5,50,0,0,1101,1102,3,
	192,96,0,1102,1103,3,168,84,0,1103,1192,1,0,0,0,1104,1105,5,13,0,0,1105,
	1106,3,168,84,0,1106,1107,5,50,0,0,1107,1108,3,192,96,0,1108,1109,5,84,
	0,0,1109,1192,1,0,0,0,1110,1111,5,47,0,0,1111,1121,3,156,78,0,1112,1114,
	3,170,85,0,1113,1112,1,0,0,0,1114,1115,1,0,0,0,1115,1113,1,0,0,0,1115,1116,
	1,0,0,0,1116,1118,1,0,0,0,1117,1119,3,174,87,0,1118,1117,1,0,0,0,1118,1119,
	1,0,0,0,1119,1122,1,0,0,0,1120,1122,3,174,87,0,1121,1113,1,0,0,0,1121,1120,
	1,0,0,0,1122,1192,1,0,0,0,1123,1124,5,47,0,0,1124,1125,3,176,88,0,1125,
	1129,3,156,78,0,1126,1128,3,170,85,0,1127,1126,1,0,0,0,1128,1131,1,0,0,
	0,1129,1127,1,0,0,0,1129,1130,1,0,0,0,1130,1133,1,0,0,0,1131,1129,1,0,0,
	0,1132,1134,3,174,87,0,1133,1132,1,0,0,0,1133,1134,1,0,0,0,1134,1192,1,
	0,0,0,1135,1136,5,41,0,0,1136,1137,3,192,96,0,1137,1141,5,80,0,0,1138,1140,
	3,182,91,0,1139,1138,1,0,0,0,1140,1143,1,0,0,0,1141,1139,1,0,0,0,1141,1142,
	1,0,0,0,1142,1147,1,0,0,0,1143,1141,1,0,0,0,1144,1146,3,184,92,0,1145,1144,
	1,0,0,0,1146,1149,1,0,0,0,1147,1145,1,0,0,0,1147,1148,1,0,0,0,1148,1150,
	1,0,0,0,1149,1147,1,0,0,0,1150,1151,5,81,0,0,1151,1192,1,0,0,0,1152,1153,
	5,42,0,0,1153,1154,3,192,96,0,1154,1155,3,156,78,0,1155,1192,1,0,0,0,1156,
	1158,5,36,0,0,1157,1159,3,198,99,0,1158,1157,1,0,0,0,1158,1159,1,0,0,0,
	1159,1160,1,0,0,0,1160,1192,5,84,0,0,1161,1162,5,44,0,0,1162,1163,3,198,
	99,0,1163,1164,5,84,0,0,1164,1192,1,0,0,0,1165,1167,5,4,0,0,1166,1168,3,
	162,81,0,1167,1166,1,0,0,0,1167,1168,1,0,0,0,1168,1169,1,0,0,0,1169,1192,
	5,84,0,0,1170,1172,5,11,0,0,1171,1173,3,162,81,0,1172,1171,1,0,0,0,1172,
	1173,1,0,0,0,1173,1174,1,0,0,0,1174,1192,5,84,0,0,1175,1176,5,62,0,0,1176,
	1177,3,198,99,0,1177,1178,5,84,0,0,1178,1192,1,0,0,0,1179,1192,5,84,0,0,
	1180,1181,3,198,99,0,1181,1182,5,84,0,0,1182,1192,1,0,0,0,1183,1185,3,210,
	105,0,1184,1186,5,84,0,0,1185,1184,1,0,0,0,1185,1186,1,0,0,0,1186,1192,
	1,0,0,0,1187,1188,3,162,81,0,1188,1189,5,93,0,0,1189,1190,3,168,84,0,1190,
	1192,1,0,0,0,1191,1078,1,0,0,0,1191,1079,1,0,0,0,1191,1087,1,0,0,0,1191,
	1094,1,0,0,0,1191,1100,1,0,0,0,1191,1104,1,0,0,0,1191,1110,1,0,0,0,1191,
	1123,1,0,0,0,1191,1135,1,0,0,0,1191,1152,1,0,0,0,1191,1156,1,0,0,0,1191,
	1161,1,0,0,0,1191,1165,1,0,0,0,1191,1170,1,0,0,0,1191,1175,1,0,0,0,1191,
	1179,1,0,0,0,1191,1180,1,0,0,0,1191,1183,1,0,0,0,1191,1187,1,0,0,0,1192,
	169,1,0,0,0,1193,1194,5,7,0,0,1194,1198,5,78,0,0,1195,1197,3,12,6,0,1196,
	1195,1,0,0,0,1197,1200,1,0,0,0,1198,1196,1,0,0,0,1198,1199,1,0,0,0,1199,
	1201,1,0,0,0,1200,1198,1,0,0,0,1201,1202,3,172,86,0,1202,1203,3,162,81,
	0,1203,1204,5,79,0,0,1204,1205,3,156,78,0,1205,171,1,0,0,0,1206,1211,3,
	102,51,0,1207,1208,5,107,0,0,1208,1210,3,102,51,0,1209,1207,1,0,0,0,1210,
	1213,1,0,0,0,1211,1209,1,0,0,0,1211,1212,1,0,0,0,1212,173,1,0,0,0,1213,
	1211,1,0,0,0,1214,1215,5,19,0,0,1215,1216,3,156,78,0,1216,175,1,0,0,0,1217,
	1218,5,78,0,0,1218,1220,3,178,89,0,1219,1221,5,84,0,0,1220,1219,1,0,0,0,
	1220,1221,1,0,0,0,1221,1222,1,0,0,0,1222,1223,5,79,0,0,1223,177,1,0,0,0,
	1224,1229,3,180,90,0,1225,1226,5,84,0,0,1226,1228,3,180,90,0,1227,1225,
	1,0,0,0,1228,1231,1,0,0,0,1229,1227,1,0,0,0,1229,1230,1,0,0,0,1230,179,
	1,0,0,0,1231,1229,1,0,0,0,1232,1234,3,12,6,0,1233,1232,1,0,0,0,1234,1237,
	1,0,0,0,1235,1233,1,0,0,0,1235,1236,1,0,0,0,1236,1243,1,0,0,0,1237,1235,
	1,0,0,0,1238,1239,3,82,41,0,1239,1240,3,76,38,0,1240,1244,1,0,0,0,1241,
	1242,5,61,0,0,1242,1244,3,162,81,0,1243,1238,1,0,0,0,1243,1241,1,0,0,0,
	1244,1245,1,0,0,0,1245,1246,5,87,0,0,1246,1247,3,198,99,0,1247,1250,1,0,
	0,0,1248,1250,3,102,51,0,1249,1235,1,0,0,0,1249,1248,1,0,0,0,1250,181,1,
	0,0,0,1251,1253,3,184,92,0,1252,1251,1,0,0,0,1253,1254,1,0,0,0,1254,1252,
	1,0,0,0,1254,1255,1,0,0,0,1255,1257,1,0,0,0,1256,1258,3,158,79,0,1257,1256,
	1,0,0,0,1258,1259,1,0,0,0,1259,1257,1,0,0,0,1259,1260,1,0,0,0,1260,183,
	1,0,0,0,1261,1267,5,6,0,0,1262,1268,3,198,99,0,1263,1268,5,128,0,0,1264,
	1265,3,240,120,0,1265,1266,3,162,81,0,1266,1268,1,0,0,0,1267,1262,1,0,0,
	0,1267,1263,1,0,0,0,1267,1264,1,0,0,0,1268,1269,1,0,0,0,1269,1273,5,93,
	0,0,1270,1271,5,12,0,0,1271,1273,5,93,0,0,1272,1261,1,0,0,0,1272,1270,1,
	0,0,0,1273,185,1,0,0,0,1274,1287,3,190,95,0,1275,1277,3,188,94,0,1276,1275,
	1,0,0,0,1276,1277,1,0,0,0,1277,1278,1,0,0,0,1278,1280,5,84,0,0,1279,1281,
	3,198,99,0,1280,1279,1,0,0,0,1280,1281,1,0,0,0,1281,1282,1,0,0,0,1282,1284,
	5,84,0,0,1283,1285,3,194,97,0,1284,1283,1,0,0,0,1284,1285,1,0,0,0,1285,
	1287,1,0,0,0,1286,1274,1,0,0,0,1286,1276,1,0,0,0,1287,187,1,0,0,0,1288,
	1291,3,160,80,0,1289,1291,3,194,97,0,1290,1288,1,0,0,0,1290,1289,1,0,0,
	0,1291,189,1,0,0,0,1292,1294,3,12,6,0,1293,1292,1,0,0,0,1294,1297,1,0,0,
	0,1295,1293,1,0,0,0,1295,1296,1,0,0,0,1296,1300,1,0,0,0,1297,1295,1,0,0,
	0,1298,1301,3,240,120,0,1299,1301,5,61,0,0,1300,1298,1,0,0,0,1300,1299,
	1,0,0,0,1301,1302,1,0,0,0,1302,1303,3,76,38,0,1303,1304,5,93,0,0,1304,1305,
	3,198,99,0,1305,191,1,0,0,0,1306,1307,5,78,0,0,1307,1308,3,198,99,0,1308,
	1309,5,79,0,0,1309,193,1,0,0,0,1310,1315,3,198,99,0,1311,1312,5,85,0,0,
	1312,1314,3,198,99,0,1313,1311,1,0,0,0,1314,1317,1,0,0,0,1315,1313,1,0,
	0,0,1315,1316,1,0,0,0,1316,195,1,0,0,0,1317,1315,1,0,0,0,1318,1322,3,162,
	81,0,1319,1322,5,43,0,0,1320,1322,5,40,0,0,1321,1318,1,0,0,0,1321,1319,
	1,0,0,0,1321,1320,1,0,0,0,1322,1323,1,0,0,0,1323,1324,3,250,125,0,1324,
	197,1,0,0,0,1325,1326,6,99,-1,0,1326,1369,3,208,104,0,1327,1369,3,196,98,
	0,1328,1329,3,240,120,0,1329,1335,5,122,0,0,1330,1332,3,244,122,0,1331,
	1330,1,0,0,0,1331,1332,1,0,0,0,1332,1333,1,0,0,0,1333,1336,3,162,81,0,1334,
	1336,5,31,0,0,1335,1331,1,0,0,0,1335,1334,1,0,0,0,1336,1369,1,0,0,0,1337,
	1338,3,218,109,0,1338,1340,5,122,0,0,1339,1341,3,244,122,0,1340,1339,1,
	0,0,0,1340,1341,1,0,0,0,1341,1342,1,0,0,0,1342,1343,5,31,0,0,1343,1369,
	1,0,0,0,1344,1369,3,210,105,0,1345,1346,7,6,0,0,1346,1369,3,198,99,17,1347,
	1351,5,78,0,0,1348,1350,3,112,56,0,1349,1348,1,0,0,0,1350,1353,1,0,0,0,
	1351,1349,1,0,0,0,1351,1352,1,0,0,0,1352,1354,1,0,0,0,1353,1351,1,0,0,0,
	1354,1359,3,240,120,0,1355,1356,5,106,0,0,1356,1358,3,240,120,0,1357,1355,
	1,0,0,0,1358,1361,1,0,0,0,1359,1357,1,0,0,0,1359,1360,1,0,0,0,1360,1362,
	1,0,0,0,1361,1359,1,0,0,0,1362,1363,5,79,0,0,1363,1364,3,198,99,16,1364,
	1369,1,0,0,0,1365,1366,5,31,0,0,1366,1369,3,220,110,0,1367,1369,3,202,101,
	0,1368,1325,1,0,0,0,1368,1327,1,0,0,0,1368,1328,1,0,0,0,1368,1337,1,0,0,
	0,1368,1344,1,0,0,0,1368,1345,1,0,0,0,1368,1347,1,0,0,0,1368,1365,1,0,0,
	0,1368,1367,1,0,0,0,1369,1453,1,0,0,0,1370,1371,10,14,0,0,1371,1372,7,7,
	0,0,1372,1452,3,198,99,15,1373,1374,10,13,0,0,1374,1375,7,8,0,0,1375,1452,
	3,198,99,14,1376,1384,10,12,0,0,1377,1378,5,89,0,0,1378,1385,5,89,0,0,1379,
	1380,5,88,0,0,1380,1381,5,88,0,0,1381,1385,5,88,0,0,1382,1383,5,88,0,0,
	1383,1385,5,88,0,0,1384,1377,1,0,0,0,1384,1379,1,0,0,0,1384,1382,1,0,0,
	0,1385,1386,1,0,0,0,1386,1452,3,198,99,13,1387,1388,10,11,0,0,1388,1389,
	7,9,0,0,1389,1452,3,198,99,12,1390,1391,10,9,0,0,1391,1392,7,10,0,0,1392,
	1452,3,198,99,10,1393,1394,10,8,0,0,1394,1395,5,106,0,0,1395,1452,3,198,
	99,9,1396,1397,10,7,0,0,1397,1398,5,108,0,0,1398,1452,3,198,99,8,1399,1400,
	10,6,0,0,1400,1401,5,107,0,0,1401,1452,3,198,99,7,1402,1403,10,5,0,0,1403,
	1404,5,98,0,0,1404,1452,3,198,99,6,1405,1406,10,4,0,0,1406,1407,5,99,0,
	0,1407,1452,3,198,99,5,1408,1409,10,3,0,0,1409,1410,5,92,0,0,1410,1411,
	3,198,99,0,1411,1412,5,93,0,0,1412,1413,3,198,99,3,1413,1452,1,0,0,0,1414,
	1415,10,2,0,0,1415,1416,7,11,0,0,1416,1452,3,198,99,2,1417,1418,10,25,0,
	0,1418,1419,5,82,0,0,1419,1420,3,198,99,0,1420,1421,5,83,0,0,1421,1452,
	1,0,0,0,1422,1423,10,24,0,0,1423,1435,5,86,0,0,1424,1436,3,162,81,0,1425,
	1436,3,196,98,0,1426,1436,5,43,0,0,1427,1429,5,31,0,0,1428,1430,3,236,118,
	0,1429,1428,1,0,0,0,1429,1430,1,0,0,0,1430,1431,1,0,0,0,1431,1436,3,224,
	112,0,1432,1433,5,40,0,0,1433,1436,3,246,123,0,1434,1436,3,230,115,0,1435,
	1424,1,0,0,0,1435,1425,1,0,0,0,1435,1426,1,0,0,0,1435,1427,1,0,0,0,1435,
	1432,1,0,0,0,1435,1434,1,0,0,0,1436,1452,1,0,0,0,1437,1438,10,22,0,0,1438,
	1440,5,122,0,0,1439,1441,3,244,122,0,1440,1439,1,0,0,0,1440,1441,1,0,0,
	0,1441,1442,1,0,0,0,1442,1452,3,162,81,0,1443,1444,10,18,0,0,1444,1452,
	7,12,0,0,1445,1446,10,10,0,0,1446,1449,5,26,0,0,1447,1450,3,240,120,0,1448,
	1450,3,200,100,0,1449,1447,1,0,0,0,1449,1448,1,0,0,0,1450,1452,1,0,0,0,
	1451,1370,1,0,0,0,1451,1373,1,0,0,0,1451,1376,1,0,0,0,1451,1387,1,0,0,0,
	1451,1390,1,0,0,0,1451,1393,1,0,0,0,1451,1396,1,0,0,0,1451,1399,1,0,0,0,
	1451,1402,1,0,0,0,1451,1405,1,0,0,0,1451,1408,1,0,0,0,1451,1414,1,0,0,0,
	1451,1417,1,0,0,0,1451,1422,1,0,0,0,1451,1437,1,0,0,0,1451,1443,1,0,0,0,
	1451,1445,1,0,0,0,1452,1455,1,0,0,0,1453,1451,1,0,0,0,1453,1454,1,0,0,0,
	1454,199,1,0,0,0,1455,1453,1,0,0,0,1456,1458,3,12,6,0,1457,1456,1,0,0,0,
	1458,1461,1,0,0,0,1459,1457,1,0,0,0,1459,1460,1,0,0,0,1460,1462,1,0,0,0,
	1461,1459,1,0,0,0,1462,1466,3,240,120,0,1463,1465,3,112,56,0,1464,1463,
	1,0,0,0,1465,1468,1,0,0,0,1466,1464,1,0,0,0,1466,1467,1,0,0,0,1467,1469,
	1,0,0,0,1468,1466,1,0,0,0,1469,1470,3,162,81,0,1470,201,1,0,0,0,1471,1472,
	3,204,102,0,1472,1473,5,121,0,0,1473,1474,3,206,103,0,1474,203,1,0,0,0,
	1475,1498,3,162,81,0,1476,1478,5,78,0,0,1477,1479,3,92,46,0,1478,1477,1,
	0,0,0,1478,1479,1,0,0,0,1479,1480,1,0,0,0,1480,1498,5,79,0,0,1481,1482,
	5,78,0,0,1482,1487,3,162,81,0,1483,1484,5,85,0,0,1484,1486,3,162,81,0,1485,
	1483,1,0,0,0,1486,1489,1,0,0,0,1487,1485,1,0,0,0,1487,1488,1,0,0,0,1488,
	1490,1,0,0,0,1489,1487,1,0,0,0,1490,1491,5,79,0,0,1491,1498,1,0,0,0,1492,
	1494,5,78,0,0,1493,1495,3,98,49,0,1494,1493,1,0,0,0,1494,1495,1,0,0,0,1495,
	1496,1,0,0,0,1496,1498,5,79,0,0,1497,1475,1,0,0,0,1497,1476,1,0,0,0,1497,
	1481,1,0,0,0,1497,1492,1,0,0,0,1498,205,1,0,0,0,1499,1502,3,198,99,0,1500,
	1502,3,156,78,0,1501,1499,1,0,0,0,1501,1500,1,0,0,0,1502,207,1,0,0,0,1503,
	1504,5,78,0,0,1504,1505,3,198,99,0,1505,1506,5,79,0,0,1506,1522,1,0,0,0,
	1507,1522,5,43,0,0,1508,1522,5,40,0,0,1509,1522,3,104,52,0,1510,1522,3,
	162,81,0,1511,1512,3,44,22,0,1512,1513,5,86,0,0,1513,1514,5,9,0,0,1514,
	1522,1,0,0,0,1515,1519,3,236,118,0,1516,1520,3,248,124,0,1517,1518,5,43,
	0,0,1518,1520,3,250,125,0,1519,1516,1,0,0,0,1519,1517,1,0,0,0,1520,1522,
	1,0,0,0,1521,1503,1,0,0,0,1521,1507,1,0,0,0,1521,1508,1,0,0,0,1521,1509,
	1,0,0,0,1521,1510,1,0,0,0,1521,1511,1,0,0,0,1521,1515,1,0,0,0,1522,209,
	1,0,0,0,1523,1524,5,41,0,0,1524,1525,3,192,96,0,1525,1529,5,80,0,0,1526,
	1528,3,212,106,0,1527,1526,1,0,0,0,1528,1531,1,0,0,0,1529,1527,1,0,0,0,
	1529,1530,1,0,0,0,1530,1532,1,0,0,0,1531,1529,1,0,0,0,1532,1533,5,81,0,
	0,1533,211,1,0,0,0,1534,1538,5,6,0,0,1535,1539,3,194,97,0,1536,1539,5,77,
	0,0,1537,1539,3,214,107,0,1538,1535,1,0,0,0,1538,1536,1,0,0,0,1538,1537,
	1,0,0,0,1539,1540,1,0,0,0,1540,1541,7,13,0,0,1541,1546,3,216,108,0,1542,
	1543,5,12,0,0,1543,1544,7,13,0,0,1544,1546,3,216,108,0,1545,1534,1,0,0,
	0,1545,1542,1,0,0,0,1546,213,1,0,0,0,1547,1548,6,107,-1,0,1548,1549,5,78,
	0,0,1549,1550,3,214,107,0,1550,1551,5,79,0,0,1551,1574,1,0,0,0,1552,1554,
	3,12,6,0,1553,1552,1,0,0,0,1554,1557,1,0,0,0,1555,1553,1,0,0,0,1555,1556,
	1,0,0,0,1556,1558,1,0,0,0,1557,1555,1,0,0,0,1558,1562,3,240,120,0,1559,
	1561,3,112,56,0,1560,1559,1,0,0,0,1561,1564,1,0,0,0,1562,1560,1,0,0,0,1562,
	1563,1,0,0,0,1563,1565,1,0,0,0,1564,1562,1,0,0,0,1565,1570,3,162,81,0,1566,
	1567,5,98,0,0,1567,1569,3,198,99,0,1568,1566,1,0,0,0,1569,1572,1,0,0,0,
	1570,1568,1,0,0,0,1570,1571,1,0,0,0,1571,1574,1,0,0,0,1572,1570,1,0,0,0,
	1573,1547,1,0,0,0,1573,1555,1,0,0,0,1574,1580,1,0,0,0,1575,1576,10,1,0,
	0,1576,1577,5,98,0,0,1577,1579,3,198,99,0,1578,1575,1,0,0,0,1579,1582,1,
	0,0,0,1580,1578,1,0,0,0,1580,1581,1,0,0,0,1581,215,1,0,0,0,1582,1580,1,
	0,0,0,1583,1591,3,156,78,0,1584,1586,3,158,79,0,1585,1584,1,0,0,0,1586,
	1589,1,0,0,0,1587,1585,1,0,0,0,1587,1588,1,0,0,0,1588,1591,1,0,0,0,1589,
	1587,1,0,0,0,1590,1583,1,0,0,0,1590,1587,1,0,0,0,1591,217,1,0,0,0,1592,
	1593,3,82,41,0,1593,1594,5,86,0,0,1594,1596,1,0,0,0,1595,1592,1,0,0,0,1595,
	1596,1,0,0,0,1596,1600,1,0,0,0,1597,1599,3,112,56,0,1598,1597,1,0,0,0,1599,
	1602,1,0,0,0,1600,1598,1,0,0,0,1600,1601,1,0,0,0,1601,1603,1,0,0,0,1602,
	1600,1,0,0,0,1603,1605,3,162,81,0,1604,1606,3,244,122,0,1605,1604,1,0,0,
	0,1605,1606,1,0,0,0,1606,219,1,0,0,0,1607,1609,3,236,118,0,1608,1607,1,
	0,0,0,1608,1609,1,0,0,0,1609,1610,1,0,0,0,1610,1611,3,222,111,0,1611,1612,
	3,228,114,0,1612,1617,1,0,0,0,1613,1614,3,222,111,0,1614,1615,3,226,113,
	0,1615,1617,1,0,0,0,1616,1608,1,0,0,0,1616,1613,1,0,0,0,1617,221,1,0,0,
	0,1618,1620,3,162,81,0,1619,1621,3,232,116,0,1620,1619,1,0,0,0,1620,1621,
	1,0,0,0,1621,1629,1,0,0,0,1622,1623,5,86,0,0,1623,1625,3,162,81,0,1624,
	1626,3,232,116,0,1625,1624,1,0,0,0,1625,1626,1,0,0,0,1626,1628,1,0,0,0,
	1627,1622,1,0,0,0,1628,1631,1,0,0,0,1629,1627,1,0,0,0,1629,1630,1,0,0,0,
	1630,1634,1,0,0,0,1631,1629,1,0,0,0,1632,1634,3,242,121,0,1633,1618,1,0,
	0,0,1633,1632,1,0,0,0,1634,223,1,0,0,0,1635,1637,3,162,81,0,1636,1638,3,
	234,117,0,1637,1636,1,0,0,0,1637,1638,1,0,0,0,1638,1639,1,0,0,0,1639,1640,
	3,228,114,0,1640,225,1,0,0,0,1641,1642,5,82,0,0,1642,1644,5,83,0,0,1643,
	1641,1,0,0,0,1644,1645,1,0,0,0,1645,1643,1,0,0,0,1645,1646,1,0,0,0,1646,
	1647,1,0,0,0,1647,1664,3,80,40,0,1648,1649,5,82,0,0,1649,1650,3,198,99,
	0,1650,1651,5,83,0,0,1651,1653,1,0,0,0,1652,1648,1,0,0,0,1653,1654,1,0,
	0,0,1654,1652,1,0,0,0,1654,1655,1,0,0,0,1655,1660,1,0,0,0,1656,1657,5,82,
	0,0,1657,1659,5,83,0,0,1658,1656,1,0,0,0,1659,1662,1,0,0,0,1660,1658,1,
	0,0,0,1660,1661,1,0,0,0,1661,1664,1,0,0,0,1662,1660,1,0,0,0,1663,1643,1,
	0,0,0,1663,1652,1,0,0,0,1664,227,1,0,0,0,1665,1667,3,250,125,0,1666,1668,
	3,32,16,0,1667,1666,1,0,0,0,1667,1668,1,0,0,0,1668,229,1,0,0,0,1669,1670,
	3,236,118,0,1670,1671,3,248,124,0,1671,231,1,0,0,0,1672,1673,5,89,0,0,1673,
	1676,5,88,0,0,1674,1676,3,244,122,0,1675,1672,1,0,0,0,1675,1674,1,0,0,0,
	1676,233,1,0,0,0,1677,1678,5,89,0,0,1678,1681,5,88,0,0,1679,1681,3,236,
	118,0,1680,1677,1,0,0,0,1680,1679,1,0,0,0,1681,235,1,0,0,0,1682,1683,5,
	89,0,0,1683,1684,3,238,119,0,1684,1685,5,88,0,0,1685,237,1,0,0,0,1686,1691,
	3,240,120,0,1687,1688,5,85,0,0,1688,1690,3,240,120,0,1689,1687,1,0,0,0,
	1690,1693,1,0,0,0,1691,1689,1,0,0,0,1691,1692,1,0,0,0,1692,239,1,0,0,0,
	1693,1691,1,0,0,0,1694,1696,3,112,56,0,1695,1694,1,0,0,0,1696,1699,1,0,
	0,0,1697,1695,1,0,0,0,1697,1698,1,0,0,0,1698,1702,1,0,0,0,1699,1697,1,0,
	0,0,1700,1703,3,82,41,0,1701,1703,3,242,121,0,1702,1700,1,0,0,0,1702,1701,
	1,0,0,0,1703,1714,1,0,0,0,1704,1706,3,112,56,0,1705,1704,1,0,0,0,1706,1709,
	1,0,0,0,1707,1705,1,0,0,0,1707,1708,1,0,0,0,1708,1710,1,0,0,0,1709,1707,
	1,0,0,0,1710,1711,5,82,0,0,1711,1713,5,83,0,0,1712,1707,1,0,0,0,1713,1716,
	1,0,0,0,1714,1712,1,0,0,0,1714,1715,1,0,0,0,1715,241,1,0,0,0,1716,1714,
	1,0,0,0,1717,1718,7,14,0,0,1718,243,1,0,0,0,1719,1720,5,89,0,0,1720,1725,
	3,84,42,0,1721,1722,5,85,0,0,1722,1724,3,84,42,0,1723,1721,1,0,0,0,1724,
	1727,1,0,0,0,1725,1723,1,0,0,0,1725,1726,1,0,0,0,1726,1728,1,0,0,0,1727,
	1725,1,0,0,0,1728,1729,5,88,0,0,1729,245,1,0,0,0,1730,1740,3,250,125,0,
	1731,1733,5,86,0,0,1732,1734,3,244,122,0,1733,1732,1,0,0,0,1733,1734,1,
	0,0,0,1734,1735,1,0,0,0,1735,1737,3,162,81,0,1736,1738,3,250,125,0,1737,
	1736,1,0,0,0,1737,1738,1,0,0,0,1738,1740,1,0,0,0,1739,1730,1,0,0,0,1739,
	1731,1,0,0,0,1740,247,1,0,0,0,1741,1742,5,40,0,0,1742,1747,3,246,123,0,
	1743,1744,3,162,81,0,1744,1745,3,250,125,0,1745,1747,1,0,0,0,1746,1741,
	1,0,0,0,1746,1743,1,0,0,0,1747,249,1,0,0,0,1748,1750,5,78,0,0,1749,1751,
	3,194,97,0,1750,1749,1,0,0,0,1750,1751,1,0,0,0,1751,1752,1,0,0,0,1752,1753,
	5,79,0,0,1753,251,1,0,0,0,219,253,257,259,264,266,272,277,286,291,298,306,
	313,325,329,334,338,342,346,356,364,372,376,383,390,394,397,400,409,415,
	420,423,429,435,439,443,451,460,467,473,477,489,498,503,509,513,525,532,
	545,550,560,568,578,587,598,603,612,622,627,636,642,649,654,662,666,668,
	674,680,685,691,697,699,706,711,716,719,721,731,741,746,749,754,763,770,
	781,787,798,808,819,828,833,836,843,853,861,864,867,880,888,893,901,905,
	909,913,917,919,923,929,937,947,956,966,974,988,995,1000,1006,1015,1024,
	1026,1035,1045,1050,1061,1070,1076,1083,1092,1115,1118,1121,1129,1133,1141,
	1147,1158,1167,1172,1185,1191,1198,1211,1220,1229,1235,1243,1249,1254,1259,
	1267,1272,1276,1280,1284,1286,1290,1295,1300,1315,1321,1331,1335,1340,1351,
	1359,1368,1384,1429,1435,1440,1449,1451,1453,1459,1466,1478,1487,1494,1497,
	1501,1519,1521,1529,1538,1545,1555,1562,1570,1573,1580,1587,1590,1595,1600,
	1605,1608,1616,1620,1625,1629,1633,1637,1645,1654,1660,1663,1667,1675,1680,
	1691,1697,1702,1707,1714,1725,1733,1737,1739,1746,1750];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(JavaParser._serializedATN);
		}

		return JavaParser.__ATN;
	}


	static DecisionsToDFA = JavaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(JavaParser.SEMI, i);
	}
	public typeDeclaration_list(): TypeDeclarationContext[] {
		return this.getTypedRuleContexts(TypeDeclarationContext) as TypeDeclarationContext[];
	}
	public typeDeclaration(i: number): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, i) as TypeDeclarationContext;
	}
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getTypedRuleContext(ModuleDeclarationContext, 0) as ModuleDeclarationContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(JavaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_compilationUnit;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(JavaParser.PACKAGE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_packageDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(JavaParser.IMPORT, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(JavaParser.STATIC, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(JavaParser.DOT, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(JavaParser.MUL, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_importDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
	public classOrInterfaceModifier_list(): ClassOrInterfaceModifierContext[] {
		return this.getTypedRuleContexts(ClassOrInterfaceModifierContext) as ClassOrInterfaceModifierContext[];
	}
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, i) as ClassOrInterfaceModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, 0) as ClassOrInterfaceModifierContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(JavaParser.NATIVE, 0);
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(JavaParser.SYNCHRONIZED, 0);
	}
	public TRANSIENT(): TerminalNode {
		return this.getToken(JavaParser.TRANSIENT, 0);
	}
	public VOLATILE(): TerminalNode {
		return this.getToken(JavaParser.VOLATILE, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_modifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterModifier) {
	 		listener.enterModifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitModifier) {
	 		listener.exitModifier(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(JavaParser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(JavaParser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(JavaParser.PRIVATE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(JavaParser.STATIC, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(JavaParser.ABSTRACT, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(JavaParser.FINAL, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(JavaParser.STRICTFP, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(JavaParser.SEALED, 0);
	}
	public NON_SEALED(): TerminalNode {
		return this.getToken(JavaParser.NON_SEALED, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classOrInterfaceModifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassOrInterfaceModifier) {
	 		listener.enterClassOrInterfaceModifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassOrInterfaceModifier) {
	 		listener.exitClassOrInterfaceModifier(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINAL(): TerminalNode {
		return this.getToken(JavaParser.FINAL, 0);
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableModifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterVariableModifier) {
	 		listener.enterVariableModifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitVariableModifier) {
	 		listener.exitVariableModifier(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(JavaParser.CLASS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(JavaParser.EXTENDS, 0);
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(JavaParser.IMPLEMENTS, 0);
	}
	public typeList_list(): TypeListContext[] {
		return this.getTypedRuleContexts(TypeListContext) as TypeListContext[];
	}
	public typeList(i: number): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, i) as TypeListContext;
	}
	public PERMITS(): TerminalNode {
		return this.getToken(JavaParser.PERMITS, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(JavaParser.LT, 0);
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public GT(): TerminalNode {
		return this.getToken(JavaParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeParameters;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(JavaParser.EXTENDS, 0);
	}
	public typeBound(): TypeBoundContext {
		return this.getTypedRuleContext(TypeBoundContext, 0) as TypeBoundContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeParameter;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType_list(): TypeTypeContext[] {
		return this.getTypedRuleContexts(TypeTypeContext) as TypeTypeContext[];
	}
	public typeType(i: number): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, i) as TypeTypeContext;
	}
	public BITAND_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.BITAND);
	}
	public BITAND(i: number): TerminalNode {
		return this.getToken(JavaParser.BITAND, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeBound;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeBound) {
	 		listener.enterTypeBound(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeBound) {
	 		listener.exitTypeBound(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(JavaParser.ENUM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(JavaParser.IMPLEMENTS, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public enumConstants(): EnumConstantsContext {
		return this.getTypedRuleContext(EnumConstantsContext, 0) as EnumConstantsContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(JavaParser.COMMA, 0);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		return this.getTypedRuleContext(EnumBodyDeclarationsContext, 0) as EnumBodyDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumConstant_list(): EnumConstantContext[] {
		return this.getTypedRuleContexts(EnumConstantContext) as EnumConstantContext[];
	}
	public enumConstant(i: number): EnumConstantContext {
		return this.getTypedRuleContext(EnumConstantContext, i) as EnumConstantContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumConstants;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterEnumConstants) {
	 		listener.enterEnumConstants(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitEnumConstants) {
	 		listener.exitEnumConstants(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumConstant;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterEnumConstant) {
	 		listener.enterEnumConstant(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitEnumConstant) {
	 		listener.exitEnumConstant(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enumBodyDeclarations;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterEnumBodyDeclarations) {
	 		listener.enterEnumBodyDeclarations(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitEnumBodyDeclarations) {
	 		listener.exitEnumBodyDeclarations(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(JavaParser.INTERFACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getTypedRuleContext(InterfaceBodyContext, 0) as InterfaceBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(JavaParser.EXTENDS, 0);
	}
	public typeList_list(): TypeListContext[] {
		return this.getTypedRuleContexts(TypeListContext) as TypeListContext[];
	}
	public typeList(i: number): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, i) as TypeListContext;
	}
	public PERMITS(): TerminalNode {
		return this.getToken(JavaParser.PERMITS, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceDeclaration) {
	 		listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceDeclaration) {
	 		listener.exitInterfaceDeclaration(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassBody) {
	 		listener.enterClassBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassBody) {
	 		listener.exitClassBody(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public interfaceBodyDeclaration_list(): InterfaceBodyDeclarationContext[] {
		return this.getTypedRuleContexts(InterfaceBodyDeclarationContext) as InterfaceBodyDeclarationContext[];
	}
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext {
		return this.getTypedRuleContext(InterfaceBodyDeclarationContext, i) as InterfaceBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceBody) {
	 		listener.enterInterfaceBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceBody) {
	 		listener.exitInterfaceBody(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(JavaParser.STATIC, 0);
	}
	public memberDeclaration(): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, 0) as MemberDeclarationContext;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classBodyDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassBodyDeclaration) {
	 		listener.enterClassBodyDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassBodyDeclaration) {
	 		listener.exitClassBodyDeclaration(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		return this.getTypedRuleContext(GenericMethodDeclarationContext, 0) as GenericMethodDeclarationContext;
	}
	public fieldDeclaration(): FieldDeclarationContext {
		return this.getTypedRuleContext(FieldDeclarationContext, 0) as FieldDeclarationContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		return this.getTypedRuleContext(GenericConstructorDeclarationContext, 0) as GenericConstructorDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_memberDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterMemberDeclaration) {
	 		listener.enterMemberDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitMemberDeclaration) {
	 		listener.exitMemberDeclaration(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getTypedRuleContext(TypeTypeOrVoidContext, 0) as TypeTypeOrVoidContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
	public THROWS(): TerminalNode {
		return this.getToken(JavaParser.THROWS, 0);
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterMethodBody) {
	 		listener.enterMethodBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitMethodBody) {
	 		listener.exitMethodBody(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public VOID(): TerminalNode {
		return this.getToken(JavaParser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeTypeOrVoid;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeTypeOrVoid) {
	 		listener.enterTypeTypeOrVoid(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeTypeOrVoid) {
	 		listener.exitTypeTypeOrVoid(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_genericMethodDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterGenericMethodDeclaration) {
	 		listener.enterGenericMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitGenericMethodDeclaration) {
	 		listener.exitGenericMethodDeclaration(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_genericConstructorDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterGenericConstructorDeclaration) {
	 		listener.enterGenericConstructorDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitGenericConstructorDeclaration) {
	 		listener.exitGenericConstructorDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public THROWS(): TerminalNode {
		return this.getToken(JavaParser.THROWS, 0);
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constructorDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterConstructorDeclaration) {
	 		listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitConstructorDeclaration) {
	 		listener.exitConstructorDeclaration(this);
		}
	}
}


export class CompactConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_compactConstructorDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCompactConstructorDeclaration) {
	 		listener.enterCompactConstructorDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCompactConstructorDeclaration) {
	 		listener.exitCompactConstructorDeclaration(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_fieldDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFieldDeclaration) {
	 		listener.enterFieldDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFieldDeclaration) {
	 		listener.exitFieldDeclaration(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		return this.getTypedRuleContext(InterfaceMemberDeclarationContext, 0) as InterfaceMemberDeclarationContext;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceBodyDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceBodyDeclaration) {
	 		listener.enterInterfaceBodyDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceBodyDeclaration) {
	 		listener.exitInterfaceBodyDeclaration(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
	public constDeclaration(): ConstDeclarationContext {
		return this.getTypedRuleContext(ConstDeclarationContext, 0) as ConstDeclarationContext;
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getTypedRuleContext(InterfaceMethodDeclarationContext, 0) as InterfaceMethodDeclarationContext;
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		return this.getTypedRuleContext(GenericInterfaceMethodDeclarationContext, 0) as GenericInterfaceMethodDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMemberDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceMemberDeclaration) {
	 		listener.enterInterfaceMemberDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceMemberDeclaration) {
	 		listener.exitInterfaceMemberDeclaration(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public constantDeclarator_list(): ConstantDeclaratorContext[] {
		return this.getTypedRuleContexts(ConstantDeclaratorContext) as ConstantDeclaratorContext[];
	}
	public constantDeclarator(i: number): ConstantDeclaratorContext {
		return this.getTypedRuleContext(ConstantDeclaratorContext, i) as ConstantDeclaratorContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterConstDeclaration) {
	 		listener.enterConstDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitConstDeclaration) {
	 		listener.exitConstDeclaration(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_constantDeclarator;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterConstantDeclarator) {
	 		listener.enterConstantDeclarator(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitConstantDeclarator) {
	 		listener.exitConstantDeclarator(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getTypedRuleContext(InterfaceCommonBodyDeclarationContext, 0) as InterfaceCommonBodyDeclarationContext;
	}
	public interfaceMethodModifier_list(): InterfaceMethodModifierContext[] {
		return this.getTypedRuleContexts(InterfaceMethodModifierContext) as InterfaceMethodModifierContext[];
	}
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext {
		return this.getTypedRuleContext(InterfaceMethodModifierContext, i) as InterfaceMethodModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMethodDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceMethodDeclaration) {
	 		listener.enterInterfaceMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceMethodDeclaration) {
	 		listener.exitInterfaceMethodDeclaration(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(JavaParser.PUBLIC, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(JavaParser.ABSTRACT, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(JavaParser.DEFAULT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(JavaParser.STATIC, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(JavaParser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceMethodModifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceMethodModifier) {
	 		listener.enterInterfaceMethodModifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceMethodModifier) {
	 		listener.exitInterfaceMethodModifier(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getTypedRuleContext(InterfaceCommonBodyDeclarationContext, 0) as InterfaceCommonBodyDeclarationContext;
	}
	public interfaceMethodModifier_list(): InterfaceMethodModifierContext[] {
		return this.getTypedRuleContexts(InterfaceMethodModifierContext) as InterfaceMethodModifierContext[];
	}
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext {
		return this.getTypedRuleContext(InterfaceMethodModifierContext, i) as InterfaceMethodModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_genericInterfaceMethodDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterGenericInterfaceMethodDeclaration) {
	 		listener.enterGenericInterfaceMethodDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitGenericInterfaceMethodDeclaration) {
	 		listener.exitGenericInterfaceMethodDeclaration(this);
		}
	}
}


export class InterfaceCommonBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getTypedRuleContext(TypeTypeOrVoidContext, 0) as TypeTypeOrVoidContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
	public THROWS(): TerminalNode {
		return this.getToken(JavaParser.THROWS, 0);
	}
	public qualifiedNameList(): QualifiedNameListContext {
		return this.getTypedRuleContext(QualifiedNameListContext, 0) as QualifiedNameListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_interfaceCommonBodyDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInterfaceCommonBodyDeclaration) {
	 		listener.enterInterfaceCommonBodyDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInterfaceCommonBodyDeclaration) {
	 		listener.exitInterfaceCommonBodyDeclaration(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarator_list(): VariableDeclaratorContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorContext) as VariableDeclaratorContext[];
	}
	public variableDeclarator(i: number): VariableDeclaratorContext {
		return this.getTypedRuleContext(VariableDeclaratorContext, i) as VariableDeclaratorContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclarators;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterVariableDeclarators) {
	 		listener.enterVariableDeclarators(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitVariableDeclarators) {
	 		listener.exitVariableDeclarators(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclarator;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterVariableDeclarator) {
	 		listener.enterVariableDeclarator(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitVariableDeclarator) {
	 		listener.exitVariableDeclarator(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableDeclaratorId;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterVariableDeclaratorId) {
	 		listener.enterVariableDeclaratorId(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitVariableDeclaratorId) {
	 		listener.exitVariableDeclaratorId(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_variableInitializer;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterVariableInitializer) {
	 		listener.enterVariableInitializer(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitVariableInitializer) {
	 		listener.exitVariableInitializer(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public variableInitializer_list(): VariableInitializerContext[] {
		return this.getTypedRuleContexts(VariableInitializerContext) as VariableInitializerContext[];
	}
	public variableInitializer(i: number): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, i) as VariableInitializerContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arrayInitializer;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterArrayInitializer) {
	 		listener.enterArrayInitializer(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitArrayInitializer) {
	 		listener.exitArrayInitializer(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(JavaParser.DOT, i);
	}
	public typeArguments_list(): TypeArgumentsContext[] {
		return this.getTypedRuleContexts(TypeArgumentsContext) as TypeArgumentsContext[];
	}
	public typeArguments(i: number): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, i) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classOrInterfaceType;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassOrInterfaceType) {
	 		listener.enterClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassOrInterfaceType) {
	 		listener.exitClassOrInterfaceType(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(JavaParser.QUESTION, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(JavaParser.EXTENDS, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(JavaParser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeArgument;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_qualifiedNameList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterQualifiedNameList) {
	 		listener.enterQualifiedNameList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitQualifiedNameList) {
	 		listener.exitQualifiedNameList(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public receiverParameter(): ReceiverParameterContext {
		return this.getTypedRuleContext(ReceiverParameterContext, 0) as ReceiverParameterContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(JavaParser.COMMA, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameters;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFormalParameters) {
	 		listener.enterFormalParameters(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFormalParameters) {
	 		listener.exitFormalParameters(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(JavaParser.THIS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(JavaParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_receiverParameter;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterReceiverParameter) {
	 		listener.enterReceiverParameter(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitReceiverParameter) {
	 		listener.exitReceiverParameter(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameter_list(): FormalParameterContext[] {
		return this.getTypedRuleContexts(FormalParameterContext) as FormalParameterContext[];
	}
	public formalParameter(i: number): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, i) as FormalParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
	public lastFormalParameter(): LastFormalParameterContext {
		return this.getTypedRuleContext(LastFormalParameterContext, 0) as LastFormalParameterContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameterList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFormalParameterList) {
	 		listener.enterFormalParameterList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFormalParameterList) {
	 		listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_formalParameter;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFormalParameter) {
	 		listener.enterFormalParameter(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFormalParameter) {
	 		listener.exitFormalParameter(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(JavaParser.ELLIPSIS, 0);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lastFormalParameter;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLastFormalParameter) {
	 		listener.enterLastFormalParameter(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLastFormalParameter) {
	 		listener.exitLastFormalParameter(this);
		}
	}
}


export class LambdaLVTIListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaLVTIParameter_list(): LambdaLVTIParameterContext[] {
		return this.getTypedRuleContexts(LambdaLVTIParameterContext) as LambdaLVTIParameterContext[];
	}
	public lambdaLVTIParameter(i: number): LambdaLVTIParameterContext {
		return this.getTypedRuleContext(LambdaLVTIParameterContext, i) as LambdaLVTIParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lambdaLVTIList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLambdaLVTIList) {
	 		listener.enterLambdaLVTIList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLambdaLVTIList) {
	 		listener.exitLambdaLVTIList(this);
		}
	}
}


export class LambdaLVTIParameterContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(JavaParser.VAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lambdaLVTIParameter;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLambdaLVTIParameter) {
	 		listener.enterLambdaLVTIParameter(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLambdaLVTIParameter) {
	 		listener.exitLambdaLVTIParameter(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(JavaParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_qualifiedName;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
	public floatLiteral(): FloatLiteralContext {
		return this.getTypedRuleContext(FloatLiteralContext, 0) as FloatLiteralContext;
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.CHAR_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.STRING_LITERAL, 0);
	}
	public BOOL_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.BOOL_LITERAL, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.NULL_LITERAL, 0);
	}
	public TEXT_BLOCK(): TerminalNode {
		return this.getToken(JavaParser.TEXT_BLOCK, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_literal;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.DECIMAL_LITERAL, 0);
	}
	public HEX_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.HEX_LITERAL, 0);
	}
	public OCT_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.OCT_LITERAL, 0);
	}
	public BINARY_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.BINARY_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_integerLiteral;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.FLOAT_LITERAL, 0);
	}
	public HEX_FLOAT_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.HEX_FLOAT_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_floatLiteral;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFloatLiteral) {
	 		listener.enterFloatLiteral(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFloatLiteral) {
	 		listener.exitFloatLiteral(this);
		}
	}
}


export class AltAnnotationQualifiedNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(JavaParser.AT, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(JavaParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_altAnnotationQualifiedName;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAltAnnotationQualifiedName) {
	 		listener.enterAltAnnotationQualifiedName(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAltAnnotationQualifiedName) {
	 		listener.exitAltAnnotationQualifiedName(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(JavaParser.AT, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		return this.getTypedRuleContext(AltAnnotationQualifiedNameContext, 0) as AltAnnotationQualifiedNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public elementValuePairs(): ElementValuePairsContext {
		return this.getTypedRuleContext(ElementValuePairsContext, 0) as ElementValuePairsContext;
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotation;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValuePair_list(): ElementValuePairContext[] {
		return this.getTypedRuleContexts(ElementValuePairContext) as ElementValuePairContext[];
	}
	public elementValuePair(i: number): ElementValuePairContext {
		return this.getTypedRuleContext(ElementValuePairContext, i) as ElementValuePairContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValuePairs;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterElementValuePairs) {
	 		listener.enterElementValuePairs(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitElementValuePairs) {
	 		listener.exitElementValuePairs(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValuePair;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterElementValuePair) {
	 		listener.enterElementValuePair(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitElementValuePair) {
	 		listener.exitElementValuePair(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getTypedRuleContext(ElementValueArrayInitializerContext, 0) as ElementValueArrayInitializerContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValue;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterElementValue) {
	 		listener.enterElementValue(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitElementValue) {
	 		listener.exitElementValue(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public elementValue_list(): ElementValueContext[] {
		return this.getTypedRuleContexts(ElementValueContext) as ElementValueContext[];
	}
	public elementValue(i: number): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, i) as ElementValueContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_elementValueArrayInitializer;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterElementValueArrayInitializer) {
	 		listener.enterElementValueArrayInitializer(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitElementValueArrayInitializer) {
	 		listener.exitElementValueArrayInitializer(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(JavaParser.AT, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(JavaParser.INTERFACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getTypedRuleContext(AnnotationTypeBodyContext, 0) as AnnotationTypeBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationTypeDeclaration) {
	 		listener.enterAnnotationTypeDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationTypeDeclaration) {
	 		listener.exitAnnotationTypeDeclaration(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public annotationTypeElementDeclaration_list(): AnnotationTypeElementDeclarationContext[] {
		return this.getTypedRuleContexts(AnnotationTypeElementDeclarationContext) as AnnotationTypeElementDeclarationContext[];
	}
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeElementDeclarationContext, i) as AnnotationTypeElementDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationTypeBody) {
	 		listener.enterAnnotationTypeBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationTypeBody) {
	 		listener.exitAnnotationTypeBody(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		return this.getTypedRuleContext(AnnotationTypeElementRestContext, 0) as AnnotationTypeElementRestContext;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeElementDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationTypeElementDeclaration) {
	 		listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationTypeElementDeclaration) {
	 		listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		return this.getTypedRuleContext(AnnotationMethodOrConstantRestContext, 0) as AnnotationMethodOrConstantRestContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationTypeElementRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationTypeElementRest) {
	 		listener.enterAnnotationTypeElementRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationTypeElementRest) {
	 		listener.exitAnnotationTypeElementRest(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationMethodRest(): AnnotationMethodRestContext {
		return this.getTypedRuleContext(AnnotationMethodRestContext, 0) as AnnotationMethodRestContext;
	}
	public annotationConstantRest(): AnnotationConstantRestContext {
		return this.getTypedRuleContext(AnnotationConstantRestContext, 0) as AnnotationConstantRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationMethodOrConstantRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationMethodOrConstantRest) {
	 		listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationMethodOrConstantRest) {
	 		listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public defaultValue(): DefaultValueContext {
		return this.getTypedRuleContext(DefaultValueContext, 0) as DefaultValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationMethodRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationMethodRest) {
	 		listener.enterAnnotationMethodRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationMethodRest) {
	 		listener.exitAnnotationMethodRest(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_annotationConstantRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterAnnotationConstantRest) {
	 		listener.enterAnnotationConstantRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitAnnotationConstantRest) {
	 		listener.exitAnnotationConstantRest(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(JavaParser.DEFAULT, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_defaultValue;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterDefaultValue) {
	 		listener.enterDefaultValue(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitDefaultValue) {
	 		listener.exitDefaultValue(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MODULE(): TerminalNode {
		return this.getToken(JavaParser.MODULE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public moduleBody(): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, 0) as ModuleBodyContext;
	}
	public OPEN(): TerminalNode {
		return this.getToken(JavaParser.OPEN, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_moduleDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterModuleDeclaration) {
	 		listener.enterModuleDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitModuleDeclaration) {
	 		listener.exitModuleDeclaration(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public moduleDirective_list(): ModuleDirectiveContext[] {
		return this.getTypedRuleContexts(ModuleDirectiveContext) as ModuleDirectiveContext[];
	}
	public moduleDirective(i: number): ModuleDirectiveContext {
		return this.getTypedRuleContext(ModuleDirectiveContext, i) as ModuleDirectiveContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_moduleBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterModuleBody) {
	 		listener.enterModuleBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitModuleBody) {
	 		listener.exitModuleBody(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(JavaParser.REQUIRES, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public requiresModifier_list(): RequiresModifierContext[] {
		return this.getTypedRuleContexts(RequiresModifierContext) as RequiresModifierContext[];
	}
	public requiresModifier(i: number): RequiresModifierContext {
		return this.getTypedRuleContext(RequiresModifierContext, i) as RequiresModifierContext;
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(JavaParser.EXPORTS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(JavaParser.TO, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(JavaParser.OPENS, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(JavaParser.USES, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(JavaParser.PROVIDES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(JavaParser.WITH, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_moduleDirective;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterModuleDirective) {
	 		listener.enterModuleDirective(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitModuleDirective) {
	 		listener.exitModuleDirective(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(JavaParser.TRANSITIVE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(JavaParser.STATIC, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_requiresModifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRequiresModifier) {
	 		listener.enterRequiresModifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRequiresModifier) {
	 		listener.exitRequiresModifier(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RECORD(): TerminalNode {
		return this.getToken(JavaParser.RECORD, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public recordHeader(): RecordHeaderContext {
		return this.getTypedRuleContext(RecordHeaderContext, 0) as RecordHeaderContext;
	}
	public recordBody(): RecordBodyContext {
		return this.getTypedRuleContext(RecordBodyContext, 0) as RecordBodyContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(JavaParser.IMPLEMENTS, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_recordDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRecordDeclaration) {
	 		listener.enterRecordDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRecordDeclaration) {
	 		listener.exitRecordDeclaration(this);
		}
	}
}


export class RecordHeaderContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public recordComponentList(): RecordComponentListContext {
		return this.getTypedRuleContext(RecordComponentListContext, 0) as RecordComponentListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_recordHeader;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRecordHeader) {
	 		listener.enterRecordHeader(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRecordHeader) {
	 		listener.exitRecordHeader(this);
		}
	}
}


export class RecordComponentListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recordComponent_list(): RecordComponentContext[] {
		return this.getTypedRuleContexts(RecordComponentContext) as RecordComponentContext[];
	}
	public recordComponent(i: number): RecordComponentContext {
		return this.getTypedRuleContext(RecordComponentContext, i) as RecordComponentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_recordComponentList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRecordComponentList) {
	 		listener.enterRecordComponentList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRecordComponentList) {
	 		listener.exitRecordComponentList(this);
		}
	}
}


export class RecordComponentContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_recordComponent;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRecordComponent) {
	 		listener.enterRecordComponent(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRecordComponent) {
	 		listener.exitRecordComponent(this);
		}
	}
}


export class RecordBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
	public compactConstructorDeclaration_list(): CompactConstructorDeclarationContext[] {
		return this.getTypedRuleContexts(CompactConstructorDeclarationContext) as CompactConstructorDeclarationContext[];
	}
	public compactConstructorDeclaration(i: number): CompactConstructorDeclarationContext {
		return this.getTypedRuleContext(CompactConstructorDeclarationContext, i) as CompactConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_recordBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterRecordBody) {
	 		listener.enterRecordBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitRecordBody) {
	 		listener.exitRecordBody(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_block;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		return this.getTypedRuleContext(LocalTypeDeclarationContext, 0) as LocalTypeDeclarationContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_blockStatement;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterBlockStatement) {
	 		listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitBlockStatement) {
	 		listener.exitBlockStatement(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(JavaParser.VAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_localVariableDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLocalVariableDeclaration) {
	 		listener.enterLocalVariableDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLocalVariableDeclaration) {
	 		listener.exitLocalVariableDeclaration(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(JavaParser.IDENTIFIER, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(JavaParser.MODULE, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(JavaParser.OPEN, 0);
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(JavaParser.REQUIRES, 0);
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(JavaParser.EXPORTS, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(JavaParser.OPENS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(JavaParser.TO, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(JavaParser.USES, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(JavaParser.PROVIDES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(JavaParser.WITH, 0);
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(JavaParser.TRANSITIVE, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(JavaParser.YIELD, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(JavaParser.SEALED, 0);
	}
	public PERMITS(): TerminalNode {
		return this.getToken(JavaParser.PERMITS, 0);
	}
	public RECORD(): TerminalNode {
		return this.getToken(JavaParser.RECORD, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(JavaParser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_identifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(JavaParser.IDENTIFIER, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(JavaParser.MODULE, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(JavaParser.OPEN, 0);
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(JavaParser.REQUIRES, 0);
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(JavaParser.EXPORTS, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(JavaParser.OPENS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(JavaParser.TO, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(JavaParser.USES, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(JavaParser.PROVIDES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(JavaParser.WITH, 0);
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(JavaParser.TRANSITIVE, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(JavaParser.SEALED, 0);
	}
	public PERMITS(): TerminalNode {
		return this.getToken(JavaParser.PERMITS, 0);
	}
	public RECORD(): TerminalNode {
		return this.getToken(JavaParser.RECORD, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeIdentifier;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeIdentifier) {
	 		listener.enterTypeIdentifier(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeIdentifier) {
	 		listener.exitTypeIdentifier(this);
		}
	}
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
	public classOrInterfaceModifier_list(): ClassOrInterfaceModifierContext[] {
		return this.getTypedRuleContexts(ClassOrInterfaceModifierContext) as ClassOrInterfaceModifierContext[];
	}
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, i) as ClassOrInterfaceModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_localTypeDeclaration;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLocalTypeDeclaration) {
	 		listener.enterLocalTypeDeclaration(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLocalTypeDeclaration) {
	 		listener.exitLocalTypeDeclaration(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel!: BlockContext;
	public _statementExpression!: ExpressionContext;
	public _identifierLabel!: IdentifierContext;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(JavaParser.ASSERT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(JavaParser.COLON, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(JavaParser.IF, 0);
	}
	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(JavaParser.ELSE, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(JavaParser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public forControl(): ForControlContext {
		return this.getTypedRuleContext(ForControlContext, 0) as ForControlContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(JavaParser.WHILE, 0);
	}
	public DO(): TerminalNode {
		return this.getToken(JavaParser.DO, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(JavaParser.TRY, 0);
	}
	public finallyBlock(): FinallyBlockContext {
		return this.getTypedRuleContext(FinallyBlockContext, 0) as FinallyBlockContext;
	}
	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}
	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getTypedRuleContext(ResourceSpecificationContext, 0) as ResourceSpecificationContext;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(JavaParser.SWITCH, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementGroupContext) as SwitchBlockStatementGroupContext[];
	}
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementGroupContext, i) as SwitchBlockStatementGroupContext;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(JavaParser.SYNCHRONIZED, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(JavaParser.RETURN, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(JavaParser.THROW, 0);
	}
	public BREAK(): TerminalNode {
		return this.getToken(JavaParser.BREAK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(JavaParser.CONTINUE, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(JavaParser.YIELD, 0);
	}
	public switchExpression(): SwitchExpressionContext {
		return this.getTypedRuleContext(SwitchExpressionContext, 0) as SwitchExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_statement;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(JavaParser.CATCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public catchType(): CatchTypeContext {
		return this.getTypedRuleContext(CatchTypeContext, 0) as CatchTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_catchClause;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCatchClause) {
	 		listener.enterCatchClause(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCatchClause) {
	 		listener.exitCatchClause(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public BITOR_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.BITOR);
	}
	public BITOR(i: number): TerminalNode {
		return this.getToken(JavaParser.BITOR, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_catchType;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCatchType) {
	 		listener.enterCatchType(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCatchType) {
	 		listener.exitCatchType(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(JavaParser.FINALLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_finallyBlock;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterFinallyBlock) {
	 		listener.enterFinallyBlock(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitFinallyBlock) {
	 		listener.exitFinallyBlock(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public resources(): ResourcesContext {
		return this.getTypedRuleContext(ResourcesContext, 0) as ResourcesContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(JavaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_resourceSpecification;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterResourceSpecification) {
	 		listener.enterResourceSpecification(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitResourceSpecification) {
	 		listener.exitResourceSpecification(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public resource_list(): ResourceContext[] {
		return this.getTypedRuleContexts(ResourceContext) as ResourceContext[];
	}
	public resource(i: number): ResourceContext {
		return this.getTypedRuleContext(ResourceContext, i) as ResourceContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(JavaParser.SEMI, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_resources;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterResources) {
	 		listener.enterResources(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitResources) {
	 		listener.exitResources(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(JavaParser.VAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_resource;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterResource) {
	 		listener.enterResource(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitResource) {
	 		listener.exitResource(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchBlockStatementGroup;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSwitchBlockStatementGroup) {
	 		listener.enterSwitchBlockStatementGroup(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSwitchBlockStatementGroup) {
	 		listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression!: ExpressionContext;
	public _enumConstantName!: Token;
	public _varName!: IdentifierContext;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(JavaParser.CASE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(JavaParser.COLON, 0);
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(JavaParser.IDENTIFIER, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(JavaParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchLabel;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSwitchLabel) {
	 		listener.enterSwitchLabel(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSwitchLabel) {
	 		listener.exitSwitchLabel(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate!: ExpressionListContext;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enhancedForControl(): EnhancedForControlContext {
		return this.getTypedRuleContext(EnhancedForControlContext, 0) as EnhancedForControlContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(JavaParser.SEMI, i);
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_forControl;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterForControl) {
	 		listener.enterForControl(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitForControl) {
	 		listener.exitForControl(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_forInit;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterForInit) {
	 		listener.enterForInit(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitForInit) {
	 		listener.exitForInit(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(JavaParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(JavaParser.VAR, 0);
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_enhancedForControl;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterEnhancedForControl) {
	 		listener.enterEnhancedForControl(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitEnhancedForControl) {
	 		listener.exitEnhancedForControl(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_parExpression;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterParExpression) {
	 		listener.enterParExpression(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitParExpression) {
	 		listener.exitParExpression(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_expressionList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(JavaParser.THIS, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(JavaParser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_methodCall;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterMethodCall) {
	 		listener.enterMethodCall(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitMethodCall) {
	 		listener.exitMethodCall(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public _postfix!: Token;
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public methodCall(): MethodCallContext {
		return this.getTypedRuleContext(MethodCallContext, 0) as MethodCallContext;
	}
	public typeType_list(): TypeTypeContext[] {
		return this.getTypedRuleContexts(TypeTypeContext) as TypeTypeContext[];
	}
	public typeType(i: number): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, i) as TypeTypeContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(JavaParser.COLONCOLON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(JavaParser.NEW, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public switchExpression(): SwitchExpressionContext {
		return this.getTypedRuleContext(SwitchExpressionContext, 0) as SwitchExpressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(JavaParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(JavaParser.SUB, 0);
	}
	public INC(): TerminalNode {
		return this.getToken(JavaParser.INC, 0);
	}
	public DEC(): TerminalNode {
		return this.getToken(JavaParser.DEC, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(JavaParser.TILDE, 0);
	}
	public BANG(): TerminalNode {
		return this.getToken(JavaParser.BANG, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public BITAND_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.BITAND);
	}
	public BITAND(i: number): TerminalNode {
		return this.getToken(JavaParser.BITAND, i);
	}
	public creator(): CreatorContext {
		return this.getTypedRuleContext(CreatorContext, 0) as CreatorContext;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(JavaParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(JavaParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(JavaParser.MOD, 0);
	}
	public LT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LT);
	}
	public LT(i: number): TerminalNode {
		return this.getToken(JavaParser.LT, i);
	}
	public GT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.GT);
	}
	public GT(i: number): TerminalNode {
		return this.getToken(JavaParser.GT, i);
	}
	public LE(): TerminalNode {
		return this.getToken(JavaParser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(JavaParser.GE, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(JavaParser.EQUAL, 0);
	}
	public NOTEQUAL(): TerminalNode {
		return this.getToken(JavaParser.NOTEQUAL, 0);
	}
	public CARET(): TerminalNode {
		return this.getToken(JavaParser.CARET, 0);
	}
	public BITOR(): TerminalNode {
		return this.getToken(JavaParser.BITOR, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(JavaParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(JavaParser.OR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(JavaParser.COLON, 0);
	}
	public QUESTION(): TerminalNode {
		return this.getToken(JavaParser.QUESTION, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ASSIGN, 0);
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.SUB_ASSIGN, 0);
	}
	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.MUL_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.DIV_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.AND_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.OR_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.XOR_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.URSHIFT_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.LSHIFT_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(JavaParser.MOD_ASSIGN, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(JavaParser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(JavaParser.RBRACK, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(JavaParser.DOT, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(JavaParser.THIS, 0);
	}
	public innerCreator(): InnerCreatorContext {
		return this.getTypedRuleContext(InnerCreatorContext, 0) as InnerCreatorContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(JavaParser.SUPER, 0);
	}
	public superSuffix(): SuperSuffixContext {
		return this.getTypedRuleContext(SuperSuffixContext, 0) as SuperSuffixContext;
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		return this.getTypedRuleContext(ExplicitGenericInvocationContext, 0) as ExplicitGenericInvocationContext;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public INSTANCEOF(): TerminalNode {
		return this.getToken(JavaParser.INSTANCEOF, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_expression;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_pattern;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaParameters(): LambdaParametersContext {
		return this.getTypedRuleContext(LambdaParametersContext, 0) as LambdaParametersContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(JavaParser.ARROW, 0);
	}
	public lambdaBody(): LambdaBodyContext {
		return this.getTypedRuleContext(LambdaBodyContext, 0) as LambdaBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lambdaExpression;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLambdaExpression) {
	 		listener.enterLambdaExpression(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLambdaExpression) {
	 		listener.exitLambdaExpression(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
	public lambdaLVTIList(): LambdaLVTIListContext {
		return this.getTypedRuleContext(LambdaLVTIListContext, 0) as LambdaLVTIListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lambdaParameters;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLambdaParameters) {
	 		listener.enterLambdaParameters(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLambdaParameters) {
	 		listener.exitLambdaParameters(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_lambdaBody;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterLambdaBody) {
	 		listener.enterLambdaBody(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitLambdaBody) {
	 		listener.exitLambdaBody(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(JavaParser.THIS, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(JavaParser.SUPER, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getTypedRuleContext(TypeTypeOrVoidContext, 0) as TypeTypeOrVoidContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(JavaParser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(JavaParser.CLASS, 0);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getTypedRuleContext(ExplicitGenericInvocationSuffixContext, 0) as ExplicitGenericInvocationSuffixContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_primary;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(JavaParser.SWITCH, 0);
	}
	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(JavaParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(JavaParser.RBRACE, 0);
	}
	public switchLabeledRule_list(): SwitchLabeledRuleContext[] {
		return this.getTypedRuleContexts(SwitchLabeledRuleContext) as SwitchLabeledRuleContext[];
	}
	public switchLabeledRule(i: number): SwitchLabeledRuleContext {
		return this.getTypedRuleContext(SwitchLabeledRuleContext, i) as SwitchLabeledRuleContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchExpression;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSwitchExpression) {
	 		listener.enterSwitchExpression(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSwitchExpression) {
	 		listener.exitSwitchExpression(this);
		}
	}
}


export class SwitchLabeledRuleContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(JavaParser.CASE, 0);
	}
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		return this.getTypedRuleContext(SwitchRuleOutcomeContext, 0) as SwitchRuleOutcomeContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(JavaParser.ARROW, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(JavaParser.COLON, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(JavaParser.NULL_LITERAL, 0);
	}
	public guardedPattern(): GuardedPatternContext {
		return this.getTypedRuleContext(GuardedPatternContext, 0) as GuardedPatternContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(JavaParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchLabeledRule;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSwitchLabeledRule) {
	 		listener.enterSwitchLabeledRule(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSwitchLabeledRule) {
	 		listener.exitSwitchLabeledRule(this);
		}
	}
}


export class GuardedPatternContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public guardedPattern(): GuardedPatternContext {
		return this.getTypedRuleContext(GuardedPatternContext, 0) as GuardedPatternContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public typeType(): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, 0) as TypeTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(JavaParser.AND, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_guardedPattern;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterGuardedPattern) {
	 		listener.enterGuardedPattern(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitGuardedPattern) {
	 		listener.exitGuardedPattern(this);
		}
	}
}


export class SwitchRuleOutcomeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_switchRuleOutcome;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSwitchRuleOutcome) {
	 		listener.enterSwitchRuleOutcome(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSwitchRuleOutcome) {
	 		listener.exitSwitchRuleOutcome(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(JavaParser.DOT, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classType;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassType) {
	 		listener.enterClassType(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassType) {
	 		listener.exitClassType(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createdName(): CreatedNameContext {
		return this.getTypedRuleContext(CreatedNameContext, 0) as CreatedNameContext;
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getTypedRuleContext(ClassCreatorRestContext, 0) as ClassCreatorRestContext;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public arrayCreatorRest(): ArrayCreatorRestContext {
		return this.getTypedRuleContext(ArrayCreatorRestContext, 0) as ArrayCreatorRestContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_creator;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCreator) {
	 		listener.enterCreator(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCreator) {
	 		listener.exitCreator(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public typeArgumentsOrDiamond_list(): TypeArgumentsOrDiamondContext[] {
		return this.getTypedRuleContexts(TypeArgumentsOrDiamondContext) as TypeArgumentsOrDiamondContext[];
	}
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, i) as TypeArgumentsOrDiamondContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(JavaParser.DOT, i);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_createdName;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterCreatedName) {
	 		listener.enterCreatedName(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitCreatedName) {
	 		listener.exitCreatedName(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getTypedRuleContext(ClassCreatorRestContext, 0) as ClassCreatorRestContext;
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsOrDiamondContext, 0) as NonWildcardTypeArgumentsOrDiamondContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_innerCreator;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterInnerCreator) {
	 		listener.enterInnerCreator(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitInnerCreator) {
	 		listener.exitInnerCreator(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arrayCreatorRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterArrayCreatorRest) {
	 		listener.enterArrayCreatorRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitArrayCreatorRest) {
	 		listener.exitArrayCreatorRest(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_classCreatorRest;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterClassCreatorRest) {
	 		listener.enterClassCreatorRest(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitClassCreatorRest) {
	 		listener.exitClassCreatorRest(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getTypedRuleContext(ExplicitGenericInvocationSuffixContext, 0) as ExplicitGenericInvocationSuffixContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_explicitGenericInvocation;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterExplicitGenericInvocation) {
	 		listener.enterExplicitGenericInvocation(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitExplicitGenericInvocation) {
	 		listener.exitExplicitGenericInvocation(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(JavaParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(JavaParser.GT, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeArgumentsOrDiamond;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeArgumentsOrDiamond) {
	 		listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeArgumentsOrDiamond) {
	 		listener.exitTypeArgumentsOrDiamond(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(JavaParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(JavaParser.GT, 0);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterNonWildcardTypeArgumentsOrDiamond) {
	 		listener.enterNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitNonWildcardTypeArgumentsOrDiamond) {
	 		listener.exitNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(JavaParser.LT, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(JavaParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_nonWildcardTypeArguments;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterNonWildcardTypeArguments) {
	 		listener.enterNonWildcardTypeArguments(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitNonWildcardTypeArguments) {
	 		listener.exitNonWildcardTypeArguments(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeType_list(): TypeTypeContext[] {
		return this.getTypedRuleContexts(TypeTypeContext) as TypeTypeContext[];
	}
	public typeType(i: number): TypeTypeContext {
		return this.getTypedRuleContext(TypeTypeContext, i) as TypeTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeList;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(JavaParser.RBRACK, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeType;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeType) {
	 		listener.enterTypeType(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeType) {
	 		listener.exitTypeType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(JavaParser.BOOLEAN, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(JavaParser.CHAR, 0);
	}
	public BYTE(): TerminalNode {
		return this.getToken(JavaParser.BYTE, 0);
	}
	public SHORT(): TerminalNode {
		return this.getToken(JavaParser.SHORT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(JavaParser.INT, 0);
	}
	public LONG(): TerminalNode {
		return this.getToken(JavaParser.LONG, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(JavaParser.FLOAT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(JavaParser.DOUBLE, 0);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_primitiveType;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(JavaParser.LT, 0);
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
	public GT(): TerminalNode {
		return this.getToken(JavaParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JavaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JavaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_typeArguments;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(JavaParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_superSuffix;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterSuperSuffix) {
	 		listener.enterSuperSuffix(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitSuperSuffix) {
	 		listener.exitSuperSuffix(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUPER(): TerminalNode {
		return this.getToken(JavaParser.SUPER, 0);
	}
	public superSuffix(): SuperSuffixContext {
		return this.getTypedRuleContext(SuperSuffixContext, 0) as SuperSuffixContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_explicitGenericInvocationSuffix;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterExplicitGenericInvocationSuffix) {
	 		listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitExplicitGenericInvocationSuffix) {
	 		listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JavaParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JavaParser.RPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return JavaParser.RULE_arguments;
	}
	public enterRule(listener: JavaParserListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: JavaParserListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
}
