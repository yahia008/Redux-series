import React from 'react'
import { useState } from 'react'
import { postAdded } from '../services/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllusers } from './users/userSslice'


const AddPost = () => {

    const [title, setTile] = useState('')
    const [content, setContent] = useState('') 
    const [userId, setUserId] = useState('') 


    const users = useSelector(selectAllusers)

    const onTitleChange = (e) => setTile(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)


    const dispatch = useDispatch()

    const onPost =(e)=> {
        e.preventDefault()

      if(title && content) {
        dispatch(
            postAdded (title, content, userId ))

        setTile('')
        setContent('')
      }


    }

    const userOptions = users.map(user => (
      <option key={user.id} value={user.id} >
        {user.name}
      </option>
    ))

    const cansave = Boolean(title) && Boolean(content) && Boolean(userId)
    
  return (
   
    <div className='form'>
      <form >
  
  <div>
  <label htmlFor='your name'>title</label>
  </div>
  <div>

   <input type='text' placeholder='title' value={title} onChange={onTitleChange}/>

  </div>

<div>
  <label>Aurhor</label>
  <select value={userId} onChange={onAuthorChange}>
  {userOptions}
   
  </select>
</div>
  <div>
  <label htmlFor='textraea'>content</label>
  </div>
  <div>

   <textarea type='textarea' placeholder='Enter Contents' value={content} onChange={onContentChange} />

  </div>
<div>

<button onClick={onPost} disabled={!cansave}>Add post</button>
</div>

</form>

    </div>
  )
}

export default AddPost
