import React, { Component } from 'react'
import API from '@/api/api';
import { connect } from 'react-redux';
import { saveList, clearData } from '@/store/home/action';
// import PropTypes from 'prop-types';
import './my.scss';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class My extends Component {
  state = {
    disabled: false,
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this)
  }
  render() {
    return (
      <div>my</div>
    )
  }
}

export default connect(state => (
  {
    list: state
  }), {
  saveList,
  clearData,
})(My);