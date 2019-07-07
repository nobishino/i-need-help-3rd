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
        this.state={title:"高梨太郎.com"};
    }
    render(){
        return(
          <div className="preview-navbar row container">
            <Navbar>
              <Col className="title" xs="6">
                <div>  
                  <h2 className="title-name">{this.state.title}</h2>
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
        this.state={name:"高梨太郎",job:"System Engineer"}
    }
    render(){
        return(
            <main>
              <header className="whoiam">
                <div id ="text-center">
                  <h1>I am {this.state.name}.</h1>
                  <p className="job">{this.state.job}</p>
                  <p className="header-share-contents">
                    <ul>
                    <li>
                    <a className="shareicon" href="https://twitter.com" title>
                      <i class="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a className="shareicon" href="https://naughty-hugle1732.on.getshifter.io/">
                      <i class="fab fa-wordpress-simple"></i>
                    </a>
                    </li>
                    <li>
                    <a className="shareicon" href="https://github.com/TaroTakanashi">
                      <i class="fab fa-github"></i>
                    </a>
                    </li>
                    <li>
                    <a className="shareicon" href="https://www.apple.com/jp/shop/product/FPXQ2J/A/133%E3%82%A4%E3%83%B3%E3%83%81MacBook-Pro-23GHz%E3%83%87%E3%83%A5%E3%82%A2%E3%83%AB%E3%82%B3%E3%82%A2Intel-Core-i5-Retina%E3%83%87%E3%82%A3%E3%82%B9%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%83%87%E3%83%AB-%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%AC%E3%82%A4-%E6%95%B4%E5%82%99%E6%B8%88%E8%A3%BD%E5%93%81?fnode=4674a0615ebe110425919741d132b8f665c631fb03bacd6d3b7001f4614309e1e7c2183fefa3bcd36100b46827118ddb613a13550cab8dec446467f602f38810c6cc9fc90e317f4cbe2fc6e22cf29261">
                      <i class="fas fa-laptop"></i>
                    </a>
                    </li>
                    </ul>
                  </p>
                </div>
              </header>
              <Container>
                <Row>
                  <Col xs="12">
                    <Card>
                      <h2>About me</h2>
                      <Row className="introductions">
                        <Col md="4" className="avator"><img src="https://pbs.twimg.com/profile_banners/2265077570/1537969176/1500x500" alt="太郎の自撮り" className="mypic"/></Col>
                        <Col md="8" className="introduction-wrapper">
                          <div　className="introduction-text">
                            <p>新卒で入社した会社で社内向けのSEをしていて、システム要件の取り纏めやプログラマーの方々との仕様調整が主な業務です。</p>
                            <p>入社以来開発業務は行なっていませんが、休日を使ってWeb技術を中心に勉強を続けています。</p>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
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
                  
                </Row>
              </Container>
            </main>  
        );
    }
        
}
class Footer extends React.Component{

    render(){
        return(
            <footer>
              <p>©All right reserved. 高梨太郎 2019</p>
              <p></p>
              <p></p>
            </footer>
        );
    }
}
function Body(props){
    return(
      <div> 
        <Header />
        <Main />
        <Footer />
      </div>
    );
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')  
  );