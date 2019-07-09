import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

//人生ToDoのプログレスバーがクリックされたら表示するSPA先とする。

export default class ToDo extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){return(
      <Card>
        <h2>人生ToDo</h2>        
          <Row>
            <Col xs="12">
                
            </Col>
          </Row>
      </Card>
    )};
}
