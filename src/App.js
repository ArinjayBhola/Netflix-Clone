import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import appStore from './utils/redux/appStore';
import Login from './components/Login';
import Browse from './components/Browse';
import MovieDetail from './components/MovieDetail';
import Body from './components/Body';

const App = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/trailer/:id" element={<MovieDetail />} />
        </Routes>
        <Body />
      </Router>
    </Provider>
  );
};

export default App;
