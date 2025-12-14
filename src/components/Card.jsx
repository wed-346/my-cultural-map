import React, { useState } from "react";
import Modal from "./Modal";

function Card({ item, onClick, hideImage = false, style }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getPreview(text) {
    if (!text) return "";
    return text.length > 200 ? text.slice(0, 200).trim() + '…' : text;
  }
  return (
    <>
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
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          />
        )}
        <div className="card-content">
          <div className="card-type">{item.type}</div>
          <h3 className="card-title">{item.title}</h3>
          {item.author && <p className="card-author">{item.author}</p>}
          {item.style && <p className="card-style">{item.style}</p>}
          {item.emotion && <p className="card-emotion">Емоція: {item.emotion}</p>}
          {item.tags && item.tags.length > 0 && (
            <div className="card-tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="card-tag">{tag}</span>
              ))}
            </div>
          )}
          {item.description && (
            <div className="card-desc">{getPreview(item.description)}</div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={item.image}
        alt={item.title}
      />
    </>
  );
}

export default Card;
