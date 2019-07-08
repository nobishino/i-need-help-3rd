import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

export default class MainHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"高梨太郎",job:"System Engineer"}
    }
    render(){
        return(
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
        )
    };
}