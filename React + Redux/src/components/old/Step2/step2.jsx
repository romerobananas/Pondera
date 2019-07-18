import React from "react";
import Lottie from "lottie-react-web";
import Animation from "./step2.json.js";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

class AboutPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="center zero container zindexneg">
        <div className="center zero row zindexneg">
          <div className="center zero col-12 zindexneg">
            <div className="lottie zindexneg">
              <ReactAudioPlayer
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg"
                autoPlay={true}
                loop={true}
              />
              <Lottie
                options={{
                  animationData: Animation,
                  loop: true
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;

// const AboutPage = () => {
//   const activeStyle = { color: "#F15B2A" };
//   return (
//   <div>
//     <div className="paper">
//     <NavLink to="/courses" activeStyle={activeStyle}>
//         Courses
//       </NavLink>
//     {/* <PaperContainer canvasProps={{backgroundColor:"blue", width: 500, height: 500 }}>

//       <Layer>
//       <Circle center={[80, 50]} radius={35} fillColor="red" />
//       </Layer>
//     </PaperContainer> */}
//     </div>
//     {/* <canvas id="myCanvas" resize></canvas> */}
//     <div className="lottie">
//       <Lottie
//           options={{
//             animationData: Animation,
//             loop: true,
//           }}
//       />
//     </div>
//   </div>
//   );
//   };

// export default AboutPage;
