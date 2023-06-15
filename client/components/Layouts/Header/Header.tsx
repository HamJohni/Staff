import h from './Header.module.scss'
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineLogout} from "react-icons/ai";
import Link from "next/link";

const Header = () => {
    return (
        <header className={h.header}>
            <div className="container">
                <nav className={h.header__nav}>
                    <Link href='/'>Сотрудники</Link>

                    <div className={h.header__left}>
                        <p className={h.header__left_btn}>
                            <AiOutlineUser size={25}/>
                            <span>Зарегистрироваться</span>
                        </p>

                        <p className={h.header__left_btn}>
                            <AiOutlineLogout size={25}/>
                            <span>Войти</span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;