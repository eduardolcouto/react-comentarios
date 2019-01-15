import React, { Component } from 'react'

class SignUp extends Component{

   state = {
       email: '',
       password: ''
   }

   handleChange = field => event =>{
       this.setState({
           [field]: event.target.value
       })
   }

   createAccount = () => {
       this.props.createAccount(this.state.email, this.state.password)
   }
   
   render() { 
    const message_error = {
        'auth/email-already-in-use': 'E-mail já cadastrado',
        'auth/weak-password': 'Senha Fraca',
        'auth/invalid-email': 'Formato inválido de E-mail',
        'app/parametros-faltantes': 'E-mail ou Password não podem ser vazios.'
       }

       let error = message_error[this.props.SignUpError] ? message_error[this.props.SignUpError]: this.props.SignUpError

       return (
            <div>
                { this.props.isSignUpError &&
                    <code>{error}</code>
                }
                <h4 className='display-4'>Criar Usuário</h4>
                <div className='row mb-2'>
                    <div className='col'>
                        <form className="form-inline">
                            <input type='text' 
                                onChange={this.handleChange('email')} 
                                placeholder='E-mail' 
                                value={this.state.email}
                                className='form-control mr-1' 
                                />
                            <input className='form-control mr-1' type='password' onChange={this.handleChange('password')} placeholder='Password' />
                            <button className='btn btn-primary' type='button' onClick={this.createAccount}>Criar Conta</button>
                        </form>
                    </div>
                </div>
                <div className='row mb-3'>
                <div className='col-12'>
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.props.changeScreen('login')}>
                        Já possuo conta! Logar
                    </button>
                    </div>
                </div>
                
               
                
                                
                

            </div>
            
        )
    }
}

export default SignUp