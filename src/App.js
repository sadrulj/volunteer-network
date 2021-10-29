import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Services/Service/Service";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import AuthProvider from "./components/Context/AuthProvider";
import PrivateRoute from "./components/Private/PrivateRoute";
import Events from "./components/Home/Events/Events";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Service></Service>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
            <Route path="/events">
              <Events></Events>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
