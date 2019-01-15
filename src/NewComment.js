import React, { Component } from 'react'

class NewComment extends Component{

    state = {
        newComment: ''
      }

    sendNewComment = () =>{
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }

  handleChange = event =>{
    this.setState({
        newComment: event.target.value
    })
  }

    render(){
        return (
            <div className='mt-3 mb-3'>
                <form className='form'>
                <textarea value={this.state.newComment} 
                          onChange={this.handleChange}
                          className='form-control mb-1'
                ></textarea>
                </form>
                
                <button className='btn btn-primary' onClick={this.sendNewComment}>Enviar Comnetario</button>
            </div>
        )
    }
}

export default NewComment