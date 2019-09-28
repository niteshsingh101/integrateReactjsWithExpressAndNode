import React from 'react';
class Users extends React.Component{

    constructor(){
        super();
        this.state = {
            users:[]
        };
    }
    componentDidMount(){
        fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}, () => console.log('Users list =>', users)))
    }
    render(){
        return(
            <div>
                <h3>Users</h3>
                <ul style={{listStyle:'none'}}>
                    {this.state.users.map(user => 
                        <li key={user.id}>{user.name}</li>    
                        )}
                </ul>
            </div>
        );
    }
}
export default Users;