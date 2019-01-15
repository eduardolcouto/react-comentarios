import React, { Component } from 'react'
import 'bootstrap-css-only'

import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import User from './User'
import SignUp from './SignUp'

class App extends Component {
   
   state = {
     comments: {},
     isLoading: false,
     isAuth: false,
     isAuthError: false,
     authError: '',
     isSignUpError: false,
     signUpError: '',
     user: {},
     displayScreen: 'login' //signup
  }  

  sendComment = newComment =>{

    const { database } = this.props

    const id = database.ref().child('comments').push().key
    const comments = {}

    comments['comments/'+id] = { 
      comment: newComment,
      email: this.state.user.email,
      user_id: this.state.user.uid
    }

    database.ref().update(comments)

  }

  login = async (email, password) =>{
    const { auth } = this.props
    this.setState({
      isAuthError: false,
      authError: ''
    })
    try {
      if(email && password){
        await auth.signInWithEmailAndPassword(email,password)
      }else{
        this.setState({
          isAuthError: true,
          authError: 'app/parametros-faltantes'
        })
      }
      
    } catch (error) {
      this.setState({
        isAuthError: true,
        authError: error.code
      })
    } 
  }
  
  loginWithFacebook = () =>{
    const { facebookAuth, auth } = this.props
    facebookAuth.addScope('email')
    //facebookAuth.addScope('user_friends')
    this.setState({
      isAuthError: false,
      authError: ''
    })
    try {
      auth.signInWithPopup(facebookAuth)
    } catch (error) {
      this.setState({
        isAuthError: true,
        authError: error.message
      })
    }
  }

  logout = () =>{
    const { auth } = this.props

    auth.signOut()
        .then(() => {
          this.setState({
            isAuth: false,
            user: {}
          })
        })
        .catch((e) => {
          alert(e)
        })
  }

  componentDidMount(){
    const { database, auth } = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val()
      })
      this.setState({ isLoading: false })
    })

    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({
          isAuth: true,
          user
        })
        console.log(this.state.user)
      }
    })
  }

  changeScreen = (screen) =>{
    this.setState({
      displayScreen: screen
    })
  }

  createAccount = async (email, password) =>{
    const { auth } = this.props
    this.setState({
      isSignUpError: false,
      SignUpError: ''
    })
    try {
      if(email && password){
        await auth.createUserWithEmailAndPassword(email,password)
      }else{
        this.setState({
          isSignUpError: true,
          SignUpError: 'app/parametros-faltantes'
        })
      }
      
    } catch (error) {
      this.setState({
        isSignUpError: true,
        SignUpError: error.code
      })
    } 
  }

  render() {
 
    return (
      <div className="container mt-3">
   
       { !this.state.isAuth &&
          this.state.displayScreen === 'login' &&
          <Login login={this.login}
                 loginWithFacebook={this.loginWithFacebook}
                 isAuthError={this.state.isAuthError} 
                 authError={this.state.authError}
                 changeScreen={this.changeScreen}
          />
       }

       { !this.state.isAuth &&
          this.state.displayScreen === 'signup' &&
          <SignUp changeScreen={this.changeScreen}
                  isSignUpError={this.state.isSignUpError} 
                  SignUpError={this.state.SignUpError}
                  createAccount={this.createAccount}
          />
       }

       { this.state.isAuth &&
          <User email={this.state.user.email} 
                logout={this.logout} />
       }
       {  this.state.isAuth && 
            <NewComment sendComment={this.sendComment} />          
       }
       
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando.....</p>}
        
      </div>
    );
  }
}

export default App
