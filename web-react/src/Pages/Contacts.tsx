import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";


const Contacts = styled.div`
    margin: 0 33vw;
    border-radius: 2em;
    padding: 1vw 2vw;
    background-color: var(--theme-text);
    color: var(--theme);
    transition: background-color 0.25s, color 0.25s;
`

const ContactsButton = styled.button`
   background-color: var(--theme);
   color: var(--theme-text);
   transition: background-color 0.25s, color 0.25s;
`

const ContactsInput = styled.input`
   background-color: var(--theme);
   color: var(--theme-text);
   transition: background-color 0.25s, color 0.25s;
   margin-bottom: 1em;
   padding: 1em;
   font-size: 1em;
`

interface IMyForm {
    name: string;
    age: number;
    country: string;
}

export const ContactsPage = () => {

    const [tasks, setTasks] = useState<IMyForm[]>([])

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<IMyForm>({
        mode: "onBlur",
    })

    const { errors, isValid } = formState

    const saveElement = (data: IMyForm) => {
        setTasks((prev) => [...prev, data])
        reset()
    }

    return (
        <>
            <h1>Контактная страница</h1>
            <Contacts>
                <p>Адрес: Большая Семеновская</p>
                <p>Телефон: + 7 (920) 600-02-20</p>
                <p>Почта: aks.kirill32@gmail.com</p>
                <ContactsButton>Написать</ContactsButton>
            
            <form onSubmit={handleSubmit(saveElement)}>
                <ContactsInput
                    {...register('name', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 5,
                            message: "Нужно больше символов"
                        }
                    })}
                />
                <div>{errors.name?.message}</div>
                <ContactsInput
                    {...register('age', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 10,
                            message: "Нужно больше символов"
                        }
                    })}
                />
                <div>{errors.age?.message}</div>
                <ContactsInput
                    {...register('country', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 5,
                            message: "Нужно больше символов"
                        }
                    })}
                />
                <div>{errors.country?.message}</div>
                <ContactsButton type="submit" disabled={!isValid}>Сохранить</ContactsButton>
            </form>

            {
                tasks.map((task, index) =>
                    <p key={index}>
                        {task.name} - {task.age} - {task.country}
                    </p>
                )
            }
            </Contacts>
        </>
    )
}

export default ContactsPage;