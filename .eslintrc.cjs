module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "ignorePatterns": ["node_modules", "dist", "build"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "import"],
  "rules": {
    "no-unused-vars": "off",
    "indent": ["error", 2],
    "prettier/prettier": "error",
    "linebreak-style": [0, "unix"],
    "quotes": ["error", "single"],
    //  "semi": ["error", "never"],
    "semi": [2, "always"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { "caseSensitive": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    // "react/jsx-filename-extension-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    // "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/order": [
      2,
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}
