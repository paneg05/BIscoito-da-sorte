/* eslint-disable jsx-a11y/alt-text */
import React,{ Component } from "react";
import api from "./api";
import './estilo.css'
class App extends Component{
  constructor(props){  
    super(props)
    


    this.state={
     frase:{}
    }
    
    this.biscoito=require('./assets/biscoito.png')
    this.gerarFrase=this.gerarFrase.bind(this)

    
  }

 async gerarFrase(){
   
    await api.get().then((response)=>{
      
      this.setState({frase:response.data})
    }).then(
      setTimeout(()=>{console.log(this.state.frase)},50)
    )
  
   

  
}
   
  
  

  render(){
    return(
      <div className="container">
        <div className="a">
            <img src={this.biscoito} className='img'></img>
            <Botao nome='Abrir Biscoito' acaoBtn={this.gerarFrase} frase={this.state.frase}/>
        </div>
        
      </div>
    )
  }
}

class Botao extends Component{

  

  render(){
    return(
      <div className="c">

            <div className="d">
                <button className="butao" onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
              
            <div className="frase">
                <h3 className="texto">{this.props.frase.texto}</h3> 
                <p className="autor">{this.props.frase.autor}</p>
            </div>

      </div>
    )
  }
}
export default App;
