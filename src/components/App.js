import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import React from 'react'
import { useState } from 'react'

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setIsCardPopupOpen(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsCardPopupOpen(false);
    }

    return (
        <>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
            <Footer />

            <PopupWithForm
                title="Обновить аватар"
                name="update-avatar"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
            >
                <input type="url" id="input-url" required name="link" placeholder="Ссылка на картинку"
                    className="form__input form__input_type_link" />
                <span className="input-url-error form__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                title="Редактировать профиль"
                name="edit-profile"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
            >
                <input type="text" id="input-name" required minLength="2" maxLength="40" name="name"
                    placeholder="Имя профиля" className="form__input form__input_type_name" />
                <span className="input-name-error form__input-error"></span>
                <input type="text" id="input-description" required minLength="2" maxLength="200" name="about"
                    placeholder="Описание профиля" className="form__input form__input_type_description" />
                <span className="input-description-error form__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                title="Новое место"
                name="add-card"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
            >
                <input type="text" id="input-title" required minLength="2" maxLength="30" name="name"
                    placeholder="Название" className="form__input form__input_type_title" />
                <span className="input-title-error form__input-error"></span>
                <input type="url" id="input-link" required name="link" placeholder="Ссылка на картинку"
                    className="form__input form__input_type_link" />
                <span className="input-link-error form__input-error"></span>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                isOpen={isCardPopupOpen}
                onClose={closeAllPopups}
            />
        </>
    );
}

export default App;
