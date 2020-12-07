import React, { Component } from 'react';

import './home.css';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  render(){
    const date = new Date().getTime();
    const finalDate = 1609513200000;
    const runningSec = (finalDate - date)/1000;
    const year = runningSec/60/60/24/30/12;
    const month = (year * 12) % 12;
    const day = (month * 30) % 30 ;
    const hour = (day * 24) % 24;
    const min = (hour * 60) % 60;
    const sec = (min * 60) % 60;

  return (    
    <div className="Home">
      <header className="Home-header">
        <p>
          <h1>Contagem Regressiva</h1>
        {("00" + Math.trunc(month)).slice(-2)} Meses {("00" + Math.trunc(day)).slice(-2)} Dias - {Math.trunc(hour)}:{("00" + Math.trunc(min)).slice(-2)}:{("00" + Math.trunc(sec)).slice(-2)}      
        </p>
      </header>
    </div>
  );
 }

 componentDidMount() {
   this.myInterval = setInterval(()=>{
     this.setState(prevState=>({
       count: prevState.count + 1,
     }))
   },1000)
}}

export default Home;
