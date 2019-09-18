import React from 'react';
import Timewriting from './components/Timewriting'
import EchoService from './services/Echo'  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.refreshInterval = 1000;
    this.mockData = true;
    
    this.state ={
      echoResult: {}
    }
  }

  componentDidMount() {
    setInterval(this.loadData, this.refreshInterval) 
  }

  loadData = () => {
    const echoService = EchoService(this.mockData)
    const nrRefresh = this.state.nrRefresh + 1

    echoService
      .fetch('/api/echo')
      .then(data => this.setState({ echoResult: data, nrRefresh: nrRefresh}));
  }
  
  render() {
    return (
      <div className="App">
        <Timewriting />
      </div>
    );
  }
}

export default App;
