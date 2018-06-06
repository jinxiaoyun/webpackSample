import React, { Component } from "react"
import { Input, DatePicker, Layout, Menu, Icon, Divider } from "antd"
import { Link } from "react-router"
import config from "./config.json"
import styles from "./Greeter.css"

const { Header, Sider, Content } = Layout

class Greeter extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout style={{ height: "100%" }} className={styles.layoutWrap}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}>
            {this.state.collapsed ? "ii" : "测试系统"}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <Link to="antd" style={{ display: "inline-block" }}>
                <span>antd</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <Link to="apple" style={{ display: "inline-block" }}>
                apple
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>
                <Link style={{ color: "#fff" }}>nav 3</Link>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Greeter
