import './App.css';
import Navb from './components/Navbar';
import { useEffect, useState } from 'react';
import Foot from './components/footer/foot';
import About from './components/about';
import {useDispatch} from "react-redux";
import { authActions } from './store';
import Contact from './components/contact';
import Fav from "./components/favourites/fav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Moviedesc from './components/moviedesc/Moviedesc';
import Home from './components/Home';
import Result from './components/Result';
import Signup from './components/login/signup';
import Login from './components/login/login';
import NotFound from './error';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const id = sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  },[SubmitEvent]);
  
  return (
    <div className="App">
      <Router>
      <Navb />
        <Routes>
          <Route exact path={`/`} element={<Home />}></Route>
          <Route path={`/Moviedesc`} element={<Moviedesc />}></Route>
          <Route path={`/about`} element={<About />}></Route>
          <Route path={`/contact`} element={<Contact />}></Route>
          <Route path={`/result`} element={<Result/>}></Route>
          <Route path={`/signup`} element={<Signup/>}></Route>
          <Route path={`/signin`} element={<Login/>}></Route>
          <Route path={`/favourites`} element={<Fav/>}></Route>
          <Route path={`*`}element={<NotFound/>} />
        </Routes>
      <Foot />
      </Router>
    </div>
  );
}

export default App;
