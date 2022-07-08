import React, { useState } from 'react';
import UsernameForm from './components/UsernameForm';
import UsernameList from './components/UsernameList';

const INITIAL_DATA = [
  {
    id: '1',
    'username': 'Josh',
    'age': '39'
  },
  {
    id: '2',
    'username': 'Jayden',
    'age': '11'
  },
  {
    id: '3',
    'username': 'Amelia',
    'age': '17'
  },
  {
    id: '4',
    'username': 'Isabella',
    'age': '7'
  },
  {
    id: '5',
    'username': 'Mia',
    'age': '5'
  },
  {
    id: '5',
    'username': 'Didi',
    'age': '30'
  }
];

function App() {
  const [users, setUsers] = useState(INITIAL_DATA);


  const addUserHandler = oneUser => {
    const userData = {
      ...oneUser,
      id: Math.random().toString()
    }
    console.log(userData);

    setUsers(prevUsers => {
      return [userData, ...prevUsers]
    });
  };

  return (
    <div className='allUsersContainer'>
      <h1>Enter Name And Age</h1>
      <UsernameForm onAddUser={addUserHandler} />
      {users.map((user) =>
        <UsernameList
          username={user.username}
          age={user.age} />
      )}
    </div>
  );
}

export default App;
