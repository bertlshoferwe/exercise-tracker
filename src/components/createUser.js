import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props)
            this.state={
                username: '',
            }

            this.onChangeUsername = this.onChangeUsername.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    }
   
    onChangeUsername(e) {

        this.setState({
            username:e.target.value
        })

    }
   
    onSubmit(e) {
        e.preventDefault();

        const user ={
            username: this.state.username,
        }

        axios.post('http://localhost:4000/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username:''
        })

        console.log(user)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Username: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            className="btn btn-primary"
                            value='Create Exercise Log'
                            onChange={this.onChangeDescription}
                            />
                    </div>
                </form>

            </div>
        )
    }
}
