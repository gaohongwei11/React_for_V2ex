import React, { Component } from 'react'
import API from '@/api/api';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { saveList, clearData } from '@/store/home/action';
// import PropTypes from 'prop-types';
import './layout.scss';
import { NavBar, Icon, TabBar, Button } from 'antd-mobile';
let UNLISTEN;
class Layout extends Component {
  state = {
    count: 999,
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
    tab: [{
      icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
      title: 'Home',
      key: '/home',
      selected: true
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
      selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
      title: 'Koubei',
      key: '/koubei',
      selected: false
    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
      title: 'Life',
      key: '/life',
      selected: false
    }, {
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      title: 'My',
      key: '/my',
      selected: false
    }]
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this)
    this.setData(this.props.location)
    // UNLISTEN变量用来接收解绑函数
    UNLISTEN = this.props.history.listen((route) => {
      console.log(route)
      this.setData(route)
    })
  }
  setData(route){
    let hidden = true
    this.state.tab.map(item => {
      if(item.key === route.pathname){
        hidden = false
        this.changeTab(item)
      }
    })
    console.log(hidden)
    this.setState({
      hidden: hidden,
    });
  }
  componentWillUnmount(){
    UNLISTEN && UNLISTEN(); // 执行解绑
  }
  onLeftClick = () => {
    this.props.history.goBack()
  }
  changeTab = (tab) => {
    console.log(tab)
    let arr = this.state.tab
    arr.map(item => {
      if(item.key === tab.key){
        item.selected = true
      }else{
        item.selected = false
      }
    })
    this.setState({
      tab: arr,
    });
    
  }
  render() {
    return (
      <div className={this.state.hidden ? 'common-con-top' : 'common-con-top common-con-bottom'}>
        <NavBar
          className="fixed-nav-bar"
          style={{ zIndex: '999' }}
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.onLeftClick.bind(this)}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        {this.props.children}
        <div className="fixed-tab-bar" style={{ zIndex: '999' }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            prefixCls="am-tab-bar"
            hidden={this.state.hidden}
          >
            {
              this.state.tab.map(item =>
                <TabBar.Item
                  title={item.title}
                  key={item.key}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                  selected={item.selected}
                  onPress={() => {this.props.history.push({ pathname: `${item.key}` })}}
                >
                </TabBar.Item>
              )
            }
          </TabBar>
        </div>
      </div>
    )
  }
}

export default connect(state => (
  {
    list: state
  }), {
  saveList,
  clearData,
})(withRouter(Layout));