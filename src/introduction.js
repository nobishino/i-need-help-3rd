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
                <h2>自己紹介</h2>
                <Row className="introductions">
                  <Col md="12" className="avator"><i class="fas fa-laptop-code"></i></Col>
                  <Col md="12" className="introduction-wrapper">
                    <div　className="introduction-text">
                      <p>茨城県在住の社内SEです。</p>
                      <p>情報通信工学系の大学を卒業後、社内SEとして就職し業務システムの設計・開発に携わっています。
                      ユーザー要件の取り纏めからプログラマーとの仕様調整、クラシックシステムの保守・運用が主な業務です。</p>
                      <p>最近では、WebAPI(*SOAP)を用いた拠点間のデータを連携する仕組みの仕様検討〜開発を開発チームのリーダーとして行い成功に導きました。</p>
                      <p>個人では、モダンな技術に興味がありインフラ、バックエンド、フロントエンド問わず触れるようにしています。
                      最近は、AWSでネットワークを一から構築してブログを公開してみたり、Reactを用いてポートフォリオを作成したりしています。</p>
                      <p>今後の課題としては、規約に基づいたコーディングの作法、Gitでの開発、OSSへの貢献を含むプログラミングスキルの獲得を行っていく予定です。</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
        )
    };
}