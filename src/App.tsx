import React, { useState } from 'react';
import './App.css';
import {GIT_HUB_URL} from './constants/AppConstants';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const CardList = (props:any) => {
  return <Container>
          {
            props.profiles
                  .map((profile:any)=> <Card key={profile.id} {...profile} />)
          }
        </Container>
}

const Card = (props:any) => {
  return <Row> 
            <Col sm="2">
              <Image src={props.avatar_url} thumbnail/>   
            </Col>
            <Col>
              <Row className="justify-content-md-left">
                <div style={{display: 'inline-block', marginLeft: 10}}>
                  <div style={{fontSize:'1.25em', fontWeight: 'bold'}}>{props.name}</div>
                  <div>{props.company}</div>
                </div> 
              </Row>
               
            </Col> 
          </Row>
  
}

class CardForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.getProfile = this.getProfile.bind(this);
  }

  state:any =  {
    userName: ''
  }

  getProfile(e:any) {
    e.preventDefault();
    fetch(GIT_HUB_URL.concat(this.state.userName))
          .then(res => res.json())
          .then(j => {
            console.log(j);
            this.props.addNewProfile(j);
          });
    this.setState({
      userName: ''
    })
  }
  render() {
    return <>
      <Container fluid>
      <Form onSubmit={this.getProfile}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})} size="lg" placeholder="GitHub username" />
        </Form.Group>
        <Row className="justify-content-md-center">
          <Col lg="2">
            <Button variant="primary" type="submit">
              Add Card
            </Button>
          </Col>
          <Col lg="1">
            <Button variant="secondary" type="clear">
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </>
  }
}

class App extends React.Component<any, any> {

    state = {
      profiles: []
    }

    addProfile = (newProfile:any) => {
      console.log("Adding new profile: "+newProfile.avatar_url);
      this.setState((prevState:any) => ({
        profiles: [...prevState.profiles, newProfile]
      }))
    } 

    render() {
      return <>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="center">{this.props.title}</h1>  
          </Row>
          <Row className="justify-content-md-center">
            <CardForm addNewProfile={this.addProfile}/>
          </Row>
          <Row>
            <CardList profiles = {this.state.profiles}/>
          </Row>
        </Container>
      </>
    }
}

export default App;
