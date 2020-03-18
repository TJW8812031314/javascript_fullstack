import React, { Component } from 'react'
import { WirterWrapper, CodeItem } from '../style'

class Wirter extends Component {

  render() {
    return (
      <div>
        <CodeItem>
          <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
          <div className="title">
            <div>下载简书手机APP></div>
            <p>随时随地发现和创作内容</p>
          </div>
        </CodeItem>
        <WirterWrapper>
          HelloWorke
      </WirterWrapper>
      </div>
    )
  }
}
export default Wirter