import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Youtube Video Collection",
      videos:[
        {
          url:"https://www.youtube.com/embed/ZkSV5IUqHMM",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/WSH0RWZheAQ",
          tag:"angular"
        },
        {
          url:"https://www.youtube.com/embed/fZKaq623y38",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/XgWRKT2SRac",
          tag:"angular"
        },
        {
          url:"https://www.youtube.com/embed/0wCpLqGKSno",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/JT9Jah5WBr4",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/vRLk8zBtbrI",
          tag:"angular"
        },
        {
          url:"https://www.youtube.com/embed/w5TupxbnnrM",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/NCshQ290g38",
          tag:"react"
        },
        {
          url:"https://www.youtube.com/embed/Oioo0IdoEls",
          tag:"react"
        },
        {
          url: "https://www.youtube.com/embed/gmIZhml6tQQ",
          tag:"angular"
        }
      ],
      filterValue:'all'
    }
  }

  componentDidMount() {
    this.setState({
      videos: this.state.videos
    })
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} filterValue={this.state.filterValue} />
        <Container videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
