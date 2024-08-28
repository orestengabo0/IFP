import React from 'react'
import JobChoice from './components/JobChoice/JobChoice'
import WelcomePage from './components/WelcomePage/WelcomePage'
import SignupForm from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
import CreateProject from './components/NewProject/CreateProject'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Footer />
    </Router>
  )
}

export default App