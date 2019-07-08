import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import {Progress} from 'reactstrap'

export default class Life extends React.Component{
    
    render(){
      return(
        <Col xs="12">
          <Card>
            <h2>人生進捗率</h2>
              <Row>
                <Col xs="12">
                  <div className="life-progress">
                  <div className="life-content">
                    <h4 className="text-center">人生</h4>
                    <Progress color="success" value={25} max={80}>25歳</Progress>
                    <div className="goal"> 80歳</div>
                  </div>
                  <div className="life-content">
                    <h3 className="text-center">人生ToDo</h3>
                    <Progress color="info" value={2} max={5}>2件</Progress>
                    <div className="goal"> 7件</div>
                  </div> 
                  <div className="life-content">
                    <h3 className="text-center">人生ダイエット</h3>
                    <Progress color="worning" value={20} max={30}></Progress>
                    <div className="goal"> 58kg</div>
                  </div>
                  <div className="life-content">
                    <h3 className="text-center">老後の蓄え</h3>
                    <Progress color="warning" value="20" max={2000} />
                    <div className="goal">20M¥</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      )
    };
}