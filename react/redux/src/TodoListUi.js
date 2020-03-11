import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{ marginLeft: '10px', marginTop: '10px' }}>
      <div>
        <Input
          value={props.inputValue}
          onChange={props.handleInputChange}
          placeholder="todo info"
          style={{ width: '300px' }} />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelet(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{ marginLeft: '10px', marginTop: '10px' }}>
//         <div>
//           <Input
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//             placeholder="todo info"
//             style={{ width: '300px' }} />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {this.props.handleItemDelet(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI