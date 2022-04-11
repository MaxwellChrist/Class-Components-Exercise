import React from "react";

export default function NameComponent(props) {
  return (
    <h4>
      My name is {props.propsName} but you can change me if you type something
      else below...
    </h4>
  );
}
