const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: require.resolve('graphql-tag/loader'),
};

const linariaLoader = {
  loader: require.resolve('@linaria/webpack-loader'),
  options: {
    sourceMap: process.env.NODE_ENV !== 'production',
  },
};

const loaders = {
  graphqlLoader: graphqlLoader,
  linariaLoader: linariaLoader,
};

module.exports = {
  loaders,
};
