import React from "react";

export default function Audio() {
  return (
    <div className="audio">
      <div className="audio_content">
        <div className="audio_content_image">
          <div className="audio_content_image_content">
            <video 
              src={'https://cdn-company.plarium.com/meet/production/media/assets/videos/Plarium_Portfolio.mp4'} 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
        </div>
        <div className="audio_title">
          <div className="audio_title_content">
            <h1>Video and Audio Production</h1>
            <p>
              Our commercials are becoming an industry benchmark. They are used
              in Google, Facebook, and Sensor Tower presentations, and they're
              broadcasted by global TV channels in the USA, Canada, the UK, and
              across the EU.
            </p>
          </div>
        </div>
        <div className="audio_area">
          <div className="audio_p">
            <div className="audio_p_content">
              <p>Click to learn more about:</p>
            </div>
          </div>
          <div className="audio_input">
            <div className="audio_input_content">
              <div className="input-container">
                <input type="text" placeholder="Video Team" readOnly />
                <img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Arrow-external.svg'} alt="arrow" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Audio Team" readOnly />
                <img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Arrow-external.svg'} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
