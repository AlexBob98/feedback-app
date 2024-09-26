import React from "react";
import Card from "../components/Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about-page">
        <h1>About</h1>
        <p>This is a page About</p>
        <Link className="about-page--a" to="/">
          Back to home
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
