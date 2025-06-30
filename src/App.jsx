import './App.css'
import HomePage from './Pages/Home'
import ContactPage from './Pages/Contact'
import AboutPage from './Pages/About'
import { Routes, Route } from 'react-router-dom' 
import Navbar1 from './Navigation/Navbar'
import UserPage from './Pages/User'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import Login from './Pages/login/login'
import RegistrationPage from './Pages/Registration/Registration'
import Footer from './Components/Footer/Footer'
import Category from './Pages/CategoryBlogs/Category'
import Dedicate from './Pages/DedicatePages/Dedicate'

function App() {
  return (
    <>
      <Navbar1/>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Registration' element={<RegistrationPage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/Category" element={<Category/>}/>
        <Route path="/Dedicate" element={<Dedicate/>} />
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="/about"element={<AboutPage/>}/>
        <Route path="/user/:name"element={<UserPage/>}/>
        <Route path="Dashboard/:name" element={<Dashboard /> }>
          <Route path="Settings" element={<Settings/>} />
          <Route path="Profile" element={<Profile/>} />

        </Route>
        <Route path="/"element={<h5>This is the front page</h5>}/>
        <Route path="*"element={<h5>Incorrect Page.</h5>}/>
      </Routes>
      <Footer/>

    </>
  )
}
export default App; 
