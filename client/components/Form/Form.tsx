import f from './Form.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {HiEye, HiEyeOff} from "react-icons/hi";
import {useState} from "react";

type fromData = {
    name: string | null,
    email: string,
    password: string
    confirm: string
}

const Form = () => {
    const {pathname} = useRouter()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<fromData>();

    return (
        <form className={f.form}>
            <h2>
                {
                    pathname === '/register' ?
                        "Зарегистрируйтесь" : "Войдите"
                }
            </h2>

            <div className={f.form__content}>

                <label>
                    <input placeholder='Имя' className={f.form__input} />
                    <p>Обязательное поле</p>
                </label>

                <label>
                    <input placeholder='Email' className={f.form__input} />
                    <p>Обязательное поле</p>
                </label>

                <label>
                    <input placeholder='Пароль' className={f.form__input}/>
                    <span onClick={() => setShow(prev => !prev)}>
                        {
                            !show? <HiEye size={20}/>:<HiEyeOff size={20}/>
                        }
                    </span>
                    <p>Обязательное поле</p>
                </label>

                <label>
                    <input placeholder='Подтвердите пароль' className={f.form__input}/>
                    <span onClick={() => setShow2(prev => !prev)}>
                        {
                            !show2? <HiEye size={20}/>:<HiEyeOff size={20}/>
                        }
                    </span>
                    <p>Обязательное поле</p>
                </label>

            </div>

            <div className={f.form__box}>
                <button>Войти</button>
            </div>

            <p>Нет аккаунта? <Link href="/register">Зарегстрируйтесь</Link></p>
        </form>
    );
};

export default Form;