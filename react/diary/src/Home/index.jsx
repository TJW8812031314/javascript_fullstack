import React, { useEffect, useState } from 'react'
import './style.css'
import { Card } from 'antd-mobile'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'

const Home = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('/list').then((res) => {
      // console.log(res)
      setList(res.data)
    })
  }, [list])
  
  return (
    <div className="diary-list">
      {
        list.map((item) => (
          <Link to={{ pathname: 'detail', search: `?id=${item.id}`}} key={item.id}>
            <Card className="diary-item" >
              <Card.Header
                title={item.title}
                thumb={item.url}
                extra={<span>晴</span>}
              />
              <Card.Body>
                <div>{item.title}</div>
              </Card.Body>
              <Card.Footer content= {item.content} />
            </Card>
          </Link>
        ))
        }
    </div>
  )
}

export default Home 