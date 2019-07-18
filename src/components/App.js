import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./1home/home";
import Step2 from "./2mundocorriente/step2";
import Step3 from "./3subida/step3";
import Step4 from "./4silencio/step4";
import Step5 from "./5cima/step5";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="margin container-fluid">
      <div className="row justify-content-center">
        <div className="padding col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mundocorriente" component={Step2} />
            <Route path="/subida" component={Step3} />
            <Route path="/silencio" component={Step4} />
            <Route path="/cima" component={Step5} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
