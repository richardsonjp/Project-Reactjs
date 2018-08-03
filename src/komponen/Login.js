import React, { Component } from 'react';
import { Link, Route , Redirect} from 'react-router-dom';
import '../../src/App.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {parsing} from '../action'
import {statlogin} from '../action'

import Headshake from 'react-reveal/HeadShake'

class Login extends Component{
    
    parseState = (x) =>{
        this.props.parsing(x)
    }

    statState = (x) =>{
        this.props.statlogin(x)
    }

    state = [
        {username:[],
        password:[],
        redirect_home: false,       
        redirect_login: false,
        redirect_admin: false,
        noticewrong: ""}
    ]
    submit(x){

        // this.setState({username:x.users.value})
        // this.setState({password:x.pass.value})

        // console.log(x.users.value)
        // console.log(x.pass.value);
        
        axios.post('http://localhost:3210/loginpage',
        {
            username: x.users.value,
            password: x.pass.value
        })

        .then((x)=>{
            if (x.data.loginstatus === true){
                // this.setState({username: y.data.username, password:y.data.password, statuslogin:y.data.loginstatus});
                console.log({nama_panjang:x.data.result[0].nama_panjang})
                
                var statlogin = x.data.loginstatus
                {this.statState(statlogin)}

                // console.log({statuslogin:y.data.loginstatus})
                this.setState({redirect_home: true})

                var nama_user = x.data.result[0].nama_panjang
                {this.parseState(nama_user)}
                // console.log(this.state.username)
            }
            else{
                this.setState({redirect_login: true})
                this.setState({noticewrong:<Headshake><p className="noticement"><b>Username or Password not registered!</b></p></Headshake>})
                
            }
        })
    }
    render(){
        const {redirect_home} = this.state
        const {redirect_login} = this.state
        const {statuslogin} = this.state
        const {redirect_admin} = this.state


        if(redirect_home){
            this.setState({redirect_home: false});
            return(
                <Redirect to='/'/>
            )
        }
        if(redirect_login){
            this.setState({redirect_login: false});
            return(
                <Redirect to='/Loginpage'/>
            )
        }
        if(redirect_admin){
            this.setState({redirect_admin: false})
        }
        
        return (

            <div className="loginregister">
                
                <h2 id="login">Log in to Kikipipi</h2>
                <input className="username" type="text" placeholder="input here..." name="uname" ref="users" required/>
                <span>    </span>
                <label for="uname"><b>Username</b></label>
                

                <br/>

                <input className="password" type="password" placeholder="input here..." name="psw" ref="pass" required/>
                <span>     </span>
                <label for="psw"><b>Password</b></label>

                <br/>

                <button className="submitlogin" type="submit" onClick={()=>{this.submit(this.refs)}}>Login</button>

                <p>{this.state.noticewrong}</p>

                <br/>
                <br/>
                <br/>

                <Link to = "/Registerpage" target="_blank"><h6 id="registerh6">DON'T HAVE AN ACCOUNT ? CLICK HERE</h6></Link>
                

 
            </div>
        )
    }
}


export default connect (null,{parsing,statlogin}) (Login);

// export default Login