import sloth from '../../images/sloth.webp';
import s from './HomePage.module.css';
import clsx from 'clsx';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={clsx('container', s.homePage)}>
        <h1 className={s.title}>Книга контактів</h1>
        <div className={s.wrapper}>
          <div className={s.about}>
            <img src={sloth} alt="sloth" width={400} className={s.img} />
            <div className={s.descriptionText}>
              <p className={s.text}>
                Вітаю! Я, Скобліков Станіслав, і цей додаток створено на React у рамках мого
                навчання на курсах Frontend-розробки. <br /> Він дозволяє зручно зберігати,
                додавати, видаляти та фільтрувати контакти. Простий інтерфейс і сучасний стек
                технологій забезпечують комфортну взаємодію з додатком.
              </p>
            </div>
          </div>
          <div className={s.description}>
            <h3>Використані технології:</h3>
            <ul>
              <li>
                <p>
                  <span>React</span> – для створення інтерфейсу користувача
                </p>
              </li>
              <li>
                <p>
                  <span>React Router</span> – для навігації між сторінками
                </p>
              </li>
              <li>
                <p>
                  <span>Redux Toolkit</span> – для управління станом
                </p>
              </li>
              <li>
                <p>
                  <span>Formik + Yup</span> – для роботи з формами та валідацією
                </p>
              </li>
              <li>
                <p>
                  <span>Material UI</span> – для сучасного дизайну
                </p>
              </li>
              <li>
                <p>
                  <span>Axios</span> – для запитів до бекенду
                </p>
              </li>
              <li>
                <p>
                  <span>Persist</span> – для збереження даних користувача в LocalStorage
                </p>
              </li>
              <li>
                <p>
                  <span>React Hot Toast</span> - для відображення вспливаючих повідомлень
                </p>
              </li>

              <li>
                <p>
                  <span>clsx</span> - утиліта для зручного поєднання класів
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

<span></span>;
