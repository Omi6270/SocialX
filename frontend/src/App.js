import './App.css';
import Grid2 from '@mui/material/Grid2';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import CreateReelsForm from './components/Reels/CreateReelsForm';
import Reels from './components/Reels/Reels';
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './Redux/store';
import { useEffect } from 'react';
import { getProfileAction } from './Redux/Auth/auth.action';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';

function App() {
  const {auth} = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProfileAction(jwt))
        },[jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/message" element={<Message/>} />
        <Route path="/*" element={<Authentication/>} /> 
        <Route path="/profile/*" element={<Profile/>} />
        {/* {/* <Route path="/profile/:id" element={<Profile />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
