import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привет,меня зовут <em>Илья</em>
					</strong>
					<br />студент 3 курса
				</h1>
				<div className="header__text">
					<p>Учусь создавать крутые проекты.</p>
				</div>
				
			</div>
		</header>
	);
}

export default Header;