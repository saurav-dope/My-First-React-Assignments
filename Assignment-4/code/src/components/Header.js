import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="circle">
        <img src="/images/concentric_circles.webp" alt="" />
      </div>

      <div className="txtHeader">
        <Link className="txtHeader" to="/">
          Instaclone
        </Link>
      </div>

      <div className="camera">
        <img src="/images/camera_logo.jpg" alt="" />
      </div>
    </div>
  );
}
