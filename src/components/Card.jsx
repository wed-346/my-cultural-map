import React from "react";

function Card({ item, onClick, hideImage = false, style }) {
  function getPreview(text) {
    if (!text) return "";
    return text.length > 200 ? text.slice(0, 200).trim() + '…' : text;
  }
  return (
    <div
      onClick={onClick}
      className={`card ${hideImage ? "card-no-image" : ""} card-animate`}
      tabIndex={0}
      style={style}
    >
      {!hideImage && (
        <img
          src={item.image}
          alt={item.title}
          className="card-image"
        />
      )}
      <div className="card-content">
        <div className="card-type">{item.type}</div>
        <h3 className="card-title">{item.title}</h3>
        {item.author && <p className="card-author">{item.author}</p>}
        {item.style && <p className="card-style">{item.style}</p>}
        {item.description && (
          <div className="card-desc">{getPreview(item.description)}</div>
        )}
      </div>
    </div>
  );
}

export default Card;
