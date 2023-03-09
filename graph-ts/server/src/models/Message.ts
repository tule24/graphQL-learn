import { builder } from '../builder'

builder.prismaObject("Message", {
    fields: (t) => ({
        id: t.exposeID("id"),
        body: t.exposeString("body"),
        createdAt: t.expose('createdAt', { type: 'Date' })
    })
})

/*
type Message {
    id: ID!
    body: String!,
    name: String!
}
 */