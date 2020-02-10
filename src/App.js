import React from 'react';
import './App.css';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl'

import Main from './Components/main';
import HeaderBar from './Components/headerbar';
import { Link } from 'react-router-dom';

import ScrollArea from 'react-scrollbar';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <HeaderBar/>
        <Content>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
