import React from 'react'
import API from '@/api/api';
import { connect } from 'react-redux';
import { saveList, clearData } from '@/store/home/action';
// import PropTypes from 'prop-types';
import './home.scss';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //     comments: [],
  //     date: new Date().toString()
  //   };
  // }
  // static propTypes = {
  //   list: PropTypes.array.isRequired,
  // }
  state = {
    count: 999
  }
  selectedProList = []; 
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this)
    this.getHot()
  }
  getHot = async () => {
    let result = await API.getHot({t: 123456});
    console.log(result)
    this.props.saveList(result);
    console.log(this)
  }
  goList = () => {
    this.props.history.push({
      pathname: '/list',
      query: {
        name: 1
      },
      state: {
        id: 1
      }
    })
  }

  render() {
    return (
    <div className="home-container" onClick={this.goList}>
      <div className="test">Home-{this.state.count}</div>
      <div className="box">123</div>
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