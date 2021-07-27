function Card(props) {
    return (
        <li className="elements__item">
            <img src={props.card.link} alt={props.card.name} className="elements__image" onClick={handleClick} />
            <div className="elements__container">
                <h2 className="elements__header">{props.card.name}</h2>
                <div className="elements__container elements__container_likes">
                    <button type="button" className={`elements__like-button ${props.card.likes.some(item => item._id === props.userId) && "elements__like-button_liked"}`}></button>
                    <span className="elements__counter-likes">{props.card.likes.length}</span>
                </div>
                {props.card.owner._id === props.userId && <button type="button" className="elements__delete-button"></button>}
            </div>
        </li>
    )

    function handleClick() {
        props.onCardClick(props.card);
    }
}

export default Card;