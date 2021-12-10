import './App.css'
import {
  BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom' 
  import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink,} from '@apollo/client'
import Index from './pages'
import IndexUsuario from './pages/usuarios/usuarios'
import Navbar from './components/Navbar'

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
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/usuarios" element={<IndexUsuario/>}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
