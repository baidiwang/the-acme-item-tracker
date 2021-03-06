import React from 'react';
import { connect } from 'react-redux';

const UserForm = ({ deleteUser })=> {
  return (
    <button onClick={  deleteUser }>x</button>
  );
};

const Users = ({ users, deleteUser })=> {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }<UserForm />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}


const mapStateToProps = (state)=> {
  return {
    users: state.users
  };
};


const mapDispatchToProps = (dispatch)=> {
  return {
    deleteUser: async(user)=> {
      await axios.delete(`/api/users/${user.id}`);
      dispatch({ type: 'DELETE_USER', user });
    }
  };
}



export default connect(mapStateToProps)(Users);