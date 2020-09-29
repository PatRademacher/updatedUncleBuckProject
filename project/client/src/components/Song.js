import React, { Component } from "react"
import ReactMarkdown from 'react-markdown'
import song from '../uncle_buck_jingle.wav'
import LyricsPath from '../uncle_buck_song_lyrics.md'
import './Song.css'
class Song extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { code: null }
      }

      componentWillMount() {
        fetch(LyricsPath).then((response) => response.text()).then((text) => {
          this.setState({ code: text })
        })
      }

  render() {
    return (
        <div className="content">
          <div id="songDisplay">
            <h1>LYRICS TO UNCLE BUCK JINGLE!</h1>
          </div>
          <p>Well he’s the baddest cat in town
          <br />And the coolest uncle around
          <br />He won’t say see ya later
          <br />Unless you use his calculator
          </p>
          <p>  Yeah ya know
          <br />Who I’m talkin' about
          <br />Yeah he’s the one
          <br />You go to when you’re in doubt
          <br />Help you with your finance
          <br />He’ll make you dance
          <br />Come on everybody you know his name (one, two, three, four!)
          </p>
          <p>Uncle Buck (yeah he’ll save you a buck or two)
          <br />Uncle Buck (ooo he’ll help you think it through)
          <br />Uncle Buck (well he’s the only one)
          <br />Uncle Buck (who makes budgeting fun)</p>
          
            <audio
                    ref="audio_tag"
                    autoPlay={false}
                    controls={true} >
                <source type="audio/mp3" src={song} />
            </audio>
        </div>
    )
  }
}

export default Song
