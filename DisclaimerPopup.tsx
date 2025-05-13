import React, { useState } from 'react';
import './DisclaimerPopup.css';

const DisclaimerPopup = ({ onAccept }: { onAccept: () => void }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">
          Welcome to <span className="highlight">[PROJECT NAME]</span>
        </h2>
        <p className="popup-text">
          This demo uses AI to simulate or display health-related data.
        </p>
        <p className="popup-text">
          <span className="highlight">Disclaimer:</span> This is for informational and educational purposes only.
        </p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="consent">I have read and understood the above</label>
        </div>
        <button
          disabled={!checked}
          className="confirm-button"
          onClick={onAccept}
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
