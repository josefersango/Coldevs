import './App.css'
import {
  BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom' 
  import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink,} from '@apollo/client'
import Index from './pages'
import IndexUsuario from './pages/usuarios/usuarios'
import PrivateLayout from './components/PrivateLayout'
import EditarUsuario from './pages/usuarios/EditarUsuario'
import UsuariosPendientes from './pages/usuarios/UsuariosPendientes'
import { Registro } from './pages/auth/Registro'
import AuthLayout from './components/AuthLayout'

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
      
        <Routes>
            <Route path="/" element={<PrivateLayout/>}>
              <Route exact path="/" element={<Index />}/>
              <Route exact path="/usuarios" element={<IndexUsuario/>}/>
              <Route exact path="/usuarios/pendientes" element={<UsuariosPendientes/>}/>
              <Route exact path="/usuarios/editar/:_id" element={<EditarUsuario/>}/>
            </Route>
          
          <Route path='/auth' element={<AuthLayout/>}>
              <Route exact path="/auth/registro" element={<Registro/>}/>
          </Route>
       
        </Routes>
      
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
