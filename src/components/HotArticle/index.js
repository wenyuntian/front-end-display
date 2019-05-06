import React from 'react'
import { Row, Col, Icon } from 'antd';
import './style.css'


class HotArticle extends React.Component {
  
    render() {
      const {title} = this.props;

      return (
          <div className='hot-article'>
            <header className='common-header'>
                <span>{title}</span>
            </header>
            <section className='hot-article-content'>
                <ul>
                    <li>Js原型链</li>
                    <li>React全家桶</li>
                    <li>使用Node.js+MongoDB+Express+React搭建个人博客</li>
                    <li>Js原型链</li>
                    <li>React全家桶</li>
                    <li>React全家桶</li>
                </ul>
            </section>
          </div>
      )
    }
  }

  export default HotArticle