import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebase_config';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

initializeApp(firebaseConfig);



function App() {

  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Switch>
            <Route path={["/", "/signin"]} exact>
              <SignIn></SignIn>
            </Route>
            <Route path="/signup" exact>
              <SignUp></SignUp>
            </Route>

            <PrivateRoute path="/dashboard" exact>
              <Dashboard></Dashboard>
            </PrivateRoute>

          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
