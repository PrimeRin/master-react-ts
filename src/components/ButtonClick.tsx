import React from "react";

// Button click does not return any event
// type ButtonClickProps = {
//     handleClick: () => void
// }

type ButtonClickProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const ButtonClick = (props: ButtonClickProps) => {
  return (
    <div>
      {/* <button onClick={props.handleClick}>Click</button> */}
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default ButtonClick;
