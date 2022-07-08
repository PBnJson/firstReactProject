import React from "react";
import './UsernameList.css';

const UsernameList = (props) => {
    let name = props.username;
    let years = props.age;
    //  HOW DO I RETURN THE userData here??
    return (
        <div className="userList">

            <p>{name} is {years} old.</p>
        </div>
    )
};

export default UsernameList;