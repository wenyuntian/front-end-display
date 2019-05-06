import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const About = LoadableComponent(()=>import('../../routes/About/index'))
const Detail = LoadableComponent(()=>import('../../routes/Detail/index'))


class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: '16px 0', position: 'relative'}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail/:id' component={Detail}/>
          <Route exact path='/article' component={Home}/>
          <Route exact path='/category' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/message' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain