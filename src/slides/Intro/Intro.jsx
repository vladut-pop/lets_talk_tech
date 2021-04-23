import React from 'react'
import '../../style/Style.css'
import fundal from '../../assets/background2.jpg'
import './intro.css'

const Intro = () => {
  return (
    <div className="vh-100 parallax" style={{backgroundImage: `url(${fundal})`}}>
      <div  className="center_pos bg-info">

      <h1>LET'S TALK TECH</h1>
      <p className=''>Most popular React Component UI Libraries (2021)</p>
      <p>Table of contet:</p>
      <ul>
        <li>Ant Design</li>
        <li>Material UI</li>
        <li>React Bootstrap</li>
        <li>Blueprint</li>
        <li>Semantic UI React</li>
        <li>Evergreen</li>
        <li>Conclusion</li>
        <li>Thanks</li>
        <li>Biblio</li>
      </ul>

      </div>
      <p className="bot_pos">
        Let's talk TECH, <br />
        23 april, 2021
      </p>
    </div>
  )
}

export default Intro
