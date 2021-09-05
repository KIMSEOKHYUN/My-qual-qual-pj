import { Switch, Route } from "react-router-dom";

import Brand from "./navbar-components/Brand";
import ExperimentDeal from "./navbar-components/ExperimentDeal";
import Live from "./navbar-components/Live";
import Ranking from "./navbar-components/Ranking";
import Recommend from "./navbar-components/Recommend";
import RetailShop from "./navbar-components/RetailShop";
import TogetherRoom from "./navbar-components/TogetherRoom";

import Category from "./menubar-components/Category";
import Home from "./menubar-components/Home";
import Myqualqual from "./menubar-components/Myqualqual";
import QupidShop from "./menubar-components/QupidShop";
import ShowWindow from "./menubar-components/ShowWindow";

function Page() {
  return (
    <div className="page">
      <Switch>
        <Route path="/brand">
          <Brand />
        </Route>

        <Route path="/ranking">
          <Ranking />
        </Route>

        <Route path="/recommend">
          <Recommend />
        </Route>

        <Route path="/experimentdeal">
          <ExperimentDeal />
        </Route>

        <Route path="/live">
          <Live />
        </Route>

        <Route path="/togetherroom">
          <TogetherRoom />
        </Route>

        <Route path="/retailshop">
          <RetailShop />
        </Route>

        <Route path="/category">
          <Category />
        </Route>

        <Route path="/showwindow">
          <ShowWindow />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/qupidshop">
          <QupidShop />
        </Route>

        <Route path="/myqualqual">
          <Myqualqual />
        </Route>
      </Switch>
    </div>
  );
}

export default Page;
