module.exports = {
  plugins: ["@babel/plugin-proposal-optional-chaining"],
  test: /\.js$/,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', '> .5%', 'not dead', 'not ie 11'],
        },
      },
    ],
  ],
};
