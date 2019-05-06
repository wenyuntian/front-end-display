import React from 'react'
import {Layout} from 'antd'
import Particle from '../../utils/Particle'
import ContentMain from '../../components/ContentMain'
import NavBar from '../../components/NavBar'
import fetch from '../../utils/fetch';
import './style.css'

class Index extends React.Component{
    state = {
      categoryList: []
    }
    componentDidMount() {
      this.initPage();
      this.getCategory();
    }

    getCategory = () => {
      fetch('get', '/api/display/categoryList', '', (response) => {
        this.setState({
          categoryList: response.data.categoryList
        })
      })
    }

    initPage = () => {
      this.particle = new Particle('page')
      this.particle.init()
    }

    render() {
      // 设置Sider的minHeight可以使左右自适应对齐
      const {categoryList} = this.state;
      return (
        <div id='page'>
          <Layout>
            <div className='header'>
              <NavBar categoryList={categoryList}/>
            </div>
            <div className = 'content'>
              <ContentMain/>
            </div>
          </Layout>
        </div>
      );
    }
  }
  export default Index