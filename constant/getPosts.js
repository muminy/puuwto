export const getPosts = () => {
    return [
        {
            id: 1,
            title: 'Hello World!',
            content: require('../blog/hello-world.md').default,
            slug: 'hello-world',
            info: 'Amet mollit qui consequat aliqua labore dolore sunt non consequat velit.Laborum dolore cupidatat tempor in veniam ipsum velit duis irure pariatur commodo nisi.Veniam adipisicing non nostrud reprehenderit cillum duis deserunt cillum deserunt.Ullamco anim qui ipsum deserunt aliquip nisi dolore ea excepteur fugiat proident.Sunt adipisicing nostrud non eiusmod duis labore fugiat cillum reprehenderit quis.Nostrud cillum deserunt culpa consectetur mollit eiusmod cillum elit duis qui enim nisi adipisicing magna.'
        },{
            id: 2,
            title: 'Building a React Native App With Complex Navigation Using React Navigation',
            content: require('../blog/new-data.md').default,
            slug: 'new-data',
            info: 'Culpa fugiat commodo fugiat in deserunt et occaecat commodo.Fugiat est laborum esse consequat enim tempor commodo mollit culpa Lorem minim magna eiusmod.Ad pariatur magna est enim.Quis quis sunt esse ea nulla ut duis occaecat do sunt eu quis.Do minim cillum consectetur excepteur velit irure Lorem ipsum deserunt laborum ipsum.'
        }
    ].reverse()
}