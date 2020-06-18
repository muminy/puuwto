export const getPosts = () => {
    return [
        {
            id: 1,
            title: 'Buralar önceden dutluktu şimdi kurak.',
            content: require('../blog/yeni-md.md').default,
            slug: 'yeni-md',
            kategori: 'vue-js',
            info: 'Amet mollit qui consequat aliqua labore dolore sunt non consequat velit.Laborum dolore cupidatat tempor in veniam ipsum velit duis irure pariatur commodo nisi.Veniam adipisicing non nostrud reprehenderit cillum duis deserunt cillum deserunt.Ullamco anim qui ipsum deserunt aliquip nisi dolore ea excepteur fugiat proident.Sunt adipisicing nostrud non eiusmod duis labore fugiat cillum reprehenderit quis.Nostrud cillum deserunt culpa consectetur mollit eiusmod cillum elit duis qui enim nisi adipisicing magna.'
        },{
            id: 2,
            title: 'ReactJs nedir',
            content: require('../blog/react.md').default,
            slug: 'react',
            kategori: 'react-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 3,
            title: 'DenoJs nedir',
            content: require('../blog/deno-js.md').default,
            slug: 'deno-js',
            kategori: 'deno-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 4,
            title: 'DenoJs Kurulum',
            content: require('../blog/deno-kurulum.md').default,
            slug: 'deno-kurulum',
            kategori: 'deno-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 5,
            title: 'Electron js Kullanımı',
            content: require('../blog/electron-js.md').default,
            slug: 'electron-js',
            kategori: 'electron-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 6,
            title: 'Yeni 2',
            content: require('../blog/yeni-2.md').default,
            slug: 'yeni-2',
            kategori: 'electron-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 7,
            title: 'Merhaba tüm alem',
            content: require('../blog/merhaba.md').default,
            slug: 'merhaba',
            kategori: 'electron-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 8,
            title: 'Alem kral görsün',
            content: require('../blog/mrb-tr.md').default,
            slug: 'mrb-tr',
            kategori: 'deno-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },{
            id: 9,
            title: 'Şampiyon Trabzon!',
            content: require('../blog/ss.md').default,
            slug: 'ss',
            kategori: 'electron-js',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ].reverse()
}