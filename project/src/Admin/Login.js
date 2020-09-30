import React, {Component} from 'react'
import {auth} from './../fbaseConfig'
import { Redirect } from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props)

        this.state ={
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        this.email = null
        this.senha =null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario(){
        this.setState({estaLogando: true, erro: false})
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user =>{
                console.log('Usuário Logado:', user)
                this.setState({estaAutenticado: true})
            })
            .catch(err =>{
                console.log('Erro', err)
                this.setState({erro: true, estaAutenticado: false, estaLogando: false})
            })
    }

    render(){
        if(this.state.estaAutenticado){
            return <Redirect to='/admin' />
        }

        return(
            <div className='box-painel'>
                <h1>Login</h1> <br />
                
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>E-mail</label>
                        <input type='email' name='email' ref={ref => this.email = ref} className='form-control' id='exampleInputEmail1' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Senha</label>
                        <input type='password' name='senha' ref= {ref => this.senha = ref} className='form-control' id='exampleInputPassword1' />
                        {this.state.erro && <small id='emailHelp' className='form-text text-muted'>Verifique seu e-mail e senha</small>}
                    </div>                    
                    
                    <button type='button' disabled={this.state.estaLogando} className='btn btn-default' onClick={this.autenticaUsuario}>Acessar</button>
                
            </div>
            
        )
    }
}

export default Login