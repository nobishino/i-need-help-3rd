import React from 'react';

import {Col} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import LifeTodo from './life';
import ToDo from './todo';

export default class Life extends React.Component{
    
    render(){
      return(
        <Col xs="12">
          <Router>
            <Route path="/" exact component={LifeTodo} />
            <Route path="/ToDo" exact component={ToDo} />
          </Router>
        </Col>
      )
    };
}