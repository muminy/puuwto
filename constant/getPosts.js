export const getPosts = () => {
    return [
        {
            id: 1,
            title: 'Buralar önceden dutluktu şimdi kurak.',
            content: require('../blog/yeni-md.md').default,
            slug: 'yeni-md',
            info: 'Amet mollit qui consequat aliqua labore dolore sunt non consequat velit.Laborum dolore cupidatat tempor in veniam ipsum velit duis irure pariatur commodo nisi.Veniam adipisicing non nostrud reprehenderit cillum duis deserunt cillum deserunt.Ullamco anim qui ipsum deserunt aliquip nisi dolore ea excepteur fugiat proident.Sunt adipisicing nostrud non eiusmod duis labore fugiat cillum reprehenderit quis.Nostrud cillum deserunt culpa consectetur mollit eiusmod cillum elit duis qui enim nisi adipisicing magna.'
        }
    ].reverse()
}