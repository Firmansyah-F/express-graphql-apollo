const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Query {
    writers: [writer]
    books: [book]
    categories: [category]
  }
  type writer {
    id: Int
    fullname: String
    email: String
    photo: String
  }
  type book {
    id: Int
    writeId: Int
    categoryId: Int
    title: String
    description: String
  }
  type category {
    id: Int
    category: String
  }

  type Mutation {

    createBook(
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): book
    updateBook(
      id: Int
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): book

    deleteBook(id: Int): book

    # Write

    createWriter(
      fullname: String, 
      email: String, 
      photo: String): writer

    updateWriter(
      id: Int
      fullname: String
      email: String
      photo: String
    ): writer
    deleteWriter(id: Int): writer

    # Category

    createCategory(
      category: String): category
    updateCategory(
      id: Int, category: String): category
    deleteCategory(
      id: Int): category
  }

`;
module.exports = {
  typeDefs,
};
