import React,{componet} from 'react';
import TechItem from './TechItem';


class TechList extends Component{
state = {
    newTech:'',
    techs: []
};


componentDidMount(){
const techs = localStorage.getItem('techs');
if(techs){
    this.setState({techs: JSON.parse(techs)});
}
}

componentDidUpdate(_,prevState){
    if(prevState.techs!=this.state.techs){
        localStorage.setItem('techs',JSON.stringify(this.state.techs));
    }
    
}



handlerInputChange = e =>{
     this.setState({newTech: e.target.value});

}

handlerSubmit = e =>{
    e.preventDefault();

    this.setState({techs: [...this.state.techs,this.state.newTech],
        newTech=''
    });
}

handleDelete = (tech) =>{
this.setState({techs: this.state.techs.filter(t=>t!=tech)})
}

    render(){
        return(
            <form onSubmit={this.handlerSubmit}>
            <h1>{this.state.newTech}</h1>
            <ul>
                {this.state.techs.map(tech=> <TechItem key={tech} tech = {tech}  onDelete={()=>this.handleDelete(tech)}/>)}
            </ul>
            <input type="text" onChange={this.handlerInputChange} value={this.state.newTech} />
            <button type ="submit"Enviar></button>
            
            </form>
        );
    }
}


export default TechList;