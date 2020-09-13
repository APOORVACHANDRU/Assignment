
import React, { Component, lazy, Suspense, StrictMode } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const Signin = lazy(() => import('./components/Signin/signin'));


const Loading = () => <h1>Loading...</h1>;
const Nopage = () => <h1>No Route Found</h1>;
function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          true ? (
            <StrictMode><Component {...props} /></StrictMode>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
class route extends Component {
  render() {
    return (
        <Suspense fallback={<Loading />}>
          <Switch>
           
            <Route path="/dashboard" exact render={(props) => <StrictMode><Dashboard {...props} /></StrictMode>} />
            <PrivateRoute path="/dashboard" component={(props) => <Dashboard  {...props}  />} />
            <PrivateRoute path="/signin" component={(props) => <Signin  {...props}  />} />
            <Route path="/" exact render={(props) => <StrictMode><Dashboard {...props} /></StrictMode>} />
           <Route component={Nopage} />
          </Switch>
        </Suspense>
    );
  }
}

route.propTypes = {};

export default route;