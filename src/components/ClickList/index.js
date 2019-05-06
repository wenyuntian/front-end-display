import React from 'react'
import { Row, Col, Icon } from 'antd';
import './style.css'

class ClickList extends React.Component {
  
    render() {
      const {title} = this.props;
      const url = 'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true'
      return (
          <div className='click-article'>
            <header className='common-header'>
                <span>{title}</span>
            </header>
            <section className='click-article-content'>
                <ul>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                    <li className='article-item'>
                        <h4>测试标题测试标题测试标题测试标题测试标题测试标题</h4>
                        <div className='article-content'>
                            <div className='article-image' style={{backgroundImage: `url(${url})`}}></div>
                            <div className='article-abstract'><span>文章简介文章简介简介文章简介文章简文章简介简介文章简介文章简文章简介文章简介文章简介</span></div>
                        </div>
                    </li>
                </ul>
            </section>
          </div>
      )
    }
  }

  export default ClickList