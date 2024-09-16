Change is constant  
Next.js is not just a frontend React framework, but a fullstack framework.

Google Chromium or Mozilla Firefox  
VSCodium or Codespaces  
Node.js

Auto Close Tag  
Auto Rename Tag  
Babel JavaScript  
Better Comments  
ES7+ React/Redux/React-Native snippets  
ESLint  
GitHub Copilot  
Material Icon Theme  
npm Intellisense  
One Dark Pro  
Path Intellisense  
Tailwind CSS IntelliSense

```bash
npm install eslint-config-standard
```

```bash
npm install eslint-plugin-tailwindcss
```

```bash
npm install eslint-config-prettier
```

```bash
npm install prettier
```

#### extend .eslintrc.json

```bash
{
  "extends": ["next/core-web-vitals", "next/typescript", "standard", "plugin:tailwindcss/recommended", "prettier"]
}
```

Shift + Ctrl + P: 'open settings json'

```bash
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.colorTheme": "One Dark Pro",
  "workbench.startupEditor": "none",
  "editor.tabSize": 2,
  "workbench.iconTheme": "material-icon-theme",
  "diffEditor.hideUnchangedRegions.enabled": true,
  "workbench.editor.enablePreview": false,
  "diffEditor.ignoreTrimWhitespace": false,
  "path-intellisense.showHiddenFiles": true
}
```
