import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route key="business" path="/business"   element={ <News itemsPerPage={6} country="in" category="business"  key="business" />}/>
        <Route key="entertainment" path="/entertainment"  element={ <News itemsPerPage={6} country="in" category="entertainment" key="entertainment" />}/>
        <Route key="general" path="/" element={ <News itemsPerPage={6} country="in" category="general" key="general" />}/>
        <Route key="health" path="/health" element={ <News itemsPerPage={6} country="in" category="health" key="health" />}/>
        <Route key="science" path="/science" element={ <News itemsPerPage={6} country="in" category="science" key="science" />}/>
        <Route key="sports" path="/sports" element={ <News itemsPerPage={6} country="in" category="sports" key="sports" />}/>
        <Route key="technology" path="/technology"  element={ <News itemsPerPage={6} country="in" category="technology"   key="technology" />}/>          
        </Routes>
      </Router>
        
      </>
    )
  }
}

export default App
