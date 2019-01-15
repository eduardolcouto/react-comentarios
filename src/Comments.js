import React from 'react'
import Comment from './Comment';

const Comments = ({comments}) => {
        const keys = Object.keys(comments)

        return (
            <div>
                        { 
                            keys.map( key =>{
                            return (  
                                 <Comment key={key} c = {comments[key]} />
                            )                            
                        })} 
            </div>
        )

}

export default Comments