import React from 'react';
//import './TarjetaAnime.css';
import Style from './TarjetaAnime.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function prueba(name,type){
//   return "El anime "+name+", es del genero "+type;
// }

// ReactDOM.render(App,Root);

//componentes
// const TarjetaAnime = (props) =>(
//   <div>
//     <h1>Title:{props.name}</h1>
//     <hr></hr>
//     <h1>Type:{props.type}</h1>
//     <hr></hr>
//     <h1>Studio:{props.studio}</h1>
//   </div>
// );

// clases
class TarjetaAnime extends React.Component{
    constructor () {
      super()
  
      const METHODS = [ 
        'agregar',
        'quitar',
        'limpiar'
      ]
  
      METHODS.forEach((method) => { // linea para evitar error con el this
        this[method] = this[method].bind(this)
      })
  
      this.state = {
        calificacion: 0
      }
    }
  
    agregar () {
      this.setState({ // funcion reservada para actualizar el contador en tiempo real
        calificacion: this.state.calificacion + 1
      })
    }
  
    quitar () {
      this.setState({
        calificacion: this.state.calificacion - 1
      })
    }
  
    limpiar () {
      this.setState({
        calificacion: 0
      })
    }
  
    render(){
      const ValClass = this.state.calificacion > 2;
      const ValClassActive = ValClass ? Style['TarjetaAnime-activa'] : '';
      const clases = Style.TarjetaAnime+` ${ValClassActive}`;

      return(
        <div className={'form-group'}>
          <div className={clases}>
            <h1>Title:{this.props.name}</h1>
            <hr></hr>
            <h1>Type:{this.props.type}</h1>
            <hr></hr>
            <h1>Studio:{this.props.studio}</h1>
            <hr></hr>
            <h1>Calificacion:{this.state.calificacion}</h1>
            
          </div>
            <button className={'btn btn-secondary'} onClick={this.agregar} > + </button>
            <button className={'btn btn-secondary'} onClick={this.quitar} > - </button>
            <button className={'btn btn-secondary'} onClick={this.limpiar} > Limpiar</button> 
        </div>
        
      )
    }
  }
  
  export default TarjetaAnime