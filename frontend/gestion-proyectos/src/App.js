import './App.css'
import {
  BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom' 
  import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink,} from '@apollo/client'
import Index from './pages'
import IndexUsuario from './pages/usuarios/usuarios'
import Layout from './components/Layout'
import EditarUsuario from './pages/usuarios/EditarUsuario'
import UsuariosPendientes from './pages/usuarios/UsuariosPendientes'

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
        </Routes>
      </Layout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
