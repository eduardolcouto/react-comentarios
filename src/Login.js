import React, { Component } from 'react'

class Login extends Component{

   state = {
       email: 'eduardocoutodev@gmail.com',
       password: ''
   }

   handleChange = field => event =>{
       this.setState({
           [field]: event.target.value
       })
   }

   login = () => {
       this.props.login(this.state.email, this.state.password)
   }
   
   render() { 
    const message_error = {
        'auth/wrong-password': 'Senha inválida',
        'auth/user-not-found': 'Usuário não encontrado',
        'auth/invalid-email': 'Formato inválido de E-mail',
        'app/parametros-faltantes': 'E-mail ou Password não podem ser vazios.'
       }

       return (
            <div>
            { this.props.isAuthError &&
                <div className="alert alert-warning" role="alert" >
                    {message_error[this.props.authError]}
                </div>
            }
                <div className='row'>
                    <div className='col-sm'>
                        <h3 className="display-4">Entre para Comentar</h3>
                    </div>
                </div>
                <hr />
               <div className='row mb-3'>
                <div className='col-sm'>
                    <h5>Login por E-mail e Senha</h5>
                    <form className='form-inline'>
                    
                    <input type='text' 
                        onChange={this.handleChange('email')} 
                        placeholder='E-mail' 
                        value={this.state.email}
                        className='form-control mr-1 mb-1'
                        />
                    <input className='form-control mr-1 mb-1' type='password' onChange={this.handleChange('password')} placeholder='Password' />
                    <button className='btn btn-primary mr-1' type='button' onClick={this.login}>Logar</button>
                    <button className='btn btn-light' type='button' onClick={() => this.props.changeScreen('signup')}>Criar conta</button>
                </form>
                </div>
                <div className='col-sm'>
                    <h5>Login com Facebook</h5>
                    <button type='button' onClick={this.props.loginWithFacebook}>
                        Logar
                    </button>

                </div>      
                </div>      
            </div>
            
        )
    }
}

export default Login