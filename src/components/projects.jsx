
const projects = () =>{
    return  <div className="landing-container__project-container">
        <h1>My firts projects</h1>
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
}

export default projects;