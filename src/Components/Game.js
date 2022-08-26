import React from "react";
import '../styles/style.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber:0,
            wIsNext: true,
        }
    }
    render() {
        return(
            <div className="game-start">

            </div>
        )
    }
}

export default Game
