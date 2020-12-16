import React from 'react';
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import {AnimatePresence} from "framer-motion";
import animateView from "./util/animateView";
import styled, {css} from "styled-components";
import Premium from "./views/Premium";
import Partner from "./views/Partner";
import PartnerServers from "./views/PartnerServers";

const Nav = styled.div`
  justify-content: center;
  display: flex;
`

const NavItem = styled(Link)<{ active?: number }>`
  flex-grow: 1;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  padding-top: 10px;
  ${({active}) => (
          active ? css`
            border-top: 3px solid #fff;
          ` : ''
  )}
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
                <Route render={({location}) => {
                    return <AnimatePresence initial={false} exitBeforeEnter>
                        <div>
                            <Nav>
                                <NavItem to="/" active={location.pathname === '/' ? 1 : 0}>About</NavItem>
                                <NavItem to="/premium" active={location.pathname === '/premium' ? 1 : 0}>프리미엄</NavItem>
                                <NavItem to="/partner" active={location.pathname === '/partner' ? 1 : 0}>파트너 및
                                    채용</NavItem>
                                <NavItem to="/partners" active={location.pathname === '/partners' ? 1 : 0}>파트너
                                    서버</NavItem>
                            </Nav>
                            <Switch location={location}>
                                <Route exact path="/" component={animateView(Home)}/>
                                <Route exact path="/premium" component={animateView(Premium)}/>
                                <Route exact path="/partner" component={animateView(Partner)}/>
                                <Route exact path="/partners" component={animateView(PartnerServers)}/>
                            </Switch>
                        </div>
                    </AnimatePresence>
                }}/>
                    </Container>
                    </BrowserRouter>
                    );
                }

export default hot(App)
