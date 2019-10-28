import React from 'react';
import './Login.css'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPass: ""
        }

    }

    mySignUp(){
        if(this.state.userName && this.state.userPass){
            alert("Doooone!!!")
        } else alert("Empty userPass or userName")
        this.setState({userPass: "", userName: ""})
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <a href = "https://www.facebook.com/"><span><i className="fab fa-facebook-square"/> </span></a>
                                <span><i className="fab fa-google-plus-square"/></span>
                                <span><i className="fab fa-twitter-square"/></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"/>
                                        </span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="username"
                                           value={this.state.userName}
                                           onChange={(e)=>{this.setState({userName: e.target.value})}}
                                    />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"/></span>
                                    </div>
                                    <input type="password"
                                           className="form-control"
                                           placeholder="password"
                                           value={this.state.userPass}
                                           onChange={(e)=>{this.setState({userPass: e.target.value})}}
                                    />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-between align-items-center ">
                                Don't have an account?
                                <button className="btn my-2 my-sm-0 signInBtn"
                                        onClick={()=>this.mySignUp()}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default Login;