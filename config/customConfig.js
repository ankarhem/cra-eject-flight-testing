const paths = require('./paths');

const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  include: [paths.appSrc, paths.translationsSrc, paths.libSrc],
  exclude: /node_modules/,
  loader: require.resolve('graphql-tag/loader'),
};

const linariaLoader = (isEnvProduction) => ({
  loader: require.resolve('@linaria/webpack-loader'),
  options: {
    sourceMap: isEnvProduction,
  },
});

const loaders = {
  graphqlLoader: graphqlLoader,
  linariaLoader: linariaLoader,
};

module.exports = {
  loaders,
};
