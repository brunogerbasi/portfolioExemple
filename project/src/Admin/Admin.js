import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {auth} from './../fbaseConfig';
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props){
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged( user =>{
            this.setState({
                estaLogando: false,
                estaAutenticado: !! user,
                user
            })
        })
    }

    render(){
        if(this.state.estaLogando){
            return <p>aguarde... </p>
        }
        if(!this.state.estaAutenticado){
            return <Redirect to='/Login' />
        }
        return(
            <div>                              
                {/* <Route path={'${this.props.match.url}/portfolio'} component={AdminPortfolio} />    */}
                <AdminPortfolio/>    
            </div>            
        )
    }
}
export default Admin