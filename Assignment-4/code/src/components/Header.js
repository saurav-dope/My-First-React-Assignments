import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="circle">
        <img src="/images/concentric_circles.webp" alt="" />
      </div>
      <div className="txt">Instaclone</div>
      <div className="camera">
        <img src="/images/camera_logo.jpg" alt="" />
      </div>
    </div>
  );
}
