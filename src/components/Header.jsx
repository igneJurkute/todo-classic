import { Link } from 'react-router-dom';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <img src="/" alt="Logo" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/404'>404</Link>

                <Link to='/e5r4eg5fdefrgsdr'>Nesamone</Link>
            </nav>
        </header>
    );
}