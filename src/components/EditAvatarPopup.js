import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {

    const urlRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.handleClickSubmit();
        props.onUpdateAvatar({
            link: urlRef.current.value,
        });
        urlRef.current.value = '';
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="update-avatar"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onClickOverlay={props.onClickOverlay}
            buttonText={props.isSubmitting ? "Сохранение..." : "Сохранить"}
            handleClickSubmit={props.handleClickSubmit}
            onSubmit={handleSubmit}

        >
            <input ref={urlRef} type="url" id="input-url" required name="link" placeholder="Ссылка на картинку"
                className="form__input form__input_type_link" />
            <span className="input-url-error form__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;