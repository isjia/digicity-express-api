import React, { Component } from 'react';

export default class EditForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(this.refs.title.value);
  }
   render() {
     return(
       <div>
         <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label>
            <input ref="title" defaultValue={this.props.post.title} />
          </div>
           <div>
             <label>content</label>
             <textarea defaultValue={this.props.post.content} />
           </div>
          <div>
            <label>category</label>
            <input defaultValue={this.props.post.category} />
          </div>
           <input type="submit" />
         </form>
       </div>
     )
   }
}
