import Home from "./Otherpages/Home";
import AboutUs from "./Otherpages/AboutUs";
import ContactUs from "./Otherpages/ContactUs";
import Signin from "./Otherpages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}
export default App;