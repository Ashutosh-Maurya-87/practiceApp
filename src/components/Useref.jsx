import React, { useRef } from "react";

const Useref = () => {
  const inputRef = useRef();
  const handleRef = () => {
    console.log("use ref func work");
    console.log(inputRef);
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    // inputRef.current.style.display = "none";
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
