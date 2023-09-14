import React from 'react';

export default function MapContent() {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
  };

  return (
    <div style={mapContainerStyle}>
      <iframe
        src="plotly.html"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
}
