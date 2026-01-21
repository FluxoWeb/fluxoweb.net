import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container px-4 mx-auto sm:px-6 lg:px-8 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
};

export default Container;