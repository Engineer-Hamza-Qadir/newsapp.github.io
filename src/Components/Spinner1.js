import React, { Component } from 'react'
import loading from './loading_icon.gif'
// export class Spinner1 extends Component  {class based comp}
const Spinner1 =()=> 
 {
//   render() {  {class based comp}
    return (
      <div className='text-center'>
        <img style={{height:"10rem"}} src={loading} alt="loading" />
      </div>
    )
  }
// }

export default Spinner1
