import { useSelector } from "react-redux";
import AddPost from "./AddPost";

import React from 'react'
import PostAuthor from "./PostAuthor";
import Timeago from "./timeago";
import ReactionBtn from "./ReactionBtn";



const PostList = () => {
  
    const posts = useSelector((state) => state.posts)
    const orderPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    console.log(posts)

    const renderPost = orderPost.map(post => (

       <article key={post.id} className="box">

        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="aurhor">
          <PostAuthor userId={post.userId}/>
          <Timeago timestamp ={post.date}/>
          
        </p>
        <ReactionBtn post={post}/>
       </article>

    ))

  return (
    <div className="">
        <h2 className="top">Posts</h2>
      {renderPost}
      
    </div>
  )
}

export default PostList
