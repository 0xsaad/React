import { useContext } from "react";
import React from "react";
import { data, data1 } from "./App";

function ChildC() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>
        Hi My name is {name} and my gender is {gender}
      </h1>
    </>
  );
}

export default ChildC;
