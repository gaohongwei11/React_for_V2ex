import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      date: new Date().toString()
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
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
      <div onClick={this.goList}>Home</div>
    )
  }
}

export default Home