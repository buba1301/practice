import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncActions } from '../slices';
import '../../css/App.css';
import Header from './Header.jsx';
import Filter from './Filter.jsx';
import Tabs from './Tabs.jsx';

const App = () => {
  const a = 'b';

  return (
    <main role='main' className='main-container'>
      <Header />
      <div className='content-container'>
        <Filter />
        <Tabs />
      </div>
    </main>
  );
};

export default App;
