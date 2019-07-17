import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card,CardImg,CardTitle,CardBody} from 'reactstrap';
import {Modal,ModalHeader,ModalBody} from 'reactstrap';
import aws from './MyAWSNetwork.png';
import portfolio from './MyPortfolio.png';

import './updatebs4.css';



export default class Project extends React.Component{
  constructor(props){
    super(props);
    this.state={
      modal:false,
      img:aws,
      title:""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(image,title){
      this.setState(prevState => ({
          modal: !prevState.modal,
          img:image,
          title:title
        }));
  }
  

    render(){
        return(
          <Col xs="12">
            <Card >
              <h2>成果物</h2>
              <Row>
                <Col md="6">
                  <Card className ="productcard">
                    <a  onClick={this.toggle.bind(this,aws,"AWSネットワーク構成")}><CardImg top src={aws} alt="myawsnetwork" /></a>
                    <CardTitle><h5>My AWS Network</h5></CardTitle>
                    <CardBody className="description">WordPressの公開を目的にAWSのネットワーク構成を検討・構築しました。Webサーバーのみインターネットに公開され、
                    DBサーバーは外部から参照できないようになっています。今後はELBを導入し冗長性をあげたいと考えています。</CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="productcard" >
                    <a onClick={this.toggle.bind(this,portfolio,"ポートフォリオ")}><CardImg  top src={portfolio} alt="myawsnetwork"  /></a>
                    <CardTitle><h5>My Portfolio</h5></CardTitle>
                    <CardBody className="description">Reactの学習を目的に、デザイン・コンポーネントの構成を検討し、スクラッチしました。
                    コンポーネントの再利用性を理解するには十分でしたが、今後はstate管理、外部APIとの連携を取り入れたいと考えています。</CardBody>
                  </Card>
                </Col>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody><img className="modalimg"  src={this.state.img}/></ModalBody>
                  </Modal>
              </Row>
            </Card>
          </Col>
        )
    };
}
