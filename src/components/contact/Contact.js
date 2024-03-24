import React from 'react'
import './Contact.css'
import gmailLogo from '../../assets/skill_logo/gmail.png'
import linkedinLogo from '../../assets/skill_logo/linkedin.png'
import locationLogo from '../../assets/skill_logo/location.png'
import githubLogo from '../../assets/skill_logo/github.png'

export default function Contact() {
    return (
        <div className='contact'>
            <h4>Find me on:</h4>
            <div className='hr-line'></div>
<br></br>
            <div className='link-container'>
                <div className='linkbox'>
                    <img src={gmailLogo} height={20} />
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:jeevaganesh.2812@gmail.com">jeevaganesh.2812@gmail.com</a>
                </div>
                <div className='linkbox'>
                    <img src={linkedinLogo} height={20} />
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/jeevaganesh-r-04028118b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeevaganesh-r</a>
                </div>
                <div className='linkbox'>
                    <img src={githubLogo} height={20} style={{filter:"invert(1)"}}/>
                    <i className="fab fa-linkedin"></i>
                    <a href="https://github.com/Jeeva202" target="_blank" rel="noopener noreferrer">github.com/Jeeva202r</a>
                </div>
                <div className='linkbox'>
                    <img src={locationLogo} height={20} />
                    <p>Bengaluru | Chennai</p>
                </div>
            </div>
        </div>
    )
}
