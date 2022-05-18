import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import login from './components/login';
import register from '/components/register';
import myProfile from '/components/myProfile';
import editProfile from '/components/editProfile';
import posts from '/components/posts';
 


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/login" element={<login/>}></Route>
     <Route path="/register" element={<register/>}></Route>
     <Route path="/editProfile" element={<editProfile/>}></Route>
     <Route path="/myProfile" element={<myProfile/>}></Route>
     <Route path="/posts" element={<posts/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
