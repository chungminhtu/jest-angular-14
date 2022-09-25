# Integrating jest with angular 14 +

## Steps

1. uninstall jasmine & karma using `npm uninstall -D @types/jasmine jasmine jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter ts-node`
2. install jest using `npm i -D @types/jest jest jest-preset-angular @angular-builders/jest`
3. create file `tests/setupJest.ts` in root and add below content

```typescript
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import 'jest-preset-angular';
import 'zone.js';
import 'zone.js/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: { destroyAfterEach: true },
  }
);

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

HTMLCanvasElement.prototype.getContext = <typeof HTMLCanvasElement.prototype.getContext>jest.fn();
```

4. create file `jest.config.js` in root and add below content

```javascript
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  coverageDirectory: 'tests/coverage',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  snapshotResolver: './tests/snapshotResolver.js',
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
```
5. create `tests/snapshotResolver.js` in root with below content
```javascript
const path = require('path')
const rootDir = path.resolve(__dirname, '..')
module.exports = {
  testPathForConsistencyCheck: 'some/__tests__/example.test.js',

  /** resolves from test to snapshot path */
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace('src/', 'tests/__snapshots__/') + snapshotExtension
  },

  /** resolves from snapshot to test path */
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('tests/__snapshots__/', 'src/')
      .slice(0, -snapshotExtension.length)
  },
}
```
6. replace `test` part of `angular.json` with below content

```json
...
"test": {
  "builder": "@angular-builders/jest:run",
  "options": {
    "main": ["tests/setupJest.ts"],
    "tsConfig": "src/tsconfig.spec.json",
    "no-cache": true
  }
}
...
```

7. add ` "esModuleInterop": true` to `compilerOptions` in `tsconfig.json`
8. open `tsconfig.spec.json` and replace `jasmine` with `jest` in `types` field
9. that's it jest is now comlpetely integrated with latest angular
