import './App.css'
import {
  BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom' 
  import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink,} from '@apollo/client'
import Index from './pages'
import IndexUsuario from './pages/usuarios/usuarios'
import Layout from './components/Layout'
import EditarUsuario from './pages/usuarios/EditarUsuario'
import UsuariosPendientes from './pages/usuarios/UsuariosPendientes'
import EditarProyecto from './pages/proyectos/EditarProyectos'
import IndexProyecto from './pages/proyectos/ListarProyectos'
import IndexInscripcion from './pages/inscripciones/ListarInscripciones'



const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
})

const cliente = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})
function App() {
  return (
    <ApolloProvider client={cliente}>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/usuarios" element={<IndexUsuario/>}></Route>
          <Route exact path="/usuarios/pendientes" element={<UsuariosPendientes/>}></Route>
          <Route exact path="/usuarios/editar/:_id" element={<EditarUsuario/>}></Route>
          <Route exact path="/proyectos" element={<IndexProyecto/>}></Route>          
          <Route exact path="/proyectos/editar/:_id" element={<EditarProyecto/>}></Route>
          <Route exact path="/inscripcion" element={<IndexInscripcion/>}></Route>
        </Routes>
      </Layout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
