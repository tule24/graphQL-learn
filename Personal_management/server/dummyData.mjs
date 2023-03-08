export default {
    folders: [
        {
            id: 1,
            name: 'Home',
            createdAt: '12-12-2023',
            authorId: 1
        },
        {
            id: 2,
            name: 'School',
            createdAt: '12-11-2023',
            authorId: 2
        },
        {
            id: 3,
            name: 'Class',
            createdAt: '12-10-2023',
            authorId: 1
        }
    ],
    authors: [
        {
            id: 1,
            name: "Smith"
        },
        {
            id: 2,
            name: "Agarin"
        }
    ],
    notes: [
        {
            id: 1,
            content: '<p>Go to the market</p>',
            folderId: 1
        },
        {
            id: 2,
            content: '<p>Go to the school</p>',
            folderId: 2
        },
        {
            id: 3,
            content: '<p>Go to the hospital</p>',
            folderId: 3
        },
        {
            id: 4,
            content: '<p>Go to the hospital</p>',
            folderId: 1
        },
        {
            id: 5,
            content: '<p>Go to the hospital</p>',
            folderId: 3
        }
    ]
}