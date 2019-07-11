import React from 'react';

import {Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import LifeTodo from './life';
import Goal from './goal';

export default class Life extends React.Component{
    
    render(){
      return(
        <Col xs="12">
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={LifeTodo} />
            <Route exact path="/ToDo" render={()=><Goal todolist={TODOLIST}/>} />
        </Router>
        </Col>
      )
    };
}
const TODOLIST =[
    {todo:'英語で働く',isActivated:false,limit:'2019/12/31',description:"会話をする。英語の資料を読む。なんでもOK"},
    {todo:'MBAを取る',isActivated:true,limit:'2023/12/31',description:"20代のうちにアメリカに渡ってMBAの資格を取る。"},
    {todo:'海外勤務',isActivated:true,limit:'2021/12/31',description:"一年以上海外で暮らす。EUか米。"},
    {todo:'オープンソース貢献',isActivated:true,limit:'2020/12/31',description:""},
    {todo:'韓国語',isActivated:true,limit:'2025/12/31',description:""},
    {todo:"githubランキング入り",isActivated:true,limit:'2025/12/31',description:""},
    {todo:"彼女",isActivated:true,limit:'2019/12/31',description:"説明不要"}
];