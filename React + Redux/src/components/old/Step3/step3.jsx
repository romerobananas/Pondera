import React from "react";
import Lottie from "lottie-react-web";
import Animation from "./step3.json.js";
import { NavLink } from "react-router-dom";
import Img from "../../styles/button.svg";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="zindexneg">
        <div className="center zero container zindexneg">
          <div className="center zero row zindexneg">
            <div className="center zero col-12 zindexneg">
              <div className="lottie zindexneg">
                <Lottie
                  options={{
                    animationData: Animation,
                    loop: true
                  }}
                />
              </div>
            </div>
            <div className="text-center zero col-12 zindexneg">
              <NavLink to="/step2" className="button">
                <img src={Img} height={200} width={200} />
              </NavLink>
              <NavLink to="/step4" className="button btn btn-primary btn-lg">
                Next
              </NavLink>
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
