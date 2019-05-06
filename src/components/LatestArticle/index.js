import React from 'react'
import { Tag, Avatar, Button } from 'antd';
import LoadMore from '../LoadMore'
import VisibilitySensor  from 'react-visibility-sensor'
import './style.css'

const colorArray = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#ffb300', '#e53935', '#8e24aa']

class LatestArticle extends React.Component {
    state = {
        hasMore: true,
        isLoading: false
    }

    getRandomColor = (length) => {
        return Math.floor(Math.random() * length);
    }

    onChange = (isVisible) => {
        if(isVisible === true) {
            this.setState({
                isLoading: true
            })
        }
        this.fetchArticle(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    fetchArticle = (cb) => {
        setTimeout(() => {
            cb()
        }, 2000)
    }

    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const isBottom = (clientHeight + scrollTop === scrollHeight)
        console.log('is bottom:' + isBottom)
    }

    componentDidMount() {
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }

    componentWillUnmount() {
        if (this.contentNode) {
            this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }


    render() {
        const { title } = this.props;
        const url = 'http://localhost:8081/images/background.png'
        const avatar = 'http://localhost:8081/images/avatar.jpg'
        const getRandomColor = this.getRandomColor;
        const length = colorArray.length;
        const {isLoading, hasMore} = this.state;

        return (
            <div className='latest-article'>
                <header className='common-header'>
                    <span>{title}</span>
                </header>
                <section>
                    <ul className='latest-article-list'>
                        <li className='latest-article-item'>
                            <h3>2019秋招美团面试</h3>
                            <div className='article-content'>
                                <div className='article-image' style={{ backgroundImage: `url(${url})` }}></div>
                                <div className='article-information'>
                                    <p>
                                        排序算法可以说是一项基本功，解决实际问题中经常遇到，
                                        针对实际数据的特点选择合适的排序算法可以使程序获得更高的效率，
                                        有时候排序的稳定性还是实际问题中必须考虑的，这篇博客对常见的排序算法进行整理，
                                        包括：插入排序、选择排序、冒泡排序、快速排序、堆排序、归并排序等。
                                </p>
                                    <div className='avatar-information'>
                                        <Avatar src={avatar} style={{ backgroundColor: '#87d068' }} icon="user" />
                                        <span className='avatar-name'>dayday</span>
                                        <Tag color={colorArray[1 % 7]}>前端</Tag>
                                        <Tag color={colorArray[1 % 7]}>数据库</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <span className='article-published'>2017-06-12</span>
                                        <span className='article-views'>浏览(202)</span>
                                        <Button className="look-more" type="primary" size='small'>查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='latest-article-item'>
                            <h3>2019秋招美团面试</h3>
                            <div className='article-content'>
                                <div className='article-image' style={{ backgroundImage: `url(${url})` }}></div>
                                <div className='article-information'>
                                    <p>
                                        排序算法可以说是一项基本功，解决实际问题中经常遇到，
                                        针对实际数据的特点选择合适的排序算法可以使程序获得更高的效率，
                                        有时候排序的稳定性还是实际问题中必须考虑的，这篇博客对常见的排序算法进行整理，
                                        包括：插入排序、选择排序、冒泡排序、快速排序、堆排序、归并排序等。
                                </p>
                                    <div className='avatar-information'>
                                        <Avatar src={avatar} style={{ backgroundColor: '#87d068' }} icon="user" />
                                        <span className='avatar-name'>dayday</span>
                                        <Tag color={colorArray[1 % 7]}>前端</Tag>
                                        <Tag color={colorArray[1 % 7]}>数据库</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <span className='article-published'>2017-06-12</span>
                                        <span className='article-views'>浏览(202)</span>
                                        <Button className="look-more" type="primary" size='small'>查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='latest-article-item'>
                            <h3>2019秋招美团面试</h3>
                            <div className='article-content'>
                                <div className='article-image' style={{ backgroundImage: `url(${url})` }}></div>
                                <div className='article-information'>
                                    <p>
                                        排序算法可以说是一项基本功，解决实际问题中经常遇到，
                                        针对实际数据的特点选择合适的排序算法可以使程序获得更高的效率，
                                        有时候排序的稳定性还是实际问题中必须考虑的，这篇博客对常见的排序算法进行整理，
                                        包括：插入排序、选择排序、冒泡排序、快速排序、堆排序、归并排序等。
                                </p>
                                    <div className='avatar-information'>
                                        <Avatar src={avatar} style={{ backgroundColor: '#87d068' }} icon="user" />
                                        <span className='avatar-name'>dayday</span>
                                        <Tag color={colorArray[1 % 7]}>前端</Tag>
                                        <Tag color={colorArray[1 % 7]}>数据库</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <Tag color={colorArray[1 % 7]}>Java</Tag>
                                        <span className='article-published'>2017-06-12</span>
                                        <span className='article-views'>浏览(202)</span>
                                        <Button className="look-more" type="primary" size='small'>查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <VisibilitySensor onChange={this.onChange}>
                    <LoadMore hasMore={hasMore} isLoading={isLoading} />
                </VisibilitySensor>
            </div>
        )
    }
}

export default LatestArticle