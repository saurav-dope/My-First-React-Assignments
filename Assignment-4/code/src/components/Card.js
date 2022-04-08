// src={require(`./${PostImage}`)}

import React from 'react';
import './Card.css';

export default function Card({ people }) {
  console.log(people);
  return people.map((person, index) => {
    return (
      <div className="card" key={index}>
        <div className="info">
          <div className="name">
            {person.name}
            <br />
            {person.location}
          </div>
          <div className="dots">
            <img src="/images/three_dots.png" alt="" />
          </div>
        </div>

        <div className="image">
          <img src={person.PostImage} alt="Not Found" />
        </div>

        <div className="details">
          <div className="like">
            <img src="/images/like.png" alt="" />
          </div>
          <div className="share">
            <img src="/images/share.jpg" alt="" />
          </div>
          <div className="date">{person.date}</div>
        </div>

        <div className="likeCounts">
          <p>{person.likes} likes</p>
        </div>

        <div className="description">
          <p>{person.description}</p>
        </div>
      </div>
    );
  });
}
