import { observable, toJS, action } from "mobx"
class Store {
  @observable inputValue = ""
  @action
  inputChange = e => {
    this.inputValue = e.target.value
  }

  @observable visible = false
  @action
  handleOk = () => {
    this.visible = false
  }
  @action
  showModal = () => {
    this.visible = true
  }
}
export default new Store()
