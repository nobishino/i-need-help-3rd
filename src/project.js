import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

export default class Project extends React.Component{
    render(){
        return(
          <Col xs="12">
            <Card>
              <h2>Project</h2>
              <Row>
                <Col md="4">シャーっス</Col>
                <Col md="4">シャーッス</Col>
                <Col md="4">シャーッス</Col>
              </Row>
            </Card>
          </Col>
        )
    };
}