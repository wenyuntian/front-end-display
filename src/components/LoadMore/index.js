import React from 'react'
import {Spin} from 'antd'
import './style.css'
class LoadMore extends React.Component {
  
    render() {
      const {isLoading, hasMore} = this.props;
      
      return (
          <div className="load-more" style={styles}>
            {hasMore ? (isLoading ? <Spin tip="加载中..."> </Spin> : '') : '没有更多了...'}
            
          </div>
      )
    }
  }

  const styles = {
      marginTop: '32px', 
      height: '32px',
      textAlign: 'center'
    }

  export default LoadMore