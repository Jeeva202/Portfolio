import React from 'react'
import './resume.css'
export default function Resume() {
    return (
        <div className='resume'>
            <h4>Resume</h4>
            <div className='hr-line'></div>
            <br />
            <div class="card">
                <div class="card__skeleton card__title"></div>
                <div class="card__skeleton card__description"></div>
            </div>
            <br></br>
            <div className='loader-container'>
                <div class="loader"></div>
            </div>

        </div>
    )
}
