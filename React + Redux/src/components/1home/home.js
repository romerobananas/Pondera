import React from "react";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Wizard, WizardStep } from "react-wizard-primitive";
import Lottie from "lottie-react-web";

import Animation1 from "./json/1.json";
import Animation2 from "./json/2.json";
import Animation3 from "./json/3.json";

class Home extends React.Component {
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
                    <div className="d-flex justify-content-center visualheight">
                      <div className="yellowbutton" onClick={nextStep} />
                    </div>
                    <div className="lottie">
                      <Lottie
                        direction={1}
                        speed={1}
                        options={{
                          animationData: Animation1,
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
                          animationData: Animation2,
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
                    <NavLink
                      to="/mundocorriente"
                      className="button btn btn-primary btn-lg"
                    >
                      Next
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

export default Home;
