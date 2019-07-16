import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card,CardImg,CardTitle,CardBody} from 'reactstrap';
import aws from './MyAWSNetwork.png';
import portfolio from './MyPortfolio.png';

import './updatebs4.css';



export default class Project extends React.Component{

    render(){
        return(
          <Col xs="12">
            <Card >
              <h2>成果物</h2>
              <Row>
                <Col md="6">
                  <Card className ="productcard">
                    <CardImg top src={aws} alt="myawsnetwork" />
                    <CardTitle>My AWS Network</CardTitle>
                    <CardBody>WordPressの公開を目的にAWSのネットワーク構成を検討・構築しました。Webサーバーのみインターネットに公開され、
                    DBサーバーは外部から参照できないようになっています。今後はELBを導入し冗長性をあげることが課題です。</CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="productcard">
                    <CardImg top src={portfolio} alt="myawsnetwork" />
                    <CardTitle>My Portfolio</CardTitle>
                    <CardBody>Reactの学習を目的に、デザイン・コンポーネントの構成を検討し、スクラッチしました。コンポーネントの再利用性を理解するには十分でしたがstate管理、外部APIとの連携を次の課題として取り入れたいと考えています。</CardBody>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        )
    };
}
