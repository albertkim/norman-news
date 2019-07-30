import React from 'react'
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1 className='display-4'>The National Gazette</h1>
      <br />
      <div className='d-flex'>
        <div className='mr-2' style={{flexGrow: 1}}>
          <h2>Former Finance Minister Exposes Rampant Corruption before Suicide </h2>
          <div><i>People do things</i></div>
          <div><i>Jonathan Bonder</i></div>
          <hr />
		  <p>Former finance minister Ruth Reddy released a shocking confession video shortly before ending her life two days ago. </p>
		  <p>Her partner, Michael Langsten discovered her unconscious in her bed and called 911. At this stage, the police department has ruled out foul play.</p>
          <p>video link here</p>
          <p>In Ruth Reddy’s confession video, she exposed the corruption within the United Workers’ Party one month before the election period. The bridge failure that took place two weeks ago was not merely a result of the flooding that weakened the substrate on which the bridge was built on. Allegedly, key party members within the cabinet, including finance minister Ruth Reddy, received bribry of an undisclosed sum from Thiessen Corp and awarded them the project. However, the budget proposed by Thiessen Corp was not sufficient to complete the construction of the South West bridge within safety guidelines.</p>
          <p>The party leader, Gilbert Welch has denied accusations of bribery and declined to comment further on the incident. The opposition party demands a public inquiry into the incident to find answers and expose any illicit activities.</p>
          <p>"In this reality, there is no room for corruption in our evolving democracy," He said. "Rising to these challenges requires the attorney general to follow the grapevine and find those responsible. It was a great tragedy for former finance minister Ruth Reddy to take her own life. We should not let her die in vain."</p>
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
