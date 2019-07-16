import React from 'react';
import {Col} from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updatebs4.css';

import Goal from './goal';

export default class Life extends React.Component{
    
    render(){
      return(
        <Col xs="12">
          <Goal todolist={TODOLIST}/>
        </Col>
      )
    };
}
const TODOLIST =[
    {todo:'MBA取得',isActivated:true,limit:'2023/12/31',description:"20代のうちにアメリカに渡ってMBAの資格を取る。"},
    {todo:'海外勤務',isActivated:true,limit:'2021/12/31',description:"一年以上海外で暮らす。EUか米。"},
    {todo:'プログラミング',isActivated:true,limit:'2019/12/31',description:"業務レベルでのプログラミングスキルの獲得"},
    {todo:'OSS貢献',isActivated:true,limit:'2020/12/31',description:""},
    {todo:"彼女",isActivated:true,limit:'2019/12/31',description:"説明不要"}
];