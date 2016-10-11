import React, { Component } from 'react';

export default class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.post.title
    }
  }
   render() {
     return(
       <div>
         {JSON.stringify(this.props.post)}
         <form >
          { console.log(this.props.post.title)}
           <input defaultValue={this.state.title} />
         </form>
       </div>
     )
   }
}
