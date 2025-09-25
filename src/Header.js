import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="first-header">
        <div className="logo"><p>18</p></div>
        <div className="main-header">
          <a className="header-zagolovok">Главная</a>
          <div className="header-border" />
          <a className="header-zagolovok">Расписание</a>
          <div className="header-border" />
          <a className="header-zagolovok">Домашнее задание</a>
        </div>
      </div>
      <a className="second-header">
        <img className="params" src="/params.svg" />
      </a>
    </header>
  );
}

export default Header;
