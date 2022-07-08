import React, { useState } from "react";
import './UsernameForm.css';
// import AddUserButton from './AddUserButton';

const UsernameForm = (props) => {
    // OTHER THAN IT BEING CONFUSING, COULD I NAME IT username, setUsername or does it need to be different from the username in props.username?
    const [enteredUsername, setEnteredUsername] = useState('');
    const [userAge, setUserAge] = useState('');



    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageInYearsHandler = (event) => {
        setUserAge(event.target.value);
    }

    const clickHandler = (event) => {
        event.preventDefault();
        // SHOULD I NAME THIS THE SAME THING AS ABOVE, userAge AND enteredUsername??
        const userData = {
            username: enteredUsername,
            age: userAge
        }
        props.onAddUser(userData);
        setEnteredUsername('');
        setUserAge('');
    }
    return (
        <div className='userContainer'>
            <form className="userform name" onSubmit={clickHandler}>
                <div className="nameAgeContainer">
                    <label for="uname"><b>Username</b></label>
                    <br></br>
                    <input value={enteredUsername} onChange={usernameHandler} type='text' placeholder="Enter Username" />

                </div>
                <div className="nameAgeContainer">
                    <br></br>
                    <label for="age"><b>Age(Years)</b></label>
                    <br></br>
                    <input value={userAge} onChange={ageInYearsHandler} type='number' placeholder="Enter Age" />
                    <div className="addUserButton">
                        <button type='submit' className="userButton">Add User</button>
                    </div>
                </div>
            </form>
        </div>
        // {/* <AddUserButton /> */}
    )

}

export default UsernameForm;