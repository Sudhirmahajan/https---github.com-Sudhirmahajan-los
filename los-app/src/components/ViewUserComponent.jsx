
import React, { Component } from 'react'
import UserService  from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Login Id: </label>
                            <div> { this.state.user.loginId }</div>
                        </div>
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.user.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile No: </label>
                            <div> { this.state.user.mobileNo }</div>
                        </div>
                        <div className = "row">
                            <label> Active Status: </label>
                            <div> { this.state.user.activeStatus }</div>
                        </div>
                        <div className = "row">
                            <label> Is Admin: </label>
                            <div> { this.state.user.isAdmin }</div>
                        </div>
                        <div className = "row">
                            <label> Auto Login: </label>
                            <div> { this.state.user.autoLogin }</div>
                        </div>
                        <div className = "row">
                            <label> Branch Code: </label>
                            <div> { this.state.user.branchCode }</div>
                        </div>
                        <div className = "row">
                            <label> SSO Login: </label>
                            <div> { this.state.user.ssoLoginn }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent