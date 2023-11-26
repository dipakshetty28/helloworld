# Java Code Quality Checker

Java Code Quality Checker is a Visual Studio Code extension designed for Java developers to ensure code quality and consistency. It analyzes Java source files based on a set of customizable rules defined in a JSON format and provides feedback on potential improvements.

## Features

- **Code Analysis**: Scans Java files for code quality issues based on predefined rules.
- **Customizable Rules**: Users can define their own rules in a JSON file.
- **Severity Levels**: Issues are categorized by severity (info, warning, error, critical) to prioritize fixes.

## Requirements

- Visual Studio Code 1.40.0 or higher.
- Java Development Kit (JDK) 8 or newer.

## Extension Settings

This extension contributes the following settings:

* `rules/rules.json`: Path to the JSON file containing custom rules.

## Input JSON Format

The extension expects the following JSON format for custom rules:


{
  "rules": [
    {
      "id": "1",
      "name": "Variable Naming Convention",
      "description": "Ensure variables follow a consistent naming convention.",
      "type": "style",
      "severity": "warning",
      "pattern": "^[a-zA-Z][a-zA-Z0-9]*$",
      "message": "Variable names should start with a letter and contain only letters and numbers."
    },
    // ... other rules
  ]
}


### Rule Fields:

- `id`: A unique identifier for the rule.
- `name`: A brief name for the rule.
- `description`: A description of what the rule checks for.
- `type`: The type of rule (e.g., style, security).
- `severity`: The severity level (e.g., error, warning, info).
- `pattern`: A regex pattern for rules that check text formats.
- `message`: The message to display when the rule is violated.

## How to Use

1. Install the extension from the Visual Studio Code Marketplace.
2. Create a JSON file with your custom rules and specify its path in the extension settings.
3. Open a Java file in VS Code, and the extension will automatically analyze the code based on your rules.
4. Review the output Json files for any issues detected by the extension.

## Known Issues

- Current version does not support real-time analysis; file needs to be saved for triggering analysis.

## Release Notes

### 1.0.0

Initial release of Java Code Quality Checker.

- Basic rule set for variable naming and line length checks.
- Customizable rule configuration via JSON.
