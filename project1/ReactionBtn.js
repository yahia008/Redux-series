import { useDispatch,  } from "react-redux";
import { reactionAdded } from "../services/postSlice";


const reactionEmojis = {

    thumbsUp:'👍',
    wow:'😯',
    heart:'❤',
    rocket:'🚀',
    coffee:'☕',    

}



const ReactionBtn = ({post}) => {
    const dispatch = useDispatch()

    const reactionB =Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <button
            key={name}
            type="button"
            className="emojis"
            onClick={()=>
            dispatch(reactionAdded({postId:post.id,
            reactions:name
            }))}>

                {emoji} {post.reactions[name]}
            </button>
        )
    })
    
  return (
    <div>
    {reactionB}  
    </div>
  )
}

export default ReactionBtn
