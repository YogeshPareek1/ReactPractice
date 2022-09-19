import React,{Component} from'react'

export default class ConstructComp extends Component{
    constructor()
    super()
    this.state={
        name:"yogesh",
        address:"surat"
    }
}
render(){
    return{
    
    <div>
    <h1>Name:{this.state.name}</h1>
    <h1>Address:{this.state.address}</h1>
    
    </div>
}

}