import { useState } from "react";

import "./App.css";

const App = (): JSX.Element => {
  const [selectedRating, setSelectedRating] = useState<string>("Satisfied");

  const handleRatingClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedRatingElement = e.target as HTMLDivElement;
    if (selectedRatingElement.classList.contains("rating")) {
      setSelectedRating(
        selectedRatingElement.querySelector("small")!.textContent!
      );
      document
        .querySelectorAll(".rating")
        .forEach((rating) => rating.classList.remove("active"));
      selectedRatingElement.classList.add("active");
    }
  };

  const handleSendReviewClick = () => {
    const panel = document.querySelector("#panel")!;
    panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
    `;
  };

  return (
    <div id="panel" className="panel-container">
      <strong>
        How satisfied are you with our
        <br />
        customer support performance?
      </strong>
      <div className="ratings-container" onClick={handleRatingClick}>
        <div className="rating">
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
            alt=""
          />
          <small>Unhappy</small>
        </div>
        <div className="rating">
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
            alt=""
          />
          <small>Neutral</small>
        </div>
        <div className="rating active">
          <img
            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
            alt=""
          />
          <small>Satisfied</small>
        </div>
      </div>
      <button className="btn" id="send" onClick={handleSendReviewClick}>
        Send Review
      </button>
    </div>
  );
};

export default App;
