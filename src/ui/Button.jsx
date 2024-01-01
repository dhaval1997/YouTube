import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="bg-gray-100 rounded ml-2 mt-2 px-3 py-1" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
