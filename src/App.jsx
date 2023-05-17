import { useState } from 'react'
import './App.css';
import Card from './components/Card';
import Logo from './components/logo/Logo';

function App() {


  return (
    <>
      <div className='container'>
      <Logo />
      <Card />
      </div>
    </>
  )
}

export default App
