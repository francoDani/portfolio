import Menu from './menu';
import Presentation from '../views/presentation/presentation';
import AboutMe from './aboutMe'
import Contact from '../views/contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from './projects';
import ToggleTheme from './toggleTheme';

const landingContainer = () => {
    const change = () => {

    }
    return (
        <Router >
            <div className="landing-container">
                <Menu />
                <ToggleTheme/>

                <Switch >
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/projects" >
                        <Projects />
                    </Route>
                    <Route path="/about">
                        <AboutMe />
                    </Route>
                    <Route path="/" >
                        <Presentation />
                    </Route>

                </Switch>
            </div>
        </Router>

    )
}

export default landingContainer;