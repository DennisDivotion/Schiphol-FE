module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['import', 'jest', 'prettier'],
	env: {
		browser: true,
		es6: true,
	},
	rules: {
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'never', prev: ['case', 'default'], next: '*' },
			{ blankLine: 'always', prev: ['multiline-const'], next: '*' },
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				singleQuote: true,
				semi: true,
				trailingComma: 'all',
			},
		],
	},
	settings: {
		'import/resolver': 'webpack',
	},
};
