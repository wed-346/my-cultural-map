import React from "react";

function Card({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="card"
    >
      <img
        src={item.image}
        alt={item.title}
        className="card-image"
      />
      <div className="card-content">
        <div className="card-type">
          {item.type}
        </div>
        <h3 className="card-title">{item.title}</h3>
        {item.author && (
          <p className="card-author">{item.author}</p>
        )}
        <p className="card-style">{item.style}</p>
      </div>
    </div>
  );
}

export default Card;

