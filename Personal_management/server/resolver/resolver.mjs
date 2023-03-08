// A map of functions which return data for the schema.
export const resolvers = {
    Query: {
        folders: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllFolders(),
        folder: async (parent, { folderId }, { mongoDataMethods }) => await mongoDataMethods.getFolderById(folderId)
    },
    Folder: {
        user: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getUserOfForder(id),
        notes: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getNotes({ folderId: id })
    },
    Note: {
        folder: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getFolderOfNote(id)
    },
    Mutation: {
        addUser: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.addNewUser(args),
        addFolder: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.addNewFolder(args),
        addNote: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.addNewNote(args)
    }
};
