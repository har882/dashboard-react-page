import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/Scrollbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import RightPanel from "./components/RightPanel";


const App = () => {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Header />
        {/*<Dashboard />*/}
        <ScrollToTop />
        <RightPanel/>
        <Switch>
          {/*<Route path="/" exact component={Dashboard} />*/}
          {/*<Route path="/about" component={Projects} />*/}
          {/*<Route path="/project" component={About} />*/}
          {/*<Route path="/resume" component={Resume} />*/}
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
