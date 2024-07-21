import { createContext, useState } from "react";


export const PostContext = createContext();

const PostProvider = ({ children }) => {
  // Posts global state
  const [posts, setPosts] = useState([]);


  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
