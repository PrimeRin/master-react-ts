import React from "react";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((person, index) => {
        return (
          <h2 key={index}>
            {person.first} {person.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
