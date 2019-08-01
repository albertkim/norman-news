import React, {useState} from 'react'
import './App.css'

function App() {

  const [youtubeUrl, setYoutubeUrl] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className='container'>

      <br />
      <h1 className='display-2'>The National Gazette</h1>
      <hr />
      Home / Popular / Politics / Global / Science
      <hr />
      <div className='d-flex'>
        <div className='mr-4' style={{flexGrow: 1}}>
          <h2>Finance Minister Exposes Rampant Corruption before Suicide </h2>
          <div><i>Albert Kim</i></div>
          <hr />
          <p>Former finance minister Ruth Reddy released a shocking confession video shortly before ending her life two days ago. </p>
          <p>Her partner, Michael Langsten discovered her unconscious in her bed and called 911. At this stage, the police department has ruled out foul play.</p>
          {
            submitted ? (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${youtubeUrl}`}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen>
                  
                  </iframe>
              </div>
            ) : (
              <div>
                <input placeholder='Youtube video ID (not url)' value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} />
                <button onClick={() => setSubmitted(true)}>Set</button>
              </div>
            )
          }
          <br />
          <p>In Ruth Reddy’s confession video, she exposed the corruption within the United Workers’ Party one month before the election period. The bridge failure that took place two weeks ago was not merely a result of the flooding that weakened the substrate on which the bridge was built on. Allegedly, key party members within the cabinet, including finance minister Ruth Reddy, received bribry of an undisclosed sum from Thiessen Corp and awarded them the project. However, the budget proposed by Thiessen Corp was not sufficient to complete the construction of the South West bridge within safety guidelines.</p>
          <p>The party leader, Gilbert Welch has denied accusations of bribery and declined to comment further on the incident. The opposition party demands a public inquiry into the incident to find answers and expose any illicit activities.</p>
          <p>"In this reality, there is no room for corruption in our evolving democracy," He said. "Rising to these challenges requires the attorney general to follow the grapevine and find those responsible. It was a great tragedy for former finance minister Ruth Reddy to take her own life. We should not let her die in vain."</p>
          <br />
          <div className='row'>
            <div className='col-md-4'>
              <div><b>Headline 1</b></div>
              <small>Here is some more content.</small>
            </div>
            <div className='col-md-4'>
              <div><b>Headline 2</b></div>
              <small>Here is some more content.</small>
            </div>
            <div className='col-md-4'>
              <div><b>Headline 3</b></div>
              <small>Here is some more content.</small>
            </div>
          </div>
        </div>
        <div className='border border-light bg-light p-4' style={{width: 1000}}>
          <div>Trending</div>
          <hr />
          <div className='d-flex'>
            <h1 className='display-4' style={{width: 100}}>1</h1>
            <small>Facebook under fire for not removing polical ads paid for by foreign actors.</small>
          </div>
          <br />
          <div className='d-flex'>
            <h1 className='display-4' style={{width: 100}}>2</h1>
            <small>Vancouver voted as having the best transit system in North America.</small>
          </div>
          <br />
          <div className='d-flex'>
            <h1 className='display-4' style={{width: 100}}>3</h1>
            <small>Opinion: Deep Fakes will completely transform how we watch media online.</small>
          </div>
        </div>
      </div>

      <div style={{height: 500}} />

    </div>
  )

}

export default App
