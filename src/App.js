import React from 'react'
import Header from './components/Header'
import Headline from './components/Headline/Headline'

function App() {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to load the posts!' />
      </section>
    </div>
  )
}

export default App
