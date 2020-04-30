import React from 'react'
import './style.css'
import { Card } from 'antd-mobile'
import { Link } from 'react-router-dom'

const list = [0, 1, 2, 3, 4, 5, 6, 7]

const Home = () => {
  return (
    <div className="diary-list">
      {
        list.map((item) => (
          <Link to={{ pathname: 'detail', search: `?id=${item}`}} key={item}>
            <Card className="diary-item" >
              <Card.Header
                title="我和xx朋友一起吃饭"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>晴</span>}
              />
              <Card.Body>
                <div>{item}</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
          </Link>
        ))
        }
    </div>
  )
}

export default Home 