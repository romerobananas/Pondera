import React from "react";
import StepZilla from "react-stepzilla";
import Step1 from "../old/Step1/step1.jsx.js";
import Step2 from "../old/Step2/step2.jsx.js";

class FirstStepper extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
  }
  render() {
    const steps = [
      { name: "Step 2", component: <Step1 /> },
      { name: "Step 3", component: <Step2 /> },
      { name: "Step 4", component: <Step1 /> }
    ];
    return (
      <div className="zero col-12">
        <StepZilla
          steps={steps}
          showNavigation={true}
          showSteps={false}
          nextButtonCls={"yellowbutton"}
          nextButtonText={"hola"}
          nextTextOnFinalActionStep={"last"}
        />
      </div>
    );
  }
}

export default FirstStepper;
