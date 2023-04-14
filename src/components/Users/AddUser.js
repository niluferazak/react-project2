import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  console.log(enteredUsername);
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHAndler=(props)=>
  {
    
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"></input>
        <Button type="submit"> Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
