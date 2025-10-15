import Container from 'react-bootstrap/Container'
import Header from './src/Components/Header.jsx'
import Background from './src/Components/Background.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
    <Background />
      <Header />
      <Container className="mt-5">
        <h1 className="text-center">Welcome to My React Website!</h1>
        <p className="lead text-center">
          This website was built using React, Vite, and React Bootstrap.
        </p>
      </Container>
    </>
  )
}

export default App
