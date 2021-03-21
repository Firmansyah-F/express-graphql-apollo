const axios = require("axios");
const server = "http://localhost:3000";

const resolvers = {
  Query: {
    async writers(parent, _, { db }) {
      return await db.write.findAll();
    },

    async books(parent, _, { db }) {
      return await db.books.findAll();
    },

    async categories(parent, _, { db }) {
      return await db.category.findAll();
    },
  },

  Mutation: {

    //Writer
        async createWriter(parentValue, args) {
          return await axios.post(`${server}/writers`, {
              full_name: args.full_name,
              email: args.email,
              photo : args.photo,
            })
            .then((res) => res.data);
        },

        async findWriterbyId(parentValue, args) {
          return axios.get(`${server}/writers/${args.id}`).then((res) => res.data);
        },

        async updateWriter(parentValue, args) {
          return axios.put(`${server}/writers/${args.id}`, args)
            .then((res) => res.data);
        },
    
        async deleteWriter(parentValue, args) {
          return axios.delete(`${server}/writers/${args.id}`, args)
            .then((res) => res.data);
        },

    
    
    //Book
    createBook: {
      resolve(parentValue, args) {
        return axios.post(`${server}/books`, {
            writerId: args.writerId,
            categoryId: args.categoryId,
            title : args.title,
            description: args.description,
          })
          .then((res) => res.data);
      },
    },
    findBookbyId: {
      resolve(parentValue, args) {
        return axios.get(`${server}/books/${args.id}`).then((res) => res.data);
      },
    },
    updateBook: {
      resolve(parentValue, args) {
        return axios.put(`${server}/books/${args.id}`, args)
          .then((res) => res.data);
      },
    },
    deleteBook: {
      resolve(parentValue, args) {
        return axios.delete(`${server}/books/${args.id}`, args)
          .then((res) => res.data);
      },
    },
  },

};

module.exports = {
  resolvers,
};
