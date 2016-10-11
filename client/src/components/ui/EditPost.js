import React, { Component } from 'react';
import axios from 'axios';

export default class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }
  componentDidMount() {
    var id = this.props.params.id;
    console.log(id);
    axios.get(`http://localhost:3000/post/${id}`).then(res => {
      this.setState({
        post: res.data.post
      });
      console.log(res);
    });
  }
  render(){
    return(
      <div>
        {JSON.stringify(this.state.post)}
      </div>
    )
  }

}
