import React, { useContext } from "react";
import { themeContext } from "../App";

const Contact = () => {
  const theme = useContext(themeContext);
  console.log("theme", theme);
  return (
    <div className={`${theme === "dark" ? `bg-gray-500 text-white` : ``} `}>
      Contact
    </div>
  );
};

export default Contact;
