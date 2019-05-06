import React from 'react'
import {Tag} from 'antd'
import './style.css'

const colorArray = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#ffb300', '#e53935', '#8e24aa']

class FrendLink extends React.Component {

    getRandomColor = (length) => {
        return Math.floor(Math.random() * length);
    }
  
    render() {
      const {title} = this.props;
      const getRandomColor = this.getRandomColor;
      console.log(getRandomColor(7))
      return (
          <section className="frend-link">
            <header className='common-header'>
                <span>{title}</span>
            </header>
            <ul className='frend-link-list'>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>温云天个人博客</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>任翔个人博客</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>daydayUp</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>任翔个人博客</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>daydayUp</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>杨青个人博客</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>阮一峰的个人网站</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>掘金</Tag></li>
                <li className='link-item'><Tag color={colorArray[getRandomColor(7)]}>NBA官方网站</Tag></li>
            </ul>
          </section>
      )
    }
  }

  export default FrendLink