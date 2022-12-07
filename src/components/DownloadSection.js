import React from "react";

function DownloadSection() {
  return (
    <div className="download-section">
      <div className="download-section-Centre-Text-div">
        <h2 className="download-section-h2">Download the app now.</h2>
        <h4>
          Available on your favorite store. Start your premium experience now
        </h4>
        <h4 className="mobile-view">Most calendars are designed for teams. </h4>
        <div className="download-section-button-container">
          <button id="btn-mobile-hide" className="btn1">
            Playstore
          </button>
          <button id="btn-mobile-hide" className="btn1">
            App store
          </button>
          <button id="btn-mobile" className="btn1">
            Buy Now
          </button>
          <button id="btn-mobile" className="btn1">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
