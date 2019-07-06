import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';
import {Progress} from 'reactstrap'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={title:"I need help!"};
    }
    render(){
        return(
          <div className="preview-navbar row container">
            <Navbar>
              <Col className="title" xs="6">
                <div>  
                  <h3>{this.state.title}</h3>
                  <small>常に助けを求めている。</small>
                </div>
              </Col>
              <Col className="share" xs="6">
                <div className="share-contents">
                  <a href="" className=" share-content twitter">
                    t
                  </a> 
                  <a href="https://naughty-hugle1732.on.getshifter.io/" className="share-content wordpress">
                    w
                  </a>
                  <a href="https://github.com/TaroTakanashi" className="share-content github">
                   g
                  </a>
                </div>
              </Col>
            </Navbar>
          </div>
        );
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"高梨太郎",job:"制作・進行"}
    }
    render(){
        return(
            <main>
              <header className="whoiam">
                <div id ="text-center">
                  <h1>I am {this.state.name}.</h1>
                  <p className="job">{this.state.job}</p>
                  <p className="share-contents2"></p>
                </div>
              </header>
              <Container>
                <Row>
                  <Col xs="12">
                    <Card>
                      <h2>About me</h2>
                      <Row>
                        <Col md="4"><img src="" alt="太郎の自撮り"/></Col>
                        <Col md="8">シャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッスシャーッス</Col>
                      </Row>
                    </Card>
                  </Col>
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
                  <Col xs="12">
                    <Card>
                      <h2>Project</h2>
                      <Row>
                        <Col md="4"><img src="" alt="太郎の自撮り"/></Col>
                        <Col md="4">シャーッス</Col>
                        <Col md="4">シャーッス</Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </main>  
        );
    }
        
}
function Body(props){
    return(
      <div> 
        <Header />
        <Main />
      </div>
    );
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')  
  );