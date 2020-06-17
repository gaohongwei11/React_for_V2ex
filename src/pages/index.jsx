import React from 'react'
import API from '@/api/api';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //     comments: [],
  //     date: new Date().toString()
  //   };
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
    <div onClick={this.goList}>Home-{this.state.count}</div>
    )
  }
}

export default Home