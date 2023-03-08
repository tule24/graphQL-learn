// The GrahpQL Schema
export const typeDefs = `#graphql
    # TYPE QUERY
    type User {
        id: ID
        name: String
        email: String
        phone: String
        address: String
        password: String
        role: String
        refreshToken: String
        passwordChangedAt: String
        passwordResetToken: String
        passwordResetExpires: String
        createdAt: String
        updatedAt: String
        # orders: [Order]
    }

    type Auth {
        token: String
        user: User
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        photo: String
        stock: Int
        category: Category
        vendor: User 
    }

    type Category {
        id: ID
        name: String
        description: String
        products: [Product]
    }

    # type ProductPerOrder {
    #     product: Product
    #     quantity: Int
    # }

    # type Order {
    #     id: ID
    #     products: [ProductPerOrder]
    #     total: Float
    #     status: String
    #     buyer: User
    #     createdAt: String
    #     updatedAt: String
    # }

    type Query {
        products (filter: String, sort: String, page: String, limit: String): [Product]
        product (id: ID!): Product
        users: [User]
        user (id: ID!): User
        categories: [Category]
        category (id: ID!): Category
        # orders (productId: ID, userId: ID): [Order]
        # order (id: ID!): Order
    }

    # TYPE MUTAION
    input RegisterInput {
        name: String!
        email: String!
        password: String!
        phone: String!
        address: String!
        role: String
    }

    input LoginInput {
        email: String!
        password: String!
    }

    # input OrderInput {
    #     products: ArrayProducts!
    #     total: Float!
    #     buyerId: ID!
    # }

    type Mutation {
        register (registerInput: RegisterInput!): User
        login (loginInput: LoginInput!): Auth
        addProduct (name: String!, description: String!, price: Float!, creatorId: ID!): Product
        updateProduct (name: String, description: String, price: Float, categoryId: ID): Product
        deleteProduct (productId: ID!): Product
        addCategory (name: String!, description: String!, creatorId: ID!): Category
        updateCategory (name: String, description: String): Category
        deleteCategory (categoryId: ID!): Category
        # addOrder (orderInput: OrderInput!): Order
        # updateOrder (orderId: ID!, status: String!): Order
    }
`