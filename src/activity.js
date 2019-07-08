import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

export default class Activity extends React.Component{
    
    render(){
        return(
          <Col xs="12">
            <Card>
              <h2>Activity</h2>
              <Row>
                <Col md="4">twitterの投稿</Col>
                <Col md="4">FBの投稿</Col>
                <Col md="4">githubの投稿</Col>
              </Row>
            </Card>
          </Col>
          )
        };
    }