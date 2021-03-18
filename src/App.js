import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBookComponent from '../src/components/ListBookComponent';
import HeaderComponent from '../src/components/HeaderComponent';
import FooterComponent from '../src/components/FooterComponent';
import AddUpdateBookComponent from '../src/components/AddUpdateBookComponent';
import ViewBookComponent from '../src/components/ViewBookComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
            <Switch>
                <Route path="/" exact component={ListBookComponent}></Route>
                <Route path="/books" component={ListBookComponent}></Route>
                <Route path="/add-book/:id" component={AddUpdateBookComponent}></Route>
                <Route path="/view-book/:id" component={ViewBookComponent}></Route>
            </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
