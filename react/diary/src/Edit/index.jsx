import React, { useState, useEffect } from 'react'
import './style.css'
import { Button, List, InputItem, TextareaItem, DatePicker, ImagePicker, Toast } from 'antd-mobile'
import axios from '../utils/axios'
import moment from 'moment'
import { getQueryString } from '../utils/'
import { useHistory } from 'react-router-dom'

const Edit = () => {
  const [date, setDate] = useState()
  const [content, setContent] = useState()
  const [title, setTitle] = useState('')
  const [files, setFile] = useState([])
  const history = useHistory()
  const id = getQueryString('id')
  const onChange = (files, type, index) => {
    console.log(files, type, index)
    setFile(files)
  }

  useEffect(() => {
    if (id) {
      axios.get(`detail/${id}`).then(res => {
        console.log(res)
        if (res.data.length) {
          setTitle(res.data.title)
          setContent(res.data.content)
          setDate(res.data.date)
          setFile([{ url: res.data.url }])
        }
      })
    }
  })

  const publish = () => {
    if (!title || !content || !date) {
      Toast.fail('请填写必要的参数')
      return
    }
    const params = {
      title,
      content,
      date: moment(date).format('YYYY-MM-DD'),
      url: files.length ? files[0].url : ''
    }
    if (id) {
      params['id'] = id
      axios.post('/update', params).then(res => {
        Toast.success('修改成功')
        history.push(`/detail?id=${id}`)
      })
      return
    }
    axios.post('/add', params).then(res => {
      Toast.success('添加成功')
    })
  }
  
  return (
    <div className="diary-edit">
      <List renderHeader={() => '编辑日记'}>
        <InputItem
          clear
          placeholder="输入标题"
          value={title}
          onChange={(value) => setTitle(value)}
        >标题</InputItem>
        <TextareaItem
          placeholder="请输入日记内容"
          rows={6}
          value={content}
          onChange={(value) => setContent(value)}
        />
        <DatePicker
          mode="date"
          title="请选择日期"
          extra="请选择日期"
          value={date}
          onChange={date => setDate(date)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <ImagePicker
          files={files}
          onChange={onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          multiple={false}
        />
        <Button type="primary" onChange={() => publish()}>发布</Button>
      </List>
    </div>
  )
}

export default Edit

