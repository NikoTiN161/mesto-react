import { useRef } from 'react'

function PopupWithForm(props) {

    const formRef = useRef();

    return (
        <div className={`overlay overlay_type_${props.name} ${props.isOpen && 'overlay_opened'}`} onClick={props.onClickOverlay}>
            <div className="overlay__container">
                <button type="button" className="overlay__close" onClick={props.onClose}></button>
                <form onSubmit={props.onSubmit} ref={formRef} action="/" noValidate name={`form_type_${props.name}`} className={`form form_type_${props.name}`}>
                    <h2 className="form__header">{props.title}</h2>
                    {props.children}
                    <button type="submit" onClick={props.handleClickSubmit} className="form__save-button">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;