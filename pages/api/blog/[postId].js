import { getPosts } from "../../../constant/getPosts"

const posts = getPosts();
export default async function(request, response){
    response.json({content: await posts.find(post => post.slug === request.query.postId)})
}