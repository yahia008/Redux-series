import { useSelector } from "react-redux";
import { selectAllusers } from "./users/userSslice";


import React from 'react'

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllusers)

    const author = users.find(user => user.id === userId)

  return <span>by {author? author.name: 'unknown author'}</span>
    
}

export default PostAuthor



