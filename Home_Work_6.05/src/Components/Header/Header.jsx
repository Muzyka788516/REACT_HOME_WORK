import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import cls from '../Header/Header.module.css';

function Header() {
  return (
    <div className={cls.nav_menu}>
      <img src={logo} alt="" />
      <h1>Pallas cat studio</h1>
      <ul>
        <li>Главная</li>
        <li>
          <Link to={'/about'}>О компании</Link>
        </li>
        <li>
          <Link to={'/modalInfo'}>Модалки</Link>
        </li>
        <li>Контакты</li>
        <li>Партнеры</li>
      </ul>
    </div>
  );
}

export default Header;
