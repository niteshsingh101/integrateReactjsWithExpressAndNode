import React from 'react';
// import logo from './logo.svg';
// import Alert from 'react-bootstrap/Alert';
import {Button, Card, Nav, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from "react-redux";

import './Style.css';
import Users from './Components/Users/Users';
import Header from './Components/Partial/Header';
import Footer from './Components/Partial/Footer';

import { simpleAction } from "./actions/simpleAction";

class App extends React.Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
  render(){
  console.log("Props :", this.props);
  
    return (
      <Card border="primary">
        <Header />
        <Card.Body>
          <Card>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            <button onClick={this.simpleAction}>Test redux action</button>
          </Card>
        </Card.Body>
        <Footer />
      </Card>
    );
  }
}
const mapStateToProps = state => {
  console.log("state :", state);  
  return(
    state = state
  );
}
const mapDispatchToProps = (dispatch) => ({
  simpleActions: () => dispatch(simpleAction())
 })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
