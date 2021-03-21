const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Query {
    writers: [writers]
    books: [books]
    categories: [categories]
  }
  type writers {
    id: Int
    fullname: String
    email: String
    photo: String
  }
  type books {
    id: Int
    writeId: Int
    categoryId: Int
    title: String
    description: String
  }
  type categories {
    id: Int
    category: String
  }

`;
module.exports = {
  typeDefs,
};
