import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Tabs, Icon } from 'antd';
import HotArticle from '../../components/HotArticle'
import ClickList from '../../components/ClickList'
import MiddleBackground from '../../components/MiddleBackground'
import FrendLink from '../../components/FrendLink'
import LatestArticle from '../../components/LatestArticle'
import fetch from '../../utils/fetch';
import './style.css'
const TabPane = Tabs.TabPane;
const url = 'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true'

class Home extends React.Component {
  state = {
    carouselList: [],
    categoryList: [],
    personal: {
      name: ' ',
      address: ' ',
      motto: ' ',
      email: ' ',
      profession: ' '
    },
    allArticle: [],
    categoryList: []
  }
  componentDidMount() {
    this.getCarouselList();
    this.getPersonalInformation();
    this.getAllArticle();
    this.getCategory();
  }

  getCategory = () => {
    fetch('get', '/api/display/categoryList', '', (response) => {
      this.setState({
        categoryList: response.data.categoryList
      })
    })
  }

  getCarouselList = () => {
    fetch('get', '/api/display/carouselList', '', (response) => {
      this.setState({
        carouselList: response.data.carouselList
      })
    })
  }

  getPersonalInformation = () => {
    fetch('get', '/api/display/personalInformation', '', (response) => {
      this.setState({
        personal: response.data.personal
      })
    })
  }

  getAllArticle = () => {
    fetch('get', '/api/display/allArticle', '', (response) => {
      this.setState({
        allArticle: response.data.articleList
      })
    })
  }
  
    render() {
      const {carouselList, personal, allArticle, categoryList} = this.state;
      return (
        <div className='home'>
          <Row className='content-left' gutter={24}>
            <Col span={18}>
              <CarouselBox carouselList={carouselList}/>
              <CategoryTab categoryList={categoryList} allArticle={allArticle}/>
              <RecommendArticle />
              <MiddleBackground />
              <LatestArticle title='最新文章' />
            </Col>
            <Col className='content-right' span={6}>
              <PersonalInformation personal={personal}/>
              <HotArticle title='热门文章'/>
              <ClickList title='点击排行'/>
              <FrendLink title='友情链接'/>
            </Col>
          </Row>
        </div>
      )
    }
  }

  class CarouselBox extends React.Component {
    render() {
      const {carouselList} = this.props;

      return (
        <div className='carousel'>
          <Carousel speed={100} effect="fade"  autoplay>
            {carouselList.map((item, index) => {
              return <div key={index} className='carousel-item'><div className='carousel-content' style={{backgroundImage: `url(http://localhost:3000/images/upload/${item.path})`}}></div></div>
            })}
          </Carousel>
        </div>
      )
    }
  }

  class PersonalInformation extends React.Component {
    render() {
      const {personal} = this.props;
      
      return (
        <div className="personal-information">
          <div className='information-header'>
            <span className='mac-span' style={{backgroundColor: '#FF5F57'}}></span>
            <span className='mac-span' style={{backgroundColor: '#FEBE32'}}></span>
            <span className='mac-span' style={{backgroundColor: '#28CA42'}}></span>
          </div>
          <div className='information-list'>
            <ul>
              <li>网名：{personal.name ? personal.name : '未填写'}</li>
              <li>现居：{personal.address ? personal.address : '未填写'}</li>
              <li>签名：{personal.motto ? personal.motto : '未填写'}</li>
              <li>Email：{personal.email ? personal.email : '未填写'}</li>
              <li>职业：{personal.profession ? personal.profession : '未填写'}</li>
            </ul>
          </div>
        </div>
      )
    }
  }

  class CategoryTab extends React.Component {
    state = {
      abstractVisibleKey: 0
    }

    abstractVisibleChange = (key) => {
      this.setState({
        abstractVisibleKey: key
      })
    }

    tabOnChange = () => {
      this.setState({
        abstractVisibleKey: 0
      })
    }
  
    render() {
      const {abstractVisibleKey} = this.state;
      const {categoryList, allArticle} = this.props;

      const styles = {
        backgroundColor: '#F7F7F7',
        color: '#1890ff'
      }
      return (
        <Tabs onChange={this.tabOnChange} defaultActiveKey="1" className="category-tab">
          {categoryList.map((category, index) => {
            const cartegoryArticleList = allArticle.filter((article, index) => {
              return article.category === category.name;
            })

            return (
              <TabPane tab={category.name} key={index}>
                    <Row gutter={24}>
                      <Col span={6}>
                        {cartegoryArticleList[0] ? 
                          <Link>
                            <div className='category-article-image' style={{backgroundImage: `url(${url})`}}>
                              <div className='background-filter'><h3>{cartegoryArticleList[0].title}</h3></div>
                            </div>
                          </Link> 
                          : ''
                        }
                        {cartegoryArticleList[1] ? 
                          <Link>
                            <div className='category-article-image' style={{backgroundImage: `url(${url})`}}>
                              <div className='background-filter'><h3>{cartegoryArticleList[1].title}</h3></div>
                            </div>
                          </Link> 
                          : ''
                        }
                      </Col>
                      <Col span={18}>
                        <ul className='category-article-list'>
                          {cartegoryArticleList.map((article, index) => {
                            
                            return index < 5 ? (
                              <li onMouseEnter={this.abstractVisibleChange.bind(this, index)} style={abstractVisibleKey === index ? styles : {}}>
                                <Icon type='link'></Icon> <span>{article.title}</span>
                                <div className='categoryarticle-abstract' style={{display: `${abstractVisibleKey === index ? 'block': 'none'}`}}>{article.abstract}</div>
                              </li>
                            ) 
                            : ''
                          })}
                        </ul>
                      </Col>
                    </Row>
              </TabPane>
          )})}
        </Tabs>
      )
    }
  }

  class RecommendArticle extends React.Component {
  
    render() {
      
      return (
          <div className='recommend-article'>
             <header className='common-header'>
                <span>推荐文章</span>
            </header>
            <section>
                <ul className='recommend-article-list'>
                <Row gutter={36}>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  <Col span={8}>
                    <li className='recommend-article-item'>
                      <section>
                        <div className='recommend-article-image' style={{backgroundImage: `url(${url})`}}>
                          <div className='background-filter'></div>
                        </div>
                        <div className='recommend-article-content'>
                          <h3>2019秋招-阿里面试</h3>
                          <span>2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试2019秋招-阿里面试</span>
                          <p><Icon type='plus'></Icon> 查看更多</p>
                        </div>
                      </section>
                    </li>
                  </Col>
                  </Row>
                </ul>
            </section>
          </div>
      )
    }
  }
  
  export default Home