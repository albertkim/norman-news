import React from 'react'
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1 className='display-4'>The Herald</h1>
      <br />
      <div className='d-flex'>
        <div className='mr-2' style={{flexGrow: 1}}>
          <h2>This is breaking news!</h2>
          <div><i>People do things</i></div>
          <div><i>Jonathan Bonder</i></div>
          <hr />
          <div>This is the content</div>
        </div>
        <div className='border border-light p-4' style={{width: 300}}>
          <div>Title 1</div>
          <div>Title 2</div>
          <div>Title 3</div>
        </div>
      </div>
    </div>
  )
}

export default App
