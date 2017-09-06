

import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props){
    super(props)

    this.state={
        email:''
    }
}

    saveSubsciption = (email) =>{
        const URL_EMAIL =' http://localhost:3004/subcriptions'
    
        fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify ({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email:''
            })
        })
}

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)){
            this.saveSubsciption(email)
        }
    
    
    }
onChangeInput = (event) => {
    this.setState({
        email: event.target.value
    })
}

    render() {
        return (
            <div className= "subscribe_panel">
              <h3>Subscribe to us</h3> 
          
              <form onSubmit={this.handleSubmit}>
                  <input type="text"
                      placeholder="email@email.com"
                      value={this.state.email}
                      onChange={this.onChangeInput}
                  />
              </form>
              </div>
        );
    }
}

export default Subscriptions;