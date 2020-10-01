import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main class="py-3">
        <Container>

          <h1> Welcome to proshop</h1>
        </Container>

      </main>


      <Footer />
    </div>
  );
}

export default App;
