import './styles.css'

export interface CardProps {
    id: string;
    flipped?: boolean;
    back: string;
    front: string;
    handleClick?: (id: string) => void;
}

export function Card({ flipped = false, back, front, handleClick, id }: CardProps) {
    const cardContentClassNames = ['card_content'];
    flipped && cardContentClassNames.push('card_content--flipped');
    
    const handleClickFn = (id: string) => {
    if(handleClick) {
        handleClick(id);
    }
    }

    return <div className="card" onClick={() => handleClickFn(id)}>
        <div className={cardContentClassNames.join(' ')}>
            <div className="card_face card_face--front"><img className="imgFront" src={front} alt="" /></div>
            <div className="card_face card_face--back"><img className="img" src={back} alt="" /></div>
        </div>
    </div>
}