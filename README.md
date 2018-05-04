# isEmail

It's a project setup as sample on how to work with TypeScript and Jest -- it contains a simple method that checks for a valid email.

It is also deployed to NPM as to demostrate the deployment process.

You will need to have [nodejs](http://nodejs.org) and an updated version of [npm](https://github.com/npm/npm).

**To update to the latest NPM version run this command:** `npm i -g npm`

#### 1 Create a repo in [github.com](https://github.com/new)

* add .gitignore: Node
* add a license: [MIT License](https://choosealicense.com/)

Once you created the empty repo clone it:

**$**`git clone https://github.com/<new-repo-nane>.git`

**$**`cd <new-repo-name>` 

### 2 Initialize the project

**$**`$ npm init`

### 3 Install TypeScript

`npm i -D typescript`

 * add the `tsconfig.json` file
 
 ```Javascript
 {
  "compilerOptions": {
    "target": "es5",        /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
    "module": "commonjs",   /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "declaration": true,    /* Generates corresponding '.d.ts' file. */
    "outDir": "./dist",     /* Redirect output structure to the directory. */
    "strict": true          /* Enable all strict type-checking options. */
  }
}
 ```
 * update the `package.json` file
 
 ```Javascript
   "scripts": {
    "build": "tsc"
  }
  ```

### 4 Install Jest

This setup should allow you to write Jest tests in Typescript and be able to locate errors.

`npm i -D jest ts-jest @types/jest`
 
 * update the `package.json`
 
 ```Javascript
    "scripts": {
    "build": "tsc",
    "test": "jest",
    "test:watch": "jest --watch",
    "coverage": "jest --coverage"
  }
   "jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
 ```

### 5 create the source and test file

At this point create a `/lib` folder and the `index.ts` file:

```Javascript
export default function isEmail(str:string):boolean {
    // Verify : https://regex101.com/r/VBGyXV/1
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return re.test(str)

}
```
and the test file:

```JavaScript
import isEmail from './index'

describe('Email Utility', ()=> {
    test('checks for a valid email', ()=> {
        expect(isEmail('me@mail.com')).toBe(true)
    })
    test('recognizes a malformed email', ()=>{
        expect(isEmail('me@mail')).toBe(false)
    })
})
```
### Setup to Publish to NPM






