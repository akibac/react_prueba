import React  from 'react'
import { connect } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { fetchPosts } from '../../redux/actions/postActions'
import Button from '@material-ui/core/Button'
import UI from './Ui'
import PubSub from 'pubsub-js'

const Blog = (props) => {

  // console.log(props)

  const click = () => {
    props.dispatch(
      fetchPosts()
    )
  }

  
  

  return (
    <UI />
    // <div className={'container'}>
    //   <div className={'row'}>
    //     <div className={'col col-md-12'}>
    //       <h1>Nuevas entradas de blog</h1>
    //       <Button variant="contained" color="primary" onClick={click}>
    //         Cargar Posts
    //       </Button>
    //       <table className={'table align-items-center table-flush'}>
    //           <thead className={'thead-light'}>
    //             <tr>
    //               <th scope="col">ID Usuario</th>
    //               <th scope="col">Nombre</th>
    //               <th scope="col">Email</th>
    //             </tr>
    //           </thead>
              
    //             {props.blog.isFetching
    //               ? <SyncLoader />
    //               : (
    //                 <tbody>
    //                   {props.blog.posts.map(post => (
    //                     <tr key={post.id}>
    //                       <td>
    //                         { post.id }
    //                       </td>
    //                       <td>
    //                         { post.name }
    //                       </td>
    //                       <td>
    //                         { post.email }
    //                       </td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               )
    //             }
              
    //       </table>
    //     </div>
    //   </div>
    // </div>
  )
}

export default connect((state) => {
  return state
})(Blog)
