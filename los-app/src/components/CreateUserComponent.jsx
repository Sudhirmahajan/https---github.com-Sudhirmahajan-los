import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component{
    constructor(props){
        
        super(props)

        this.state = {
            id: this.props.match.params.id,
            loginId:'',
            firstName: '',
            lastName: '',
            emailId: '',
            mobileNo: '',
            activeStatus: '',
            isAdmin: '',
            autoLogin: '',
            branchCode: '',
            ssoLogin: ''
        }
        this.changeLoginIdHandler = this.changeLoginIdHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
        this.changeActiveStatus = this.changeActiveStatus.bind(this);
        this.changeIsAdmin = this.changeIsAdmin.bind(this);
        this.changeAutoLogin = this.changeAutoLogin.bind(this);
        this.changeBranchCode = this.changeBranchCode.bind(this);
        this.changeSSOLogin = this.changeSSOLogin.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({
                    loginId: user.loginId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailId: user.emailId,
                    mobileNo: user.mobileNo,
                    activeStatus: user.activeStatus,
                    isAdmin: user.isAdmin,
                    autoLogin: user.autoLogin,
                    branchCode: user.branchCode,
                    ssoLogin: user.ssoLogin
                });
            });
        }        
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
                    loginId: this.state.loginId,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailId: this.state.emailId,
                    mobileNo: this.state.mobileNo,
                    activeStatus: this.state.activeStatus,
                    isAdmin: this.state.isAdmin,
                    autoLogin: this.state.autoLogin,
                    branchCode: this.state.branchCode,
                    ssoLogin: this.state.ssoLogin
        };
        console.log('user => ' + JSON.stringify(user));

        if(this.state.id === '_add'){
            UserService.createUser(user).then(res => {
                this.props.history.push('/users');
        });
            
        }else{
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
        }
    }

    changeLoginIdHandler= (event) => {
        this.setState({loginId: event.target.value});
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeMobileNoHandler= (event) => {
        this.setState({mobileNo: event.target.value})
    }

    changeIsAdmin= (event) => {
        this.setState({isAdmin: event.target.value})
    }

    changeActiveStatus= (event) => {
        this.setState({activeStatus: event.target.value})
    }

    changeAutoLogin= (event) => {
        this.setState({autoLogin: event.target.value})
    }

    changeBranchCode= (event) => {
        this.setState({branchCode: event.target.value})
    }

    changeSSOLogin= (event) => {
        this.setState({ssoLogin: event.target.value})
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }

    render(){
        return(
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Login Id: </label>
                                            <input placeholder="Login Id" name="loginId" className="form-control" 
                                                value={this.state.loginId} onChange={this.changeLoginIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile Number: </label>
                                            <input placeholder="Mobile Number" name="mobileNo" className="form-control" 
                                                value={this.state.mobileNo} onChange={this.changeMobileNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Active Status: </label>
                                            <input placeholder="Active Status" name="activeStatus" className="form-control" 
                                                value={this.state.activeStatus} onChange={this.changeActiveStatus}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Is Admin: </label>
                                            <input placeholder="Is Admin" name="isAdmin" className="form-control" 
                                                value={this.state.isAdmin} onChange={this.changeIsAdmin}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Auto Login: </label>
                                            <input placeholder="Auto Login" name="activeStatus" className="form-control" 
                                                value={this.state.autoLogin} onChange={this.changeAutoLogin}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Branch Code: </label>
                                            <input placeholder="Branch Code" name="branchCode" className="form-control" 
                                                value={this.state.branchCode} onChange={this.changeBranchCode}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SSO Login: </label>
                                            <input placeholder="Branch Code" name="ssoLogin" className="form-control" 
                                                value={this.state.ssoLogin} onChange={this.changeSSOLogin}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }

}

export default CreateUserComponent