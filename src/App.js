import React , { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import TarjetaAnime from './components/TarjetaAnime';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/blog/Blog'
import PubSub from 'pubsub-js'
import { fetchPosts } from './redux/actions/postActions'
import UI from './components/blog/Ui'

// class App extends React.Component{
//   constructor () {
//     super()

//     this.state = {
//       adding: false,
//       name: '',
//       type: '',
//       studio: ''
//     }

//     const METHODS = [ 
//       'Add'
//     ]

//     // METHODS.forEach((method) => { // linea para evitar error con el this
//     //   this[method] = this[method].bind(this)
//     // })

    
//   }

//   handleSubmit = (event) => {
//     event.preventDefault() // evento para que no se recargue la pagina automaticamente con el form

//     this.setState({ 
//       adding: true,
//       name: event.target[0].value,
//       type: event.target[1].value,
//       studio: event.target[2].value
//     })
//   }

//   render(){
//     var content = ''
//     if (this.state.adding) {
//       content = <TarjetaAnime name={this.state.name} type={this.state.type} studio={this.state.studio} />
//       // this.setState({
//       //   adding: false
//       // })
//     }
//     return(
//       <div className={'container'}>
//         <div className={'row'}>
//           <div className={'col col-md12'}>
//               <div className={'form-group'}>
//                 <form onSubmit={this.handleSubmit}>
//                   <input
//                     type="text"
//                     placeholder='Nombre'
//                     className={'form-control'}
//                   />
//                   <input
//                     type="text"
//                     placeholder='Género'
//                     className={'form-control'}
//                   />
//                   <input
//                     type="text"
//                     placeholder='Estudio de animación'
//                     className={'form-control'}
//                   />
//                   <button className={'btn btn-primary'}>Agregar Contenedor</button>
//                 </form>
//                 {content}
//               </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const App = () => {

  const [ users, setUsers ] = useState([])

  useEffect(() => { // hook para ciclo de vida inicial y demás
    // componentDidMount
    // componentDidUpdate
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      setUsers(users)
      //console.log(users)
      PubSub.publish('InitialData', users)
    })
    // console.log('%c------------------------', 'color: green')
    
    // return () => {
    //   // componentWillUnmount
    //   console.log('Return de useEffect', clicks)
    //}
  },[])
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        {/* <Todos /> */}
        {/* <Controller /> */}
        {/*<Blog />*/}
        <UI/>
      </div>
    </Provider>
  )
}

export default App