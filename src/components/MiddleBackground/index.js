import React from 'react'
import './style.css'
class MiddleBackground extends React.Component {
  
    render() {
      return (
          <div className="background-box">
            <div className='background-image' style={styles}></div>
          </div>
      )
    }
  }

  const styles = {
      backgroundImage: 'url(http://localhost:8081/images/background.png)',
      height: '148px',
      backgroundSize: 'cover'
  }

  export default MiddleBackground