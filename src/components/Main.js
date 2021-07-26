import api from '../utils/Api.js'
import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userId, setUserId] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setUserId(user._id);
                setCards(cards);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main className="content page__content">
            <section className="profile">
                <button type="button" style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" onClick={props.onEditAvatar}></button>
                <div className="profile__info">
                    <h1 className="profile__username">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__items">{
                    cards.map((card) => {
                        return (
                            <Card
                                key={card._id}
                                card={card}
                                userId={userId}
                                onCardClick={props.onCardClick}
                                selectedCard={props.selectedCard}
                            />
                        )
                    })
                }
                </ul>
            </section>
        </main>
    )
}

export default Main;