import React from "react";

function Header({ text }) {
  const headerStyle = {
    backgroundColor: "#c60000",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    padding: "3em",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback Test UI",
};

export default Header;
