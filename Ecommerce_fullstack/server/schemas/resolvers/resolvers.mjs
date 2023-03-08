// A map of functions which return data for the schema.
import User from "../../models/User.mjs"
import { checkPassword, createJWT, createRefreshJWT, checkInput } from "../../helpers/authHelper.mjs"
import { GraphQLError } from 'graphql'
export const userResolvers = {
    Query: {
        users: async (parent, args) => await User.find(),
        user: async (parent, { id }) => await User.findById(id)
    },
    Mutation: {
        register: async (parent, { registerInput: { name, email, password, phone, address, role } }) => {
            const checkRegisterInput = checkInput({ name, email, password, phone, address, role })
            if (checkRegisterInput) {
                throw new GraphQLError(checkRegisterInput, {
                    extensions: { code: 'BAD_USER_INPUT' }
                })
            }
            const user = await User.findOne({ email })
            if (user) {
                throw new GraphQLError("Email already exist", {
                    extensions: { code: 'BAD_REQUEST' }
                })
            }

            const newUser = new User({ name, email, password, phone, address, role })
            await newUser.save()
            return newUser
        },
        login: async (parent, { loginInput: { email, password } }) => {
            const checkloginInput = checkInput({ email, password })
            if (checkloginInput) {
                throw new GraphQLError(checkloginInput, {
                    extensions: { code: 'BAD_USER_INPUT' }
                })
            }
            const user = await User.findOne({ email })
            if (!user) {
                throw new GraphQLError("User not found", {
                    extensions: { code: 'NOT_FOUND' }
                })
            }

            const checkPass = await checkPassword(password, user.password)
            if (!checkPass) {
                throw new GraphQLError("Pasword not match. Please re-check password", {
                    extensions: { code: 'UNAUTHORIZED' }
                })
            }

            user.refreshToken = createRefreshJWT(user._id)
            await user.save()
            return {
                token: createJWT(user._id),
                user
            }
        }
    }
}