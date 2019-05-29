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

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Ethan Tilley" scroll>
            <Navigation>
                <a href="/">Home</a>
                <a href="/">Projects</a>
                <a href="/">Resume</a>
                <a href="/">Writings</a>
                <a href="/">About Me</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <a href="/">Resume</a>
            <a href="/">Writings</a>
            <a href="/">About Me</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
);
}

export default App;
