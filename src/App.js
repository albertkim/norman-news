import React, {useState} from 'react'
import './App.css'

function App() {

  const [youtubeUrl, setYoutubeUrl] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className='container'>

      <br />
      <h1 className='display-2'><span className='badge badge-danger mr-4'>N</span>The National Gazette</h1>
      <hr />
      Home<span className='mr-4' /><u className='text-danger'>Popular</u><span className='mr-4' />Culture<span className='mr-4' />Politics<span className='mr-4' />Global<span className='mr-4' />Science<span className='mr-4' />Technology<span className='mr-4' />Travel<span className='mr-4' />Video<span className='mr-4' />Business<span className='mr-4' />Opinion
      <hr />
      <div className='d-flex'>
        <div className='mr-4' style={{flexGrow: 1}}>
          <div className='text-muted'>Global</div>
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
          <div style={{height: 150}} />
          <div className='row'>
            <div className='col-md-3'>
              <img className='w-100 mb-2' style={{height: 150}} src='https://pixel.nymag.com/imgs/fashion/daily/2016/11/03/03-ivanka-trump-plastic-surgery.w700.h700.jpg' />
              <div><b>Plastic Surgeon Reveals: You Can Fill In Wrinkles At Home</b></div>
              <small>Here is some more content.</small>
            </div>
            <div className='col-md-3'>
              <img className='w-100 mb-2' style={{height: 150}} src='data:image/jpeg;base64,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' />
              <div><b>This Amazon Upgrade Is Even Better Than Prime</b></div>
              <small>Here is some more content.</small>
            </div>
            <div className='col-md-3'>
              <img className='w-100 mb-2' style={{height: 150}} src='http://lifestylejournal.com/new-currency-law/images/photo_obama.jpg' />
              <div><b>Look Who's Going Bankrupt Next In America</b></div>
              <small>Here is some more content.</small>
            </div>
            <div className='col-md-3'>
              <img className='w-100 mb-2' style={{height: 150}} src='http://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd697affa-6ab9-11e9-95be-9353feb218cd.jpg?crop=3000%2C1687%2C0%2C156&resize=685' />
              <div><b>New Sleeping Pill "Better Than Ambien" And No Prescription</b></div>
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
