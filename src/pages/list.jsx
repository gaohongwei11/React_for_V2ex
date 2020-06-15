import React from 'react'

class List extends React.Component{
  
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this)
  }
  render() {
    return (
      <div>list</div>
    )
  }
}

export default List