
import React, { Component } from 'react';
import './App.css';
import TableUsers from './components/Table';
import EditUser from './components/EditUser'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const API = 'http://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(response => (
        this.setState({
          users: response
        }) 
      ))
  }

  handleEdit = (e) => {
     
     console.log('edit')
     console.log(e.target)
     const userId = e.target.id;
   }
  
  handleDelete = (e) => {
     console.log(e.target)
     const userId = Number(e.target.id);
    const result =  window.confirm('Are you sure?')
    if (result) {
       fetch(`https://jsonplaceholder.typicode.com/users/' + ${userId}`, {
  method: 'DELETE'
       })
        .then(this.setState((state, props) => {
	return { users: this.state.users.filter(user => user.id !== userId) }
      }) )
    }
  }

  
  render() {
    console.log(this.state.users);
    return (

        <Router>
        <div className="container">
          <div className="row">
            <div className="col-9 text-left mt-4">
              <header >
                <h1 onClick={this.fetchData}>Dashboard</h1>
              </header>
              <Route exact path="/" component={() => <TableUsers users={this.state.users} onEditClick={this.handleEdit} onDeleteClick={this.handleDelete}/> }  />
              <Route path="/edit" component={EditUser} />
          </div>
        </div>
        </div>
      </Router>

    );
  }
}

export default App;
