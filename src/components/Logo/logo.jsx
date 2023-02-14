import React from "react";

 const Logo = () => {
  return (
    <svg viewBox="0 0 400 400">
      <rect x="50" y="50" width="300" height="300" fill="#F9F9F9" />
      <circle cx="150" cy="150" r="100" fill="#46B0E3" />
      <circle cx="250" cy="150" r="100" fill="#46B0E3" />
      <path d="M150,200 L250,200" stroke="#fff" strokeWidth="15" />
      <path d="M200,125 L200,225" stroke="#fff" strokeWidth="15" />
    </svg>
  );
};

export default Logo;
