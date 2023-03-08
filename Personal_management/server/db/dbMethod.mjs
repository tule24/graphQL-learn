import Folder from '../models/Folder.mjs'
import Note from '../models/Note.mjs'
import User from '../models/User.mjs'

export const mongoDataMethods = {
    getAllFolders: async condition => condition === null ? await Folder.find() : await Folder.find(condition),
    getFolderById: async folderId => await Folder.findById(folderId),
    getNotes: async condition => condition === null ? await Note.find() : await Note.find(condition),
    getUserOfForder: async (id) => {
        const { userId } = await Folder.findById(id).populate('userId')
        return userId
    },
    getFolderOfNote: async (id) => {
        const { folderId } = await Note.findById(id).populate('folderId')
        return folderId
    },
    addNewUser: async (args) => {
        const newUser = await User.create(args)
        return newUser
    },
    addNewFolder: async (args) => {
        const newFolder = await Folder.create(args)
        return newFolder
    },
    addNewNote: async (args) => {
        const newNote = await Note.create(args)
        return newNote
    }
}