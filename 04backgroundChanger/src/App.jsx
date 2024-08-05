import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button onClick={() => setColor("#B22222")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: '#B22222'}}>Red</button> 
          <button onClick={() => setColor("#0096FF")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: '#0096FF'}}>Blue</button> 
          <button onClick={() => setColor("#2ECC71")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: '#2ECC71'}}>Green</button>
          <button onClick={() => setColor("#DE3163")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: '#DE3163'}}>Pink</button>
          <button onClick={() => setColor("#D972FF")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: '#D972FF'}}>Purple</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
