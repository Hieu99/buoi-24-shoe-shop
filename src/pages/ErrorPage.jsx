import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
      <h1 style={{ fontSize: 30, color: "red" }}>404 Error Page.</h1>
    </div>
  );
};

export default ErrorPage;
