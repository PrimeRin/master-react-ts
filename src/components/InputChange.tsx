import React from "react";

type InputChangeProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputChange = (props: InputChangeProps) => {
  //handle change is not passed as prop
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      {/* <input type='text' value={props.value} onChange={props.onChange}></input> */}
      <input
        type="text"
        value={props.value}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default InputChange;
