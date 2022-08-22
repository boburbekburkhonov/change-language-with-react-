import { useState } from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Lang from './Lang'

function App() {
  const[lan, setLan] = useState('uz')

  return (
    <div className="App">
      <Header lang={Lang[lan]} setLan={setLan} />
      <main className='main'>

      </main>
      <Footer lang={Lang[lan]} />
    </div>
  )
}

export default App
