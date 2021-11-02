import React, { useRef } from "react";

const Useref = () => {
  const inputRef = useRef();
  const handleRef = () => {
    console.log("use ref func work");
    console.log(inputRef);
    inputRef.current.value = "first";
    inputRef.current.focus();
  };
  return (
    <>
      <h2 ref={inputRef}>Welcome to learn useRef hooks</h2>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleRef}>Handle Ref</button>
    </>
  );
};

export default Useref;
