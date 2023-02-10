const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: require.resolve('graphql-tag/loader'),
};

const loaders = {
  graphqlLoader: graphqlLoader,
};

module.exports = {
  loaders,
};
