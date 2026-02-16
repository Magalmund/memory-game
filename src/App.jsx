import Card from "./components/Card.jsx";
import GameHeader from "./components/GameHeader.jsx";
import WinMessage from "./components/WinMessage.jsx";
import {useGameLogic} from "./hooks/useGameLogic.js";
import {cardValues} from "./constants/cardValues.js";

function App() {

    const {cards, score, moves, handleCardClick, initializeGame, isGameComplete} = useGameLogic(cardValues);

    return (
        <div className="app">
            <GameHeader score={score} moves={moves} onReset={initializeGame}/>

            {isGameComplete && <WinMessage moves={moves}/>}

            <div className="cards-grid">
                {cards.map((card) => (
                    <Card card={card} onClick={handleCardClick}/>
                ))}
            </div>
        </div>
    )
}

export default App
