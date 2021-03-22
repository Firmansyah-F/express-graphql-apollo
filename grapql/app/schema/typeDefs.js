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

  type Mutation {

    createBook(
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): books
    updateBook(
      id: Int
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): books

    deleteBook(id: Int): books

    # Write

    createWriter(
      fullname: String, 
      email: String, 
      photo: String): writers

    updateWriter(
      id: Int
      fullname: String
      email: String
      photo: String
    ): writers
    deleteWriter(id: Int): writers

    # Category

    createCategory(
      category: String): categories
    updateCategory(
      id: Int, category: String): categories
    deleteCategory(
      id: Int): categories
  }

`;
module.exports = {
  typeDefs,
};
