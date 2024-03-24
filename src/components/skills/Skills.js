import React from 'react'
import './Skills.css'
import reactLogo from '../../assets/skill_logo/reactjs-icon.svg'
import angularLogo from '../../assets/skill_logo/angular-icon.svg'
import nodejsLogo from '../../assets/skill_logo/nodejs-horizontal.svg'
import expressjsLogo from '../../assets/skill_logo/express-svgrepo-com.svg'
import flaskLogo from '../../assets/skill_logo/flask-svgrepo-com.svg'
import sqlLogo from '../../assets/skill_logo/mysql-ar21.svg'
import neo4jLogo from '../../assets/skill_logo/neo4j-ar21.svg'
import htmlLogo from '../../assets/skill_logo/w3_html5-icon.svg'
import cssLogo from '../../assets/skill_logo/css3-svgrepo-com.svg'
import pythonLogo from '../../assets/skill_logo/python-icon.svg'
import gitLogo from '../../assets/skill_logo/git-scm-icon.svg'
import nginxLogo from '../../assets/skill_logo/nginx-icon.svg'
import figmaLogo from '../../assets/skill_logo/figma-icon.svg'
import jsLogo from '../../assets/skill_logo/js.png'
import tsLogo from '../../assets/skill_logo/typescript.png'
import azureLogo from '../../assets/skill_logo/azure-devops-svgrepo-com.svg'




export default function Skills() {
    return (
        <div className='skill'>
        <h4>Technical Expertise</h4>
        <div className='hr-line'></div>
            <div className='grid-container'>
                <div className='grid'>
                    <img src={reactLogo} height={"40"} />
                    <p>React</p>
                </div>
                <div className='grid'>
                    <img src={angularLogo} height={"40"} />
                    <p>Angular</p>
                </div>
                <div className='grid'>
                    <img src={nodejsLogo} height={"40"} />
                    <p>Node Js</p>
                </div>
                <div className='grid'>
                    <img src={expressjsLogo} style={{ filter: "invert(1)" }} height={"40"} />
                    <p>Express Js</p>
                </div>
                <div className='grid'>
                    <img src={flaskLogo} style={{ filter: "invert(1)" }} height={"40"} />
                    <p>Flask</p>
                </div>
                <div className='grid'>
                    <img src={sqlLogo} height={"40"} />
                    <p>MySQL</p>
                </div>
                <div className='grid'>
                    <img src={neo4jLogo} height={"40"} />
                    <p>Neo4j</p>
                </div>
                <div className='grid'>
                    <img src={htmlLogo} height={"40"} />
                    <p>HTML</p>
                </div>
                <div className='grid'>
                    <img src={cssLogo} height={"40"} />
                    <p>CSS</p>
                </div>
                <div className='grid'>
                    <img src={jsLogo} height={"40"} />
                    <p>Javascript</p>
                </div>
                <div className='grid'>
                    <img src={tsLogo} height={"40"} />
                    <p>Typescript</p>
                </div>
                <div className='grid'>
                    <img src={pythonLogo} height={"40"} />
                    <p>Python</p>
                </div>
                <div className='grid'>
                    <img src={gitLogo} height={"40"} />
                    <p>Git</p>
                </div>
                <div className='grid'>
                    <img src={nginxLogo} height={"40"} />
                    <p>NGINX</p>
                </div>
                <div className='grid'>
                    <img src={figmaLogo} height={"40"} />
                    <p>Figma</p>
                </div>
                <div className='grid'>
                    <img src={azureLogo} height={"40"} />
                    <p>Azure Devops</p>
                </div>
            </div>
        </div>

    )
}
