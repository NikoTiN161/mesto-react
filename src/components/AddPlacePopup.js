import { useRef } from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {

    const nameInputRef = useRef();
    const linkInputRef = useRef();

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.handleClickSubmit();
        props.onAddPlace({
            name: nameInputRef.current.value,
            link: linkInputRef.current.value,
        });
        nameInputRef.current.value = '';
        linkInputRef.current.value = '';
    }

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onClickOverlay={props.onClickOverlay}
            buttonText={props.isSubmitting ? "Сохранение..." : "Сохранить"}
            handleClickSubmit={props.handleClickSubmit}
            onSubmit={handleAddPlaceSubmit}
        >
            <input ref={nameInputRef} type="text" id="input-title" required minLength="2" maxLength="30" name="name"
                placeholder="Название" className="form__input form__input_type_title" />
            <span className="input-title-error form__input-error"></span>
            <input ref={linkInputRef} type="url" id="input-link" required name="link" placeholder="Ссылка на картинку"
                className="form__input form__input_type_link" />
            <span className="input-link-error form__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;