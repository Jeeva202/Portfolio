import React from 'react'
import './project.css'
export default function Project() {
    return (
        <div className='project'>
            <h4>Personel Projects </h4>
            <div className='hr-line'></div>
            <br />
            <div style={{display:"flex", justifyContent:"space-between", gap:"1vh", flexWrap:"wrap"}}>
                <div class="card">
                    <div class="card__skeleton card__title"></div>
                    <div class="card__skeleton card__description"></div>
                </div>
                <div class="card">
                    <div class="card__skeleton card__title"></div>
                    <div class="card__skeleton card__description"></div>
                </div>
                <div class="card">
                    <div class="card__skeleton card__title"></div>
                    <div class="card__skeleton card__description"></div>
                </div>
            </div>
            <br></br>
            <div className='loader-container'>
                <div class="loader"></div>
            </div>

        </div>
    )
}
