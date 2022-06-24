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
import YourFeedback from './components/yourFeedback';
import {login, logout} from './assets/js/near/utils'


export default function App() {
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
            <Nav.Link href='/all-feedback'>All Users Feedbacks</Nav.Link>
            <Nav.Link href='/your-feedback'>Your All Feedbacks</Nav.Link>
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
          <Route exact path='/your-feedback'><YourFeedback /></Route>
        </Switch>
      </Row>
      : 
      <Row>
        <Card style={{marginTop: '15px', width :'100%' , height :'200px'}}>
          <Card.Body style={{marginLeft : 'auto' , marginRight : 'auto',marginTop:'70px'}}>
            <Card.Title>Log in</Card.Title>
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
