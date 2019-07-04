import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {Spinner} from 'reactstrap';
import {Card} from 'reactstrap';
import {Progress} from 'reactstrap'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={title:"I need help 3rd."};
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
                  <a href="" className="share-content wordpress">
                    w
                  </a>
                  <a href="" className="share-content github">
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
                        <Col xs="4"><img src="" alt="太郎の自撮り"/></Col>
                        <Col xs="8">シャーッス</Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col xs="12">
                    <Card>
                      <h2>Life plan(人生進捗率)</h2>
                      <Row>
                        <Col xs="12">
                          <div>
                            <div className="text-center">人生進み具合(実年齢/寿命)</div>
                            <Progress color="success" value={25} max={80}>25歳</Progress>
                            <div className="text-center">人生やりたいことリスト</div>
                            <Progress color="info" value={2} max={5}>2件終わって、残り5件</Progress>
                            <div className="text-center">ダイエット進捗率</div>
                            <Progress color="worning" value={20} max={30} />
                            <div className="text-center">老後の蓄え(2000万)</div>
                            <Progress color="warning" value="20" max={2000} />
                          </div>
                        </Col>
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