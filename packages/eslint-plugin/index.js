/*
 * Copyright 2020 FOMOLOL LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const { hasConfig } = require('@fomolol/web-scripts-utils');

const hasReact = hasConfig([
  { type: 'dependency', dependency: 'react' },
  { type: 'dependency', dependency: 'react', dependencyType: 'peer' },
  { type: 'file', pattern: 'jsconfig.json' },
]);
const hasTypescript = hasConfig([
  { type: 'dependency', dependency: 'typescript' },
  { type: 'dependency', dependency: 'typescript', dependencyType: 'dev' },
  { type: 'file', pattern: 'tsconfig.json' },
]);

// We explicitly set the Jest version because auto-detection doesn't work in the monorepo.
// Ref: https://github.com/jest-community/eslint-plugin-jest/pull/564/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5
const settings = {
  jest: {
    version: 24,
  },
};

if (hasReact) {
  settings.react = {
    version: 'detect',
  };
}
module.exports = {
    "extends": [
        '@fomolol/eslint-config-base',
    ],
    "rules": {
        "@next/next/no-img-element": "off",
        "import/no-anonymous-default-export": "off"
    }
}