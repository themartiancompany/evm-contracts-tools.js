// SPDX-License-Identifier: GPL-3.0-or-later

/**    ------------------------------------------------------------------
 *     Copyright ©
 *       Pellegrino Prevete
 *         2024, 2025, 2026
 * 
 *     All rights reserved
 *     ------------------------------------------------------------------
 * 
 *     This program is free software: you can redistribute it and/or
 *     modify it under the terms of the GNU General Public License as
 *     published by the Free Software Foundation, either version 3 of
 *     the License, or (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.
 *     If not, see <https://www.gnu.org/licenses/>.
 */

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const
  _project =
    "evm-contracts-tools";

const
  _ignores = [
    "build/**",
    "dist/**",
    "node_modules/**",
    "eslint.config.js",
    "evm-contract-call.js",
    "evm-contract-call.js",
    "evm-contract-deployment-address.js",
    "evm-contract-deployment-abi.js",
    "evm-contract-deployment-bytecode.js",
    "evm-contract-deployment-compiler-output.js",
    "evm-contract-deployment-networks.js",
    "evm-contract-deployment-versions.js",
    "evm-contract-deployments-dir.js",
    "evm-contracts-tools.js",
    "fs-worker.js",
    "libevm-contract-call.js",
    "libevm-contract-deployment-address.js",
    "libevm-contract-deployment-abi.js",
    "libevm-contract-deployment-bytecode.js",
    "libevm-contract-deployment-compiler-output.js",
    "libevm-contract-deployment-networks.js",
    "libevm-contract-deployment-versions.js",
    "libevm-contract-deployments-dir.js",
    "man/**"
  ];

export default defineConfig([
 {
   ignores:
     _ignores,
   rules:
     { semi:
         "error",
       "prefer-const":
         "error" },
   files: [
    "**/*.{js,mjs,cjs}",
    `**/evm-contract-call`,
    `**/lib/*`,
    `**/libevm-contract-call`,
    `**/lib${_project}`
   ],
   plugins:
     { js },
   extends:
     [ "js/recommended" ],
   languageOptions:
     { globals:
         {  ...globals.browser,
            ...globals.node } } },
 { 
   ignores:
     _ignores,
   rules:
     { semi:
         "error",
       "prefer-const":
         "error" },
   files: [
    "**/*.js",
    `**/evm-contract-call`,
    `**/lib/*`,
    `**/libevm-contract-call`,
    `**/lib${_project}`
   ],
   languageOptions:
     { sourceType:
         "commonjs" } },
]);
