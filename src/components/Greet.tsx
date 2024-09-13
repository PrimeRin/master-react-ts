import React from "react";

type GreetProps = {
  name: string;
  // optional prop
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Hello, I am {props.name}, Message Count is {props.messageCount}.
        </h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

export default Greet;
