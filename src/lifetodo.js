import React from 'react';

import {Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import LifeTodo from './life';
import ToDo from './todo';

export default class Life extends React.Component{
    
    render(){
      return(
        <Col xs="12">
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={LifeTodo} />
            <Route exact path="/ToDo" render={()=><ToDo todolist={TODOLIST}/>} />
        </Router>
        </Col>
      )
    };
}
const TODOLIST =[
    {todo:'MBA',isActivated:true,limit:'2023/12/31',description:"20代のうちにアメリカに渡ってMBAの資格を取る。"},
    {todo:'海外勤務',isActivated:true,limit:'2021/12/31',description:""},
    {todo:'オープンソース貢献',isActivated:true,limit:'2020/12/31',description:""}
];