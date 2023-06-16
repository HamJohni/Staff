import f from './Form.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {HiEye, HiEyeOff} from "react-icons/hi";
import {useState} from "react";

type fromData = {
    name: string | null,
    email: string,
    password: string,
    confirm: string,
}

const Form = () => {
    const {pathname} = useRouter()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const { register, handleSubmit,getValues, formState: { errors } } = useForm<fromData>();

    const submit = (data: fromData) => {
        pathname === '/register'? auth(data) : login(data)
    }

    const login = (data) => {

    }

    const auth = (data) => {

    }

    return (
        <form noValidate className={f.form} onSubmit={handleSubmit(submit)}>
            <h2>
                {
                    pathname === '/register' ?
                        "Зарегистрируйтесь" : "Войдите"
                }
            </h2>

            <div className={f.form__content}>

                {
                    pathname === '/register' ?
                        <label>
                            <input
                                {...register('name', {
                                    required: {
                                        message: "Обязательное поле",
                                        value: true
                                    }
                                })}
                                type="text"
                                placeholder='Имя'
                                className={f.form__input} />
                            <p>{errors.name && errors.name.message}</p>
                        </label> : ''
                }

                <label>
                    <input
                        {...register('email', {
                            required: {
                                message: "Обязательное поле",
                                value: true
                            },
                            pattern: {
                                message: "Напишите правильно",
                                value: /^[^]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })}
                        type="email"
                        placeholder='Email'
                        className={f.form__input} />
                    <p>{errors.email && errors.email.message}</p>
                </label>

                <label>
                    <input

                        {...register('password',{
                            required: {
                                message: "Обязательное поле",
                                value: true
                            },
                            pattern:{
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                message: "Слишком легкий пароль"
                            }})}

                        type={show? "text" : "password"}
                        placeholder='Пароль'
                        className={f.form__input}/>

                    <span onClick={() => setShow(prev => !prev)}>
                        {
                            !show? <HiEye size={20}/>:<HiEyeOff size={20}/>
                        }
                    </span>

                    <p>{errors.password && errors.password.message}</p>
                </label>

                {
                    pathname === '/register' ?
                        <label>
                            <input
                                {...register('confirm', {
                                    required: {
                                        message: "Подтвердите пароль",
                                        value: true
                                    },
                                    validate: (v) => {
                                        if(getValues('password') !== v){
                                            return "Не совпадает"
                                        }
                                    }
                                })}
                                type={show2? "text" : "password"}
                                placeholder='Подтвердите пароль'
                                className={f.form__input}/>

                            <span onClick={() => setShow2(prev => !prev)}>
                                {
                                    !show2? <HiEye size={20}/>:<HiEyeOff size={20}/>
                                }
                            </span>

                            <p>{errors.confirm && errors.confirm.message}</p>
                        </label> : ''
                }

            </div>

            <div className={f.form__box}>
                <button>
                    {
                        pathname === '/register' ? "Зарегистрироваться" : "Войти"
                    }
                </button>
            </div>
            {
                pathname === '/register' ?
                    <p>Уже есть аккаунт? <Link href="/login">Войти</Link></p>
                    :
                    <p>Нет аккаунта? <Link href="/register">Зарегистрироваться</Link></p>
            }

        </form>
    );
};

export default Form;