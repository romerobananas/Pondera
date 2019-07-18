import React from "react";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Wizard, WizardStep } from "react-wizard-primitive";
import Lottie from "lottie-react-web";

import Animation from "./json/home.json";

class Step5 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ReactAudioPlayer
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Example_of_flats_in_music.ogg"
            autoPlay
            loop={true}
            volume={0.3}
          />
        </div>
        <div>
          <Wizard>
            <WizardStep>
              {({ isActive, nextStep }) =>
                isActive && (
                  <div>
                    <ReactAudioPlayer
                      src="https://example-files.online-convert.com/audio/ogg/example.ogg"
                      autoPlay
                      loop={true}
                    />
                    <div className="buttonfooter">
                      <div className="yellowbutton" onClick={nextStep} />
                    </div>
                    <div className="lottie">
                      <Lottie
                        direction={1}
                        speed={1}
                        options={{
                          animationData: Animation,
                          loop: true
                        }}
                      />
                    </div>
                  </div>
                )
              }
            </WizardStep>

            <WizardStep>
              {({ isActive, nextStep }) =>
                isActive && (
                  <div onClick={nextStep}>
                    <ReactAudioPlayer
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg"
                      autoPlay={true}
                      loop={true}
                    />
                    <div className="lottie">
                      <Lottie
                        direction={1}
                        speed={1}
                        options={{
                          animationData: Animation,
                          loop: true
                        }}
                      />
                    </div>
                  </div>
                )
              }
            </WizardStep>

            <WizardStep>
              {({ isActive }) =>
                isActive && (
                  <div>
                    <NavLink to="/" className="button btn btn-primary btn-lg">
                      Home
                    </NavLink>
                  </div>
                )
              }
            </WizardStep>
          </Wizard>
        </div>
      </div>
    );
  }
}

export default Step5;
