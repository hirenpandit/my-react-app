import React from 'react';
import './App.css';
import {GIT_HUB_URL} from './constants/AppConstants';

const CardList = (props:any) => {
  return props.profiles.map((profile:any) => {
    return <Card key={profile.id} {...profile}/>
  });
}

const Card = (props:any) => {
  return <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10}}>
              <div style={{fontSize:'1.25em', fontWeight: 'bold'}}>{props.name}</div>
              <div>{props.company}</div>
            </div>
        </div>
}

class Form extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.getProfile = this.getProfile.bind(this);
  }

  state:any =  {
    userName: ''
  }

  getProfile() {
    fetch(GIT_HUB_URL.concat(this.state.userName))
          .then(res => res.json())
          .then(j => {
            console.log(j);
            this.props.addNewProfile(j);
          });
  }
  render() {
    return <>
      <input value={this.state.userName}  
              onChange={(event) => this.setState({userName: event.target.value})} 
              placeholder="GitHub Username"/>
      <button onClick={this.getProfile}>Add Profile</button>
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
        <h1>{this.props.title}</h1>
        <Form addNewProfile={this.addProfile}/>
        <CardList profiles = {this.state.profiles}/>
      </>
    }
}

export default App;
