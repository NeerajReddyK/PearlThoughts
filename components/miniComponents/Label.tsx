import React from "react";

interface LabelProps {
  label: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ label, htmlFor }) => {
  return (
    <>
      <label className="block mb-2" htmlFor={htmlFor}>{label}</label>
    </>
  )
}

export default Label;