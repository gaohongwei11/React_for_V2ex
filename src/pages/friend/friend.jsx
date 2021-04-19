import React, { Component } from 'react'
import API from '@/api/api';
import { connect } from 'react-redux';
import { saveList, clearData } from '@/store/home/action';
// import PropTypes from 'prop-types';
import './friend.scss';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component {
  state = {
    disabled: false,
  }
  render() {
    return (
      <div>
        <p>friend</p>
        <p>friend</p>
        <p>friend</p>
        <p>friend</p>
        <p>friend</p>
        <p>friend</p>
        <p>friend</p>
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
})(Home);