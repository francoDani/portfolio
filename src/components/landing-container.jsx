import Menu from './menu';
import Presentation from './presentation';
import AboutMe from './aboutMe'

import Colors from './colors';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from './projects';

const landingContainer = () => {
    const change = () => {

    }
    return (
        <Router >
            <div className="landing-container">
                <Menu />

                <Switch >
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