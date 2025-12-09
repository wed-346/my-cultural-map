import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { items } from "../data/items";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-header-image">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop" 
            alt="Cultural Map" 
            className="home-decorative-image"
          />
        </div>
        <h1 className="home-title">
          Культурна мапа мого стилю
        </h1>
      </div>

      <p className="home-intro">
        Ласкаво просимо до моєї культурної мапи! Ця сторінка представляє колекцію культурних об'єктів, 
        які відображають мій особистий стиль та інтереси. Тут ви знайдете книги, картини, музику, 
        спорт та інші елементи, які формують мою культурну ідентичність. Натисніть на будь-який 
        елемент, щоб дізнатися більше про нього та мої особисті враження.
      </p>

      <div className="home-layout">
        <div className="home-main-content">
          <div className="home-grid">
            {items.map((item, index) => (
              <Card 
                key={item.id} 
                item={item} 
                image={item.image} 
                onClick={() => navigate(`/item/${item.id}`)}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
