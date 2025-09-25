import './Header.css';

function Header() {
  return (
    <header className="header" role="banner">
      <div className="first-header">
        <div className="logo" aria-label="Логотип группы"><p>18</p></div>
        <nav className="main-header" role="navigation" aria-label="Основное меню">
          <a className="header-zagolovok" role="button">Главная</a>
          <div className="header-border" aria-hidden="true" />
          <a className="header-zagolovok" role="button">Расписание</a>
          <div className="header-border" aria-hidden="true" />
          <a className="header-zagolovok" role="button">Домашнее задание</a>
        </nav>
      </div>
      <button className="second-header" aria-label="Настройки">
        <img className="params" src="/params.svg" alt="Иконка настроек" />
      </button>
    </header>
  );
}

export default Header;
