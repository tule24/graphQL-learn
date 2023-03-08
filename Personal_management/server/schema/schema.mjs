// The GraphQL schema
export const typeDefs = `#graphql
  type Folder {
    id: ID!,
    name: String!,
    createdAt: String!,
    user: User!,
    notes: [Note]
  }

  type User {
    id: ID!,
    uid: String!,
    name: String!
  }

  type Note {
    id: ID!,
    content: String,
    folder: Folder
  }

  type Query {
    folders: [Folder],
    folder (folderId: ID!): Folder,
    user (id: ID!): User,
    note (noteId: ID!): Note
  }

  type Mutation {
    addUser (name: String!, uid: String!): User
    addFolder (name: String!, userId: ID!): Folder,
    addNote (content: String, folderId: ID!): Note
  }
`;

