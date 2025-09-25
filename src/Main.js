import './Main.css';

function Main() {
  return (
    <div className="main">
        <div className="title">
            <h2 className="title-main">Курский Государственный Политехнический Колледж</h2>
            <i><p className="title-desc">Наш диплом – гарантия вашего успеха</p></i>
        </div>
        <div className="welcome-card">
            <div className="welcome-title">
                <div className="circle-welcome" />
                <h1>Добро пожаловать!</h1>
            </div>
            <div className="card-desc">
                <div className="desc">
                    <div className="left-border-desc"></div>
                    <div className="desc-main-info">
                        <div className="desc-info">
                            <p className="main-desc-info">Это отдельный, неофициальный сайт группы им-18, он сделан для удобства студентов.</p>
                            <p className="down-desc-info">(например просмотра расписания или отслеживание домашнего задания)</p>
                        </div>
                        <div className="desc-info">
                            <p className="main-desc-info">Данный сайт — это лишь экспериментальная функция. Пожалуйста, не относитесь к этому серьёзно.</p>
                        </div>
                        <div className="date-card">10 сентября, 2025 г.</div>
                    </div>
                </div>
                <div className="photo">
                    <div className="photo-footer">
                        <div className="photo-desc">Наша фотография</div>
                        <div className="photo-desc-date">1 сентября, 2025 г.</div>
                    </div>
                    <img className="photo-main-cover" src="main.jpg" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;
