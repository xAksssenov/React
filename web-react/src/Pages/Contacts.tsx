import { useForm } from "react-hook-form"
import { useState } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PageDocument from "../components/PageDocument"
import { Contacts, ContactsButton, ContactsInput, ContactsInputLabel } from "../global-styles"

interface IMyForm {
    name: string
    text: string
    picture: FileList
}

export const ContactsPage = () => {
    const [task,setTasks] = useState<IMyForm>({} as IMyForm)

    const {
        register,
        handleSubmit,
        formState,
    } = useForm<IMyForm>({
        mode: "onBlur",
    })

    const { errors, isValid } = formState

    const saveElement = (data: IMyForm) => {
        setTasks(data)
    }

    return (
        <>
            <h1>Контактная страница</h1>

            <Contacts>
                <p>Адрес: Большая Семеновская</p>
                <p>Телефон: + 7 (920) 600-02-20</p>
                <p>Почта: aks.kirill32@gmail.com</p>
            </Contacts>

            <Contacts>

            <h2>Заполните поля для генерации PDF</h2>

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
                    {...register('text', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 10,
                            message: "Нужно больше символов"
                        }
                    })}
                />

                <div>{errors.text?.message}</div>

                <ContactsInputLabel>
                    Выберите файл изображения

                    <ContactsInput
                        type="file"
                        accept="image/*"
                        {...register("picture", {
                            required: "Вставьте изображение",
                            minLength: {
                                value: 1,
                                message: "Необходимо изображение"
                            }
                        })}
                    />

                </ContactsInputLabel>

                <div>{errors.picture?.message}</div>

                <ContactsButton type="submit" disabled={!isValid}>Сохранить</ContactsButton>
            </form>
            </Contacts>

            <Contacts>
            {
                task?.name && task?.text && task?.picture && (
                    <PDFDownloadLink
                        document={ 
                            <PageDocument
                                name={task.name}
                                text={task.text}
                                picture={task.picture} 
                            />
                        }
                        fileName="Текстовый документ.pdf"
                    >
                    {({ loading, error }) => {
                        try {
                            if (loading) return "Скачивание файла..."
                            if (error) throw new Error("Ошибка генерации...")

                            return "Скачайте ваш файл!"
                        } catch (error) {
                            return "Ошибка попытки скачивания PDF"
                        }
                    }}
                    </PDFDownloadLink>
                )
            }
            </Contacts>
        </>
    )
}

export default ContactsPage
