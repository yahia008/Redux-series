import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
    {id:'1', 
    title:'Redux toolkit',
     content:'i love working with redux toolkit',
     date:sub(new Date(), {minutes:10}).toISOString(),
     reactions: {
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0,
     }
    },

    {id:'2', 
    title:'Redux toolkit',
     content:'i love working with redux toolkit',
     date:sub(new Date(), {minutes:5}).toISOString(),
     reactions: {
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0,
     }
    },

]


const Postslice = createSlice({
    name:'posts',
    initialState,
    reducers: {

         postAdded:
         {
         reducer(state, action){
            state.push(action.payload)
         },
         prepare(title, content, userId) {

            return{
                payload:{

                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0,
                     }

                }
            }
         }
        },

        reactionAdded:(state, action)=> {
            const {PostId, reaction} = action.payload
            const existingPost = state.find(post => post.id === PostId)
            if(existingPost) {
                existingPost.reactions[reaction] += 1
            }
        }



    }
    
})


const postsReducer = Postslice.reducer
export const {postAdded, reactionAdded} = Postslice.actions
export default postsReducer