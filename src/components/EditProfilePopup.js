import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleClickSubmit();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onClickOverlay={props.onClickOverlay}
            buttonText={props.isSubmitting ? "Сохранение..." : "Сохранить"}
            handleClickSubmit={props.handleClickSubmit}
            onSubmit={handleSubmit}
        >

            <input type="text" id="input-name" required minLength="2" maxLength="40" name="name"
                placeholder="Имя профиля" className="form__input form__input_type_name"
                value={name} onChange={handleChangeName} />
            <span className="input-name-error form__input-error"></span>
            <input type="text" id="input-description" required minLength="2" maxLength="200" name="about"
                placeholder="Описание профиля" className="form__input form__input_type_description"
                value={description} onChange={handleChangeDescription} />
            <span className="input-description-error form__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;