import React from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getQueryString } from '../utils/index'
import { useHistory } from 'react-router-dom'

const Detail = () => {
  const history = useHistory()
  const id = getQueryString('id')
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
      我和{id}朋友一起吃饭
      </NavBar>
      <List renderHeader={() => '2020-04-28 晴天'} className="my-list">
        <List.Item wrap>我和xx朋友一起吃饭， 我们吃了蒸羊羔、蒸熊掌、蒸鹿尾儿、
        烧花鸭、烧雏鸡、烧子鹅、卤猪、卤鸭、酱鸡、腊肉、松花小肚儿、
        晾肉、香肠儿、什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子、
        罐儿野鸡、罐儿鹌鹑。卤什件儿、卤子鹅、山鸡、兔脯、菜蟒、银鱼、
        清蒸哈什蚂、烩鸭丝、 烩鸭腰、烩鸭条、清拌鸭丝、黄心管儿、焖白鳝、
        焖黄鳝、豆豉鲇鱼、锅烧鲤鱼、烀烂甲鱼、抓炒鲤鱼、抓炒对儿虾。</List.Item>
      </List>

    </div>
  )
}

export default Detail