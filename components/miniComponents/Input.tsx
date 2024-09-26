import React from "react";

interface InputProps {
  type: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  id: string,
}

const Input: React.FC<InputProps> = ({type, value, onChange, id}) => {
  return(
    <>
      <input
        className="border p-2 rounded-md"
        type={type}
        value={value}
        onChange={onChange} 
        id={id}
      />
    </>
  )
}

export default Input;