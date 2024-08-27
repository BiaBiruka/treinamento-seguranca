import React, { useState } from "react";
import "./styles.scss";

const Card = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontContent, backContent] = React.Children.toArray(children);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card">
        <div className="card-front">{frontContent}</div>
        <div className="card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default Card;
