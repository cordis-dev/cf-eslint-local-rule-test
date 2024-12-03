// my-local-rule.js
module.exports = {
    "my-local-rule": {
        meta: {
            docs: {
                description: "Disallow the use of 'var' keyword",
                category: "Best Practices",
                recommended: true
            },
            schema: []
        },
        create(context) {
            return {
                VariableDeclaration(node) {
                    if (node.kind === 'var') {
                        context.report({
                            node,
                            message: "Use 'let' or 'const' instead of 'var'."
                        });
                    }
                }
            };
        }
    }
};
