function PopupWithForm(props) {
    return (
        <div className={`overlay overlay_type_${props.name} ${props.isOpen && 'overlay_opened'}`}>
            <div className="overlay__container">
                <button type="button" className="overlay__close" onClick={props.onClose}></button>
                <form action="/" noValidate name={`form_type_${props.name}`} className={`form form_type_${props.name}`}>
                    <h2 className="form__header">{props.title}</h2>
                    {props.children}
                    <button type="submit" className="form__save-button">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;