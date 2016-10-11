import React, { Component } from 'react';

export default class EditForm extends React.Component {

   render() {
     return(
       <div>
         {JSON.stringify(this.props.post)}
       </div>
     )
   }
}
