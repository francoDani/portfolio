import resume from '../assets/FrancosResume.pdf'

const aboutMe = () => {
    return (
        <div className="landing-container__about-container">
            <h1>Hi! I'm <span id="span1">Franco </span><span id="span2">Danielsen</span></h1>
            <h2>I'm from Tucumán, Argentina</h2>
            <p>In my work experience I acquired many skills, such as team management, group management, work under
                pressure, result-oriented work, having specific goals of time and results, creativity and proactivity, but now I am
                looking for the challenge that changes my life and take me to another level of experiences, growing and learning
                every day.<br/>
                I am a proactive person and also autodidact, always looking for a way to improve and complement my knowledge.
                Not knowing is a temporary state if you have the initiative.</p>
                
            <p>Do you like to download my CV? </p><br />
            <a href={resume} download>Download Resume</a><br/>
            
        </div>
    )
}

export default aboutMe;