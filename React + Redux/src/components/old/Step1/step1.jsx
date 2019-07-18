import React from "react";
import Lottie from "lottie-react-web";
import Animation from "./data.json.js";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
// import Audio1 from './step1audio.ogg';

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
      <div className="zero col-12 zindexneg">
        <ReactAudioPlayer
          src="https://example-files.online-convert.com/audio/ogg/example.ogg"
          autoPlay
          loop={true}
        />
        <div className="lottie zindexneg">
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
