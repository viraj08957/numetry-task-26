import React from "react";
import Fade from "react-reveal/Fade";

import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="features-body">
        <div className="features-description">
          <Fade left>
            <div className="features-text">
              <h2>Professional templates</h2>
              <p>
                Pick one from our many attractive templates, fill in your skills
                and experiences and you are all set to go. Our completely
                customizable designs allow you to change font, colors, layout
                and images, making it a reflection of you, with great ease.
              </p>
            </div>
          </Fade>

          <Fade left>
            <div className="features-text">
              <h2>Completely secure</h2>
              <p>
                Create your resume without any of the usual hassle of signing up
                and creating an account. We do not save your data and your
                privacy is absolutely guaranteed.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Features;
