import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Template from "./pageDefault/template";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      stompClient : null
    }
    this.getConnect()
  } 
  render(){
    return (
      <Template></Template>
    );

  }

  getConnect = () => {
    var socket = new SockJS("http://localhost:8080/ws");
    this.state.stompClient = Stomp.over(socket);

    this.state.stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = (e) => {
    console.log("onConnected");
    // Subscribe to the Public Topic
    this.state.stompClient.subscribe("/topic/public", this.onMessageReceived);

    // Tell your username to the server
    this.state.stompClient.send(
      "/app/chat.addUser",
      {},
      JSON.stringify({ sender: "Ali", type: "JOIN" })
    );
  }

  onMessageReceived = (e) => {
    var message = JSON.parse(e.body);
    console.log(message);
  }
  
}

export default App;
