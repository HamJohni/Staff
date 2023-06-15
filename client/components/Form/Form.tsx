import f from './Form.module.scss'
import {Button, Input} from '@chakra-ui/react'
import {useState} from "react";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";

const Form = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <form className={f.form}>
            <h2>
                Войдите
            </h2>

            <div className={f.form__content}>

                <Input placeholder='Email' className={f.form__input} />

                <label>
                    <Input placeholder='Password' className={f.form__input}/>
                    {/*<span>*/}
                    {/*    <AiFillEye/>*/}
                    {/*</span>*/}

                    {/*<span>*/}
                    {/*    <AiFillEyeInvisible/>*/}
                    {/*</span>*/}

                </label>

            </div>

            <Button colorScheme="blue">Войти</Button>
        </form>
    );
};

export default Form;