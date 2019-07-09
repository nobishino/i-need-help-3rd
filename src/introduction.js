import React from 'react';
import {Row,Col} from 'reactstrap';
import {Card} from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

export default class Introduction extends React.Component{
    render(){
        return(
            <Col xs="12">
              <Card>
                <h2>About me</h2>
                <Row className="introductions">
                  <Col md="4" className="avator"><img src="https://pbs.twimg.com/profile_banners/2265077570/1537969176/1500x500" alt="太郎の自撮り" className="mypic"/></Col>
                  <Col md="8" className="introduction-wrapper">
                    <div　className="introduction-text">
                      <p>新卒で入社した会社で社内向けのSEをしていて、システム要件の取り纏めやプログラマーの方々との仕様調整が主な業務です。</p>
                      <p>入社してから開発業務は行なっていませんが、休日を使ってWeb系を中心に勉強を続けています。</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
        )
    };
}