import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="container">
      <div className="image">
        <img src="/images/landing.jpg" alt="" />
      </div>
      <div className="title">
        <div className="txtLand">
          <p>10x Team 04</p>
        </div>
        <div className="btnWrapper">
          <Link id="landBtn" className="lBtn" to="/postview">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}
