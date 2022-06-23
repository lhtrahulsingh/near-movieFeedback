import 'regenerator-runtime/runtime'
import React from 'react'

import './assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row , Nav, Navbar , Card , NavDropdown} from 'react-bootstrap';
import logo from './assets/img/logo-black.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from './components/movies';
import Welcome from './components/welcome';
import FeedbackList from './components/feedbackList';
import FeedbackForm from './components/feedbackForm';
import FeedbackShow from './components/feedback';
import AllFeedback from './components/allFeedback';

import {login, logout, get_greeting, set_greeting} from './assets/js/near/utils'
import getConfig from './assets/js/near/config'
import { async } from 'regenerator-runtime';


export default function App() {
  // const loginFun = async() =>{
  //   login
  // }
  return (
    <>
    <div>
    <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{width : '50px', height : '50px', borderRadius : '50%'}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
            <Nav.Link href='/movies'>Movies</Nav.Link>
            <Nav.Link href='/all-feedback'>All Feedbacks</Nav.Link>
            <Nav.Link href="#home"
            onClick={window.walletConnection.isSignedIn() ? logout : login}
            >{window.walletConnection.isSignedIn() ? window.accountId : "Log in"}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      {window.walletConnection.isSignedIn() ? 
      <Row>
        <Switch>
          <Route exact path='/'><Welcome /></Route>
          <Route exact path='/feedback'><FeedbackList /></Route>
          <Route exact path='/add-feedback'><FeedbackForm /></Route>
          <Route exact path='/view-feedback'><FeedbackShow /></Route>
          <Route exact path='/movies'><Movies /></Route>
          <Route exact path='/all-feedback'><AllFeedback /></Route>
        </Switch>
        {/* <div>hello</div> */}
      </Row>
      : 
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Pleace log in</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      }
    </Container>
    </Router>
    </div>
    </>
  )
}
