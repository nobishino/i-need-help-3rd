import React from 'react';
import { Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import {Card} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LifeTodo extends React.Component {
    constructor(props){
        super(props);
        this.state={iwasborn:1993,age:0}
    }
    
    componentDidMount(){
      this.setState({age:2019-this.state.iwasborn});
    }
    render(){
    return (
    <Card>
      <h2>人生進捗率</h2>        
        <Row>
            <Col xs="12">
                <div className="life-progress">
                    <div className="life-content">
                        <h4 className="text-center">人生</h4>
                        <Progress color="success" value={this.state.age} max={80}>{this.state.age}歳</Progress>
                        <div className="goal"> 80歳</div>
                    </div>
                    <div className="life-content">
                    <Link to='ToDo'><h3 className="text-center">人生Goal</h3>
                        <Progress color="info" value={2} max={5}>2件</Progress>
                        <div className="goal"> 7件</div></Link>
                    </div>
                    <div className="life-content">
                        <h3 className="text-center">人生ダイエット</h3>
                        <Progress color="worning" value={20} max={30}></Progress>
                        <div className="goal">58kg</div>
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
      );
    }
}