import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 style={{ color: "white", textAlign: "center", marginTop: "25%" }}>
        404 Not Found
      </h1>
      <p style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
        Please Check your URL or <Link to={"/"}>back to homepage</Link>
      </p>
    </div>
  );
}
