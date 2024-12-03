// eslint.config.js
import { ESLint } from 'eslint';
import localRules from './my-local-rule.js';

export default [
    {
        files: ['**/*.js'], // Apply these rules to JavaScript files
        plugins: {
            local: localRules // 'local' is the namespace for your custom rule
        },
        rules: {
            "local/my-local-rule": "error"
        }
    }
];
