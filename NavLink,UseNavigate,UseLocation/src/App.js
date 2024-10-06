
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import EditProfile from './components/EditProfile';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/tasks' element={<Tasks/>}></Route>
      <Route path='/leaves' element={<Leaves/>}></Route>
      <Route path='/editprofile' element={<EditProfile/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>

    
      
    </div>
  );
}

export default App;
