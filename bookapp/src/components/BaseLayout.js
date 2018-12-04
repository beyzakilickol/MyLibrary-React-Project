import React, { Component } from 'react';
import {AddBook} from './AddBook'
import {AllBooks} from './AllBooks'
import {Footer} from './Footer'
import {Header} from './Header'
import {UpdateBook} from './UpdateBook'
import {Login} from './Login'
import {Register} from './Register'
import './main.css'
import '../images/icons/favicon.ico'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../vendor/animate/animate.css'
import '../vendor/css-hamburgers/hamburgers.min.css'
import '../css/util.css'
import '../css/main.css'



const hideHeaderStyle = {
  display: 'none'
}

const showHeaderStyle = {
  display: 'block'
}

export class BaseLayout extends Component {
   constructor(props){
     super(props)
     this.state={
      isAuthenticated : false
     }

   }

   componentDidMount() {

     let token = localStorage.getItem('jsonwebtoken')
     console.log(token)
     if(token){
       this.setState({
         isAuthenticated : true
       })


     } else{
       this.setState({
         isAuthenticated : false
       })

     }

   }

  render() {


    let headerStyle = this.state.isAuthenticated ? showHeaderStyle : hideHeaderStyle

    return (

      <div>
          <Header headerStyle = {headerStyle} />
              {this.props.children}
          <Footer headerStyle = {headerStyle}/>

      </div>

    )
  }

}
