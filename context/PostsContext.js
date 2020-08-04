import { createContext } from "react";

const PostsContext = createContext();
export default PostsContext;
export const PostsProvider = PostsContext.Provider;
