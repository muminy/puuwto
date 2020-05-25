export const getPosts = () => {
    return [
        {
            id: 1,
            title: 'Hello World!',
            content: require('../blog/hello-world.md').default
        }
    ]
}