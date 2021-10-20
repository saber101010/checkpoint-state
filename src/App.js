import react from 'react'
import './App.css';
import profil from './component/profil';

class App extends react.Component {

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
   this.state.show && <profile/>
}
     
    </div>
  );
} 
}

export default App;
