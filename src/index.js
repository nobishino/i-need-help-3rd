import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import MainHeader from './mainheader';
import Introduction from './introduction';
import Life from './router';
import Activity from './activity';
import Project from './project';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={title:"MyPortfolio"};
    }
    render(){
        return(
          <div className="preview-navbar row container">
            <Navbar>
              <Col className="title" xs="6">
                <div>  
                  <h2 className="title-name">{this.state.title}</h2>
                  <small>I need help!</small>
                </div>
              </Col>
              <Col className="share" xs="6">
                <div className="share-contents">
                  <a href="https://twitter.com" className=" share-content twitter">
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
    
    render(){
        return(
            <main>
              <MainHeader />
              <Container>
                <Row>
                  <Introduction />
                  <Project />
                  <Life />
                  <Activity />
                </Row>
              </Container>
            </main>  
        );
    }
        
}
class Footer extends React.Component{
    constructor(props){
      super(props);
      this.state={time:0}
    }
    tick(){
        this.setState(state=>({
            time:state.time+1
        }));
    }
    componentDidMount(){
        this.interval=setInterval(()=>this.tick(),1000);
    }
    render(){
        return(
            <footer>
              <p>あなたの現在の滞在時間は{this.state.time}秒です。</p>
              <p>©All right reserved. 高梨太郎 2019</p>
              <p></p>
            </footer>
        );
    }
}
function Body(){
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