const aboutMe = () => {
    return (
        <div className="landing-container__about-container">
            <h1>Hi! I'm <span id="span1">Franco </span><span id="span2">Danielsen</span></h1>
            <h2>I'm from Tucumán, and I'm 30yo</h2>
            <p>In my work experience I acquired many skills, such as team management, group management, work under
                pressure, result-oriented work, having specific goals of time and results, creativity and proactivity, but now I am
                looking for the challenge that changes my life and take me to another level of experiences, growing and learning
                every day.
                I am a very proactive person, always looking for a way to improve and complement my knowledge. Not knowing
                is a temporary state if you have the initiative.</p>
            <p>Do you like to download my CV? </p><br />
            <a href=".\assets\FrancosResume.pdf" download>Download CV</a><br/>
            <secction  className="landing-container__about-container__work">
                <div className="card 1">
                    <h1>Calculadora de costos</h1>
                    <p>This project was my first solution for a real need, i had to develop a simple tool for a drugstore, they needed to 
                        simplify the way to calculate the correct price for his products, considering the tasks and percentage to be earned.
                    </p>
                    <a href="https://github.com/francoDani/costcalculator">See it in github</a>
                </div>
                <div className="card 2">
                    <h1>My Firs web Resume</h1>
                    <p>When i started to study and develope i allways wonted to have my web resume, thats because in the 
                        world of technology you have to proove your potencial, and thats a way to do it, and at the same time show 
                        your Resume
                    </p>
                    <a href="https://github.com/francoDani/personalresume">See my Web Resume!</a>
                </div>
                <div className="card 3">
                    <h1>A wheather app</h1>
                    <p>This webApp allows me to work whit API's, a major resourse for web develope, and that was a way to practice
                        my css, js and API handle.
                    </p>
                    <a href="https://github.com/francoDani/weatherapp">Look how the weather will be</a>
                </div>
            </secction>
        </div>
    )
}

export default aboutMe;