import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import List from "./pages/List";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: []
    }
    
    this.addActivity = this.addActivity.bind(this);
  }
  
  addActivity = (event) => {
    this.setState({activities:[...this.state.activities, {"activity": event.target.value}]});
    console.log(this.state.activities);
  }
  
  render() {
      return (
      <BrowserRouter basename="/react/multi/build">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home addActivity={this.addActivity}/>} />
            <Route path="list" element={<List activities={this.state.activities}/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />}  />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
