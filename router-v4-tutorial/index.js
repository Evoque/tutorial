import React from 'react'
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


import App from './modules/App';
import Other from './modules/Other';


const Home_Temp = () => <div>This is Home, T.</div>
const About_Temp = () => <div>This is About, T.</div>
const Contact_Temp = () => <div>This is Contact, T.</div>

render((
  <Router>
    <div>
      <Switch>
        {/* 跳转路由: 特定业务场景需要跳转处理的，如错误页面、form提交页 */}
        <Redirect path="/redirect" to="/other" /> 
        {/* 不应用全局页面的页面，即：不带导航，占满全屏的页面; 另，如果新窗口打开，在其对应的link中加入target="_blank"属性即可*/}
        <Route path="/other" component={Other} /> 
        {/* 应用全局框架页的路由方式，如：上方有导航，所有页面共享此导航，子页面为此Route的子自组件，在其内部声明 */}
        <Route path="/" component={App} /> 
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))
