import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Context } from "./context/Context";
import AboutFooter from "./pages/aboutFooter/AboutFooter";

function App() {
  var {user} = useContext(Context);
  return (
    <Router>
    <Topbar/>
       <Routes>
         <Route  exact path="/" element={<HomePage/>} />
         <Route  path="/register" element={user?<HomePage/>:<Register/>}/>
         <Route  path="/login" element={user?<HomePage/>:<Login/>}/>
         <Route  path="/write" element={user?<Write/>:<Register/>}/>
         <Route  path="/setting" element={user?<Setting/>:<Register/>}/>
         <Route  path="/post/:postId" element={<SinglePost/>}/>
         <Route  path="/aboutFooter" element={<AboutFooter/>}/>
        </Routes>
    </Router> 
  );
}

export default App;
