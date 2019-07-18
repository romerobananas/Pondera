import React from "react";
// import Lottie from "lottie-react-web";
// import Animation from "./step4.json";
// import { NavLink } from "react-router-dom";
// import { Motion, spring } from "react-motion";
import paper, { view, Path, Tool, Raster } from "paper";

class AboutPage extends React.Component {
  componentDidMount() {
    paper.install(window);
    window.onload = function() {
      paper.setup("myCanvas");

      var raster = new Raster(
        "http://3.bp.blogspot.com/_fQQ1RUaMzrs/TUiCmVNKPVI/AAAAAAAADks/v1nOGNebYH8/s1600/Mona+Lisa.jpg"
      );
      raster.position = view.center;
      var tool = new Tool();

      raster.opacity = 1;
      tool.fixedDistance = 25;
      tool.onMouseMove = function(event) {
        var path = new Path.Circle({
          center: event.middlePoint,
          radius: 12.5,
          strokeColor: "black"
        });
        path.fillColor = raster.getAverageColor(path);
      };
      /*
      var tool = new Tool();

      var path = new Path.Circle({
        center: [0, 0],
        radius: 10,
        fillColor: "black"
      });

      tool.onMouseMove = function(event) {
        // Whenever the user moves the mouse, move the path
        // to that position:
        path.position = event.point;
      };

      var path = new Path({
        strokeColor: 'black'
    });
    
    tool.onMouseDrag = function(event) {
        // Add a segment to the path at the position of the mouse:
        path.add(event.point);
    }
*/

      // tool.onMouseDown = function(event) {
      //   path = new Path();
      //   path.strokeColor = "black";
      //   path.add(event.point);
      // };

      // tool.onMouseDrag = function(event) {
      //   path.add(event.point);
      // };
    };
  }
  render() {
    return (
      <div>
        <div className="center zero container">
          <div className="center zero row">
            <div className="center zero col-12">
              <canvas
                className="paper"
                resize="true"
                style={{ width: "100vh", height: "100vh" }}
                id={"myCanvas"}
              />
            </div>
            {/* <div className="center zero col-12">
              <div className="lottie">
                <Lottie
                  direction={-1}
                  speed={1}
                  options={{
                    animationData: Animation,
                    loop: true
                  }}
                />
              </div>
            </div> */}
            {/* <div className="text-center zero col-12">
              <NavLink to="/step3" className="button btn btn-primary btn-lg">
                Back
              </NavLink>
              <NavLink to="/step4" className="button btn btn-primary btn-lg">
                Next
              </NavLink>
            </div> */}
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
