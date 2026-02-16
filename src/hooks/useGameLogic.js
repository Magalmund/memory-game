import {useEffect, useState} from "react";

export const useGameLogic = (cardValues) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchCards, setMatchCards] = useState([]);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [isLocked, setIsLocked] = useState(false);

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const initializeGame = () => {
        // SHUFFLE THE CARDS

        const shuffled = shuffleArray(cardValues);

        const finalCards = shuffled.map((value, index) => ({
            id: index,
            value,
            isFlipped: false,
            isMatched: false,
        }))

        setCards(finalCards);
        setIsLocked(false);
        setScore(0);
        setMoves(0);
        setFlippedCards([]);
        setMatchCards([]);
    }

    useEffect(() => {
        initializeGame();
    }, []);

    const handleCardClick = (card) => {
        if (card.isFlipped || card.isMatched || flippedCards.length === 2 || isLocked ) {
            return;
        }

        const newCards = cards.map((c) => {
            if (c.id === card.id) {
                return {...c, isFlipped: true};
            } else {
                return c;
            }
        })

        setCards(newCards);

        const newFlippedCards = [...flippedCards, card.id]
        setFlippedCards(newFlippedCards);

        if (flippedCards.length === 1) {
            setIsLocked(true);
            const firstCard = cards[flippedCards[0]];

            if (firstCard.value === card.value) {
                setTimeout(() => {
                    setMatchCards((prev) => [...prev, firstCard.id, card.id])
                    setScore((prev) => prev + 1)
                    setCards((prev) => prev.map((c) => {
                        if (c.id === card.id || c.id === firstCard.id) {
                            return {...c, isMatched: true}
                        } else {
                            return c;
                        }
                    }));
                    setIsLocked(false);
                    setFlippedCards([]);
                }, 500)
            } else {
                setTimeout(() => {
                    const flippedCardsBack = newCards.map((c) => {
                        if (newFlippedCards.includes(c.id) || c.id === card.id) {
                            return {...c, isFlipped: false}
                        } else {
                            return c;
                        }
                    })
                    setIsLocked(false);
                    setCards(flippedCardsBack);
                    setFlippedCards([]);
                }, 500)
            }
        }
        setMoves((prev) => prev + 1);
    }

    const isGameComplete = matchCards.length === cardValues.length

    return {cards, score, moves, isGameComplete, initializeGame, handleCardClick}
}
