/**
 * StackBlitz WebContainers Integration
 * 
 * This file sets up the WebContainer environment for running Angular
 * applications entirely in the browser.
 */

import { WebContainer } from '@webcontainer/api';

/**
 * Initialize WebContainer with Angular development environment
 */
export async function initializeAngularWebContainer() {
  // Check if WebContainers are supported
  if (!window.WebContainer) {
    throw new Error('WebContainers are not supported in this browser');
  }

  // Create a new WebContainer instance
  const webcontainer = await WebContainer.boot();

  // Set up the Angular project files
  const files = {
    'package.json': {
      file: {
        contents: `{
  "name": "angular-webcontainers-demo",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --host 0.0.0.0 --port 3000 --disable-host-check",
    "build": "ng build",
    "watch": "ng build --watch --configuration development"
  },
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "@types/node": "^18.0.0",
    "typescript": "~5.2.0"
  }
}`
      }
    },
    'angular.json': {
      file: {
        contents: `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-webcontainers-demo": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "css"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/angular-webcontainers-demo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "css",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "angular-webcontainers-demo:build:production"
            },
            "development": {
              "buildTarget": "angular-webcontainers-demo:build:development",
              "hmr": true
            }
          },
          "defaultConfiguration": "development"
        }
      }
    }
  }
}`
      }
    },
    'tsconfig.json': {
      file: {
        contents: `{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}`
      }
    }
  };

  // Mount the files
  await webcontainer.mount(files);

  // Install dependencies
  const installProcess = await webcontainer.spawn('npm', ['install']);
  const installExitCode = await installProcess.exit;
  
  if (installExitCode !== 0) {
    throw new Error('Failed to install dependencies');
  }

  // Start the Angular development server
  const serverProcess = await webcontainer.spawn('npm', ['run', 'start']);
  
  // Wait for the server to be ready
  webcontainer.on('server-ready', (port, url) => {
    console.log(`Angular server is ready at ${url}`);
  });

  return webcontainer;
}

/**
 * Set up live file watching and hot reloading
 */
export function setupLiveReload(webcontainer: WebContainer) {
  // Watch for file changes and trigger reloads
  webcontainer.on('file-changed', async (event) => {
    console.log('File changed:', event.path);
    
    // The Angular dev server will automatically handle HMR
    // This is just for logging and additional functionality if needed
  });
}

/**
 * Handle WebContainer cleanup
 */
export function cleanupWebContainer(webcontainer: WebContainer) {
  // Clean up processes and resources
  webcontainer.spawn('pkill', ['-f', 'ng serve']);
}

// Export types for better TypeScript support
export interface WebContainerInstance {
  webcontainer: WebContainer;
  serverUrl: string;
  isReady: boolean;
}