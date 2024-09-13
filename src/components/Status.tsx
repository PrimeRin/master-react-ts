import React from "react";

type StatusProps = {
  status: "loading" | "sucess" | "error";
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "sucess") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <div>Status {message}</div>;
};

export default Status;
