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
          list.push(<Card>{todo[i].todo}</Card>)
      }
      return(
        <Card>
          <h2>Goal in My Life</h2>        
            <Row>
              <Col xs="12">
                <ul>
                  {list}
                </ul>
              </Col>
            </Row>
        </Card>
    )};
}


