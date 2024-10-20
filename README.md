# Ham Flow

Where amateur radio operators (also known as radio amateurs or hams) share their knowledge.  

**This is a hobby project.**  

As an amateur radio operator myself ([callsign PY1II](https://www.qrz.com/db/PY1II)), I’m building this site for the amateur radio community. If you're a programmer and would like to contribute, your help would be greatly appreciated!  

I also use this project as a way to introduce my students to web development. If you’re interested in learning more about our programming school for kids, check out [SuperGeeks Petrópolis](https://www.instagram.com/p/C033hLbu6qa/?img_index=1).  

Change is constant!  
**Incomplete live site:** https://www.hamflow.com  


## Prerequisites

Node.js version 18+  
**IDE:** VSCodium or Codespaces  
**Browser:** Google Chromium or Mozilla Firefox  


### VSCodium Extensions:
- Auto Close Tag  
- Auto Rename Tag  
- Babel JavaScript  
- Better Comments  
- ES7+ React/Redux/React-Native snippets  
- ESLint  
- GitHub Copilot  
- Material Icon Theme  
- npm Intellisense  
- One Dark Pro  
- Path Intellisense  
- Tailwind CSS IntelliSense


### Installs:

`npm install eslint-config-standard`  

`npm install eslint-plugin-tailwindcss`  

`npm install eslint-config-prettier`  

`npm install prettier`  


#### extend .eslintrc.json

```bash
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"]
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

### Setup layout:
- tailwind.config.ts
- globals.css
- theme.css


### Install

`npm install @tailwindcss/typography tailwindcss-animate`  


## BACKEND



## Database



### Install mongodb and mongoose

`npm install mongodb mongoose`  


### Install shadcn form and zod

`npx shadcn-ui@latest add form`


### Install shadcn tiny mce

`bash npm install --save @tinymce/tinymce-react`


### Install svix for webhook with Clerk

`npm install svix`


### Install shadcn skeleton to load pages

`npx shadcn-ui@latest add skeleton`


## Questions

Next.js is not just a frontend React framework, but a fullstack framework.  
Study lections 11, 13, 14, 27, 29/30, 47


- What is a function?
- What is markup?

- What is a React Component?  
A React component is a JavaScript function that returns markup:  
```bash
function Button() {
  return (
    <button>I'm a button</button>
  );
}
```
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.  



- What are Client Components?  

- What are React Server Components?  
https://react.dev/reference/rsc/server-components  

- What are React Server Actions?  
https://react.dev/reference/rsc/server-actions  
