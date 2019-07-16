import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';
//人生ToDoのプログレスバーがクリックされたら表示するSPA先とする。
//人生ロードマップを表記したい

export default class ToDo extends React.Component{
    
    render(){
      let list =[];
      let todo = this.props.todolist;

      for(let i in this.props.todolist){
          list.push(
          <Col md ="4">
          <Card　className="goalcontent">
            <h4>{todo[i].todo}</h4>
            <div　className="goal-text">
              <p>{todo[i].description}</p>
              <p>{todo[i].limit}</p>
            </div>
          </Card>
          </Col>
          )
      }

      return(
        <Card>
          <h2>実現したいこと</h2>
          <p style={{color:'black'}}>人生のモチベーションです。</p>       
            <Row>
              {list}
            </Row>
        </Card>
    )};
}

