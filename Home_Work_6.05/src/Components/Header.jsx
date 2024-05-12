import logo from "../Components/Images/Logo.png";
import cls from "../Components/Header.module.css";

function Header() {
  return (
    <div className={cls.nav_menu}>
      <img src={logo} alt="" />
      <h1>Pallas cat studio</h1>
      <ul>
        <li>Главная</li>
        <li>О компании</li>
        <li>Модалки</li>
        <li>Контакты</li>
        <li>Партнеры</li>
      </ul>
    </div>
  );
}

export default Header;
