import React from 'react';
import { Table, Button } from 'reactstrap';

const TableUsers = (props) => {
  console.log(props)
  
 

  return ( 

    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
            {props.users.map(user => (
        <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td><Button id={user.id} onClick={props.onEditClick} color="warning">edit</Button></td>
              <td><Button id={user.id} onClick={props.onDeleteClick} color="danger">delete</Button></td>        
        </tr>
            ))}                
      </tbody>
     </Table>
   );
}
 
export default TableUsers;
