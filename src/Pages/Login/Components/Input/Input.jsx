import React from "react";
import styled from "styled-components";

function InputForm(props) {
  return <InputForms {...props} />;
}

export default InputForm;

export const InputForms = styled.input.attrs((props) => ({
  // type: (props) => {
  //   switch (props) {
  //     case "password":
  //       return "password";
  //     default:
  //       return "text";
  //   }
  // },
  type: props.type === "text" ? "text" : "password",
}))`
  width: 350px;
  height: 25px;
  padding: 8px 12px;
  border: 1px solid #000;
  border-left: none;
  box-sizing: unset;
`;
