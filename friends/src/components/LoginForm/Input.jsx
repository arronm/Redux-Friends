import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type || 'text'} // TODO: Refactor to use defaultProps
      onChange={props.onChangeHandler}
      name={props.name}
      value={props.value}
    />
  );
}

// TODO: Set up default props
// Input.defaultProps = {

// }
 
export default Input;