
import React from 'react';
import {Route, Routes , Redirect} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';


const App = () => {
  const isAuthenticated = true; 

  return (
    <>
    <Routes>
      
        <Route path="/login" element={<Login/>} />
        <PrivateRoute  path="/dashboard" element={<Dashboard/>} isAuthenticated={isAuthenticated} />
        <PrivateRoute  path="/profile" element={<Profile/>} isAuthenticated={isAuthenticated} />
        <Redirect to="/login" />
      
    </Routes>
    </>
  );
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default App;
