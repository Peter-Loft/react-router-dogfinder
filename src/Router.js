import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

// TODO: DogList is essentially our homepage
function Router(){
    return (
        <Switch>
          <Route exact path="/dogs" >
            <DogList />
          </Route>
          <Route exact path="/dogs/:name" >
            <DogDetails /> 
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      );
}

export default Router;