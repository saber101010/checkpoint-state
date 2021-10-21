import React from 'react'
import './App.css';
import Profil from './component/profil';

class App extends React.Component {

state={
  show:false
}
show=()=>{
  this.setState({show:!this.state.show})
}



  render(){

 
  return (
    <div >
<button onClick={this.show}>show</button>
{
   this.state.show && <Profil/>
}
     
    </div>
  );
} 
}

export default App;
