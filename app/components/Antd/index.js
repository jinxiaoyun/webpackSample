import React, { Component } from "react"
import { Input, Modal, Button } from "antd"
import { observer } from "mobx-react"
import store from "./store"

@observer
export default class extends Component {
  render() {
    const { inputValue } = store
    return (
      <div>
        <Input onChange={store.inputChange} value={inputValue} />
        <span>{inputValue}</span>
        <p>展示故事1111</p>
        <Button onClick={store.showModal}>modal展示</Button>
        <Modal
          title="Basic Modal"
          visible={store.visible}
          onOk={store.handleOk}
          onCancel={store.handleOk}
        >
          <p>哈哈哈哈哈哈</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
