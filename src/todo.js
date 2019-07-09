import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

//人生ToDoのプログレスバーがクリックされたら表示するSPA先とする。
//人生ロードマップを表記したい

export default class ToDo extends React.Component{
    
    render(){
      const todolist = this.props.todolist;
      return(
        <Card>
          <h2>Goal in My Life</h2>        
            <Row>
              <Col xs="12">
                {todolist[0].todo}
              </Col>
            </Row>
        </Card>
    )};
}


