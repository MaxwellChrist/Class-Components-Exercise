import React from "react";

export default function HobbiesComponent(props) {
  return props.banjo.map((hobby) => {
    return (
      <ul>
        <li>{hobby}</li>
      </ul>
    );
  });
}
