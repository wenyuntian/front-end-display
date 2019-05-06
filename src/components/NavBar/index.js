import React from 'react'
import {Icon, Input} from 'antd'
import {Link} from 'react-router-dom'
import './style.css'
const Search = Input.Search

class About extends React.Component {
    state = {
        searchBarVisible: 'none'
    }
    chengeSearchBarVisible = (status) => {
        console.log(status)
        this.setState({
            searchBarVisible: status
        })
    }
    render() {
        const {searchBarVisible} = this.state;
        const {categoryList} = this.props;
        return (
            <div className='nav'>
                <div className='nav-top'></div>
                <div className='nav-content'>
                    <div className='nav-logo'>
                        <span>逆水行舟 | </span>学习如逆水行舟，不进则退
                    </div>
                    <ul className='nav-menu'>
                        <li><Link to=''>网站首页</Link></li>
                        <li>技术博客</li>
                        <li className='secondary-menu'>
                            技术专栏<span><Icon className='icon' type='down'></Icon></span>
                            <ul className='sub-menu'>
                                {categoryList.map((item, index) => <li>{item.name}</li>)}
                            </ul>
                        </li>
                        <li>关于我</li>
                        <li>留言</li>
                        <li>登录</li>
                    </ul>
                    <div className='nav-search'>
                        <Icon onClick={this.chengeSearchBarVisible.bind(this, 'block')} type='search'></Icon>
                    </div>
                </div>
                <div style={{display: `${searchBarVisible}`}} className='nav-search-bar'>
                    <Search
                        placeholder="请输入关键词"
                        onSearch={value => console.log(value)}
                        enterButton
                        />
                    <Icon onClick={this.chengeSearchBarVisible.bind(this, 'none')} className='close-search' type='close'></Icon>
                </div>
            </div>
        )
    }
}

export default About