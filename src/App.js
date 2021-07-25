import './App.css';

function App() {
  return (
    <body className="page">
    <header className="header page__header">
        <a href="https://nikotin161.github.io/mesto/" target="_blank" className="header__logo" rel="noreferrer"></a>
    </header>

    <main className="content page__content">
        <section className="profile">
            <button type="button" className="profile__avatar"></button>
            <div className="profile__info">
                <h1 className="profile__username"></h1>
                <p className="profile__description"></p>
            </div>
            <button type="button" className="profile__edit-button"></button>
            <button type="button" className="profile__add-button"></button>
        </section>
        <section className="elements">
            <ul className="elements__items">
            </ul>
        </section>
    </main>

    <footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
    </footer>

    <div className="overlay overlay_type_edit-profile">
        <div className="overlay__container">
            <button type="button" className="overlay__close"></button>
            <form action="/" novalidate name="form_type_edit-profile" className="form form_type_edit-profile">
                <h2 className="form__header">Редактировать профиль</h2>
                <input type="text" id="input-name" required minlength="2" maxlength="40" name="name"
                    placeholder="Имя профиля" className="form__input form__input_type_name"/>
                <span className="input-name-error form__input-error"></span>
                <input type="text" id="input-description" required minlength="2" maxlength="200" name="about"
                    placeholder="Описание профиля" className="form__input form__input_type_description"/>
                <span className="input-description-error form__input-error"></span>
                <button type="submit" className="form__save-button">Сохранить</button>
            </form>
        </div>
    </div>
    <div className="overlay overlay_type_update-avatar">
        <div className="overlay__container">
            <button type="button" className="overlay__close"></button>
            <form action="/" novalidate name="form_type_update-avatar" className="form form_type_update-avatar">
                <h2 className="form__header">Обновить аватар</h2>
                <input type="url" id="input-url" required name="link" placeholder="Ссылка на картинку"
                    className="form__input form__input_type_link"/>
                <span className="input-url-error form__input-error"></span>
                <button type="submit" className="form__save-button">Сохранить</button>
            </form>
        </div>
    </div>
    <div className="overlay overlay_type_detele-card">
        <div className="overlay__container">
            <button type="button" className="overlay__close"></button>
            <form action="/" novalidate name="form_type_detele-card" className="form form_type_detele-card">
                <h2 className="form__header">Вы уверены?</h2>
                <button type="submit" className="form__save-button">Да</button>
            </form>
        </div>
    </div>
    <div className="overlay overlay_type_add-card">
        <div className="overlay__container">
            <button type="button" className="overlay__close"></button>
            <form action="/" novalidate name="form_type_add-card" className="form form_type_add-card">
                <h2 className="form__header">Новое место</h2>
                <input type="text" id="input-title" required minlength="2" maxlength="30" name="name"
                    placeholder="Название" className="form__input form__input_type_title"/>
                <span className="input-title-error form__input-error"></span>
                <input type="url" id="input-link" required name="link" placeholder="Ссылка на картинку"
                    className="form__input form__input_type_link"/>
                <span className="input-link-error form__input-error"></span>
                <button type="submit" disabled className="form__save-button form__save-button_disabled">Создать</button>
            </form>
        </div>
    </div>
    <div className="overlay overlay_type_popup-image">
        <div className="overlay__container overlay__container_type_popup-image">
            <button type="button" className="overlay__close"></button>
            <figure className="popup-image">
                <img src="<%=require('./images/noimage.png')%>" alt="." className="popup-image__image"/>
                <figcaption className="popup-image__caption"></figcaption>
            </figure>
        </div>
    </div>

    <template id="element">
        <li className="elements__item">
            <img src="#" alt="фотография" className="elements__image"/>
            <div className="elements__container">
                <h2 className="elements__header"></h2>
                <div className="elements__container elements__container_likes">
                    <button type="button" className="elements__like-button"></button>
                    <span className="elements__counter-likes"></span>
                </div>
                <button type="button" className="elements__delete-button"></button>
            </div>
        </li>
    </template>

</body>
  );
}

export default App;
