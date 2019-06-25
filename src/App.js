import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Components
import Header from './components/header';
import Tabs from './components/tabs';
import TabsContent from './components/tabsContent';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <>
         <Header />
         <Tabs />
         <TabsContent />
         <Footer />
      </>
    )
  }
}

export default App;
