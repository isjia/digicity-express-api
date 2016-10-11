import React, { Component } from 'react';
import axios from 'axios';
import Settings from '../../settings';
import EditForm from './EditForm';


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
    axios.get(`${Settings.host}/post/${id}`).then(res => {
      this.setState({
        post: res.data.post
      });
      console.log(res);
    });
  }
  render(){
    return(
      <div>
        <EditForm post={this.state.post} />
      </div>
    )
  }
}
