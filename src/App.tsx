import React from 'react';
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import {AnimatePresence} from "framer-motion";
import animateView from "./util/animateView";
import styled from "styled-components";

const CenteredFlex = styled.div`
  justify-content: center;
  display: flex;
`

const Nav = styled.div`
  justify-content: center;
  display: flex;
`

const NavItem = styled.div`
  div {
    flex-grow: 1;
    text-align: center;
  }
`

const Container = styled.div`
    padding-left: 10px;
    padding-right: 10px;
  @media (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`

function App() {
    return (
        <BrowserRouter>
            <Container>
                <h1 style={{textAlign: 'center', fontSize: '3rem'}}>태시아봇</h1>
                <Nav>
                    <NavItem>ITEM1</NavItem>
                    <NavItem>ITEM2</NavItem>
                    <NavItem>ITEM3</NavItem>
                    <NavItem>ITEM4</NavItem>
                </Nav>
                <CenteredFlex>
                    <Route render={({location}) => {
                        return <AnimatePresence initial key={location.pathname}>
                            <Switch>
                                <Route exact path="/" component={animateView(Home)}/>
                            </Switch>
                        </AnimatePresence>
                    }}/>
                </CenteredFlex>
            </Container>
        </BrowserRouter>
    );
}

export default hot(App)
