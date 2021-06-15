import Menu from './menu';
import Presentation from './presentation';
import Mark from './mark';
import Colors from './colors';

const landingContainer = () => {
    const change = () => {

    }
    return (
        <div className="section">
            <div className="landingContainer">
                <Mark />
                <Menu />
                <Presentation />                
            </div>
            <Colors />
        </div>
    )
}

export default landingContainer;