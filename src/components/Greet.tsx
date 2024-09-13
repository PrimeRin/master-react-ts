import React from "react";

type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello, I am {props.name}</h1>
    </div>
  );
};

export default Greet;
