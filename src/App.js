import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages
import Home from "./pages/Home";
import Curations from "./pages/Curations";
import CurationsDetails from "./pages/CurationsDetails";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/curations" component={Curations} />
        <Route exact path="/curations/:id" component={CurationsDetails} />
        <Route exact path="/blogs" component={Blogs} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
