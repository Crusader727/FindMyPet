const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './tsconfig.json'
        }
      },
      { loader: require.resolve('react-docgen-typescript-loader') }
    ]
  }, {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      {
        loader: "typings-for-css-modules-loader", //"css-loader",
        options: {
          modules: true,
          namedExport: true,
          sass: true,
          camelCase: true,
          sourceMap: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')]
        }
      },
      'sass-loader'
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
