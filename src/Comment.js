import React from 'react'

const Comment = ({c, active}) => {

    let comentario = 'vazio'
    let email = 'vazio'
    let carouselItem = "carousel-item "+active

    if (c){
        if(c.comment){
            comentario = c.comment
        }
        if(c.email){
            email=c.email
        }
    }

        return(
            
            <div>
                <div className="card mt-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{email}...:</h6>
                        <p className="card-text">{comentario}</p>
                    </div>
                </div>
            </div>
        )
}

export default Comment