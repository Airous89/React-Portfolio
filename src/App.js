import React from 'react';
import {Layout,Header,Navigation,Drawer,Content } from "react-mdl";
import Main from "./components/main";
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo">
    <Layout fixedHeader>
        <Header className="header-color" transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content> 
            <div className="page-content"/>
            <Main/>
        </Content>
    </Layout>
    </div>
  );
}

export default App;
