import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

//人生ToDoのプログレスバーがクリックされたら表示するSPA先とする。
//人生ロードマップを表記したい

export default class ToDo extends React.Component{
    
    render(){
      let list =[];
      let todo = this.props.todolist;
      for(let i in this.props.todolist){
          list.push(
          <Col md ="4">
          <Card>
            <h4>{todo[i].todo}</h4>
            <div　className="introduction-text">
              <p>{todo[i].description}</p>
              <p>{todo[i].limit}</p>
            </div>
          </Card>
          </Col>
          )
      }
      return(
        <Card>
          <h2>Goal in My Life</h2>        
            <Row>
              {list}
            </Row>
        </Card>
    )};
}

