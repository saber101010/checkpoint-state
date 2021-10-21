import React  ,{Component} from 'react';
import '../App.css';

class profil extends Component {
    Person={
        fullName :"saber saad",
        bio:"I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript",
        imgSrc:"https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg" ,
        profession:"Web Developer",}

    render(){  
        return(
<div className="user" >
<h1>{this.Person.fullName} </h1>
<p>{this.Person.bio} </p>
<img src={this.Person.imgSrc} alt="" />
<h3>{this.Person.profession} </h3>

</div>
       
 )
}
}
export default profil