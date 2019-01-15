import React from 'react'

const User = (props) => {

    return (
        <div>
            <p><strong>Logado como:</strong> {props.email} (<a href='#' onClick={props.logout}>Logout</a>)
            </p>
        </div>
    )
}

export default User