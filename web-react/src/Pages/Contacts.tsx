import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PageDocument from '../components/PageDocument';

const Contacts = styled.div`
  margin: 1vw 33vw;
  border-radius: 2em;
  padding: 0.2em;
  background-color: var(--theme-text);
  color: var(--theme);
  transition:
    background-color 0.25s,
    color 0.25s;
`;

const ContactsButton = styled.button`
  background-color: var(--theme);
  color: var(--theme-text);
  transition:
    background-color 0.25s,
    color 0.25s;
`;

const ContactsInputLabel = styled.label`
  background-color: var(--theme);
  color: var(--theme-text);
  transition:
    background-color 0.25s,
    color 0.25s;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 2em;
  display: inline-block;
  position: relative;
  width: fit-content;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ContactsInput = styled.input`
  background-color: var(--theme);
  color: var(--theme-text);
  transition:
    background-color 0.25s,
    color 0.25s;
  margin-bottom: 1em;
  padding: 1em;
  font-size: 1em;
  border-radius: 2em;
`;

interface IMyForm {
  name: string;
  text: string;
  picture: FileList;
}

export const ContactsPage = () => {
  const [task, setTasks] = useState<IMyForm | null>(null);

  const { register, handleSubmit, formState } = useForm<IMyForm>({
    mode: 'onBlur',
  });

  const { errors, isValid } = formState;

  const saveElement = (data: IMyForm) => {
    setTasks(data);
  };

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
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов',
              },
            })}
          />

          <div>{errors.name?.message}</div>

          <ContactsInput
            {...register('text', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 10,
                message: 'Нужно больше символов',
              },
            })}
          />

          <div>{errors.text?.message}</div>

          <ContactsInputLabel>
            Выберите файл изображения
            <ContactsInput
              type="file"
              accept="image/*"
              {...register('picture', {
                required: 'Вставьте изображение',
                minLength: {
                  value: 1,
                  message: 'Необходимо изображение',
                },
              })}
            />
          </ContactsInputLabel>

          <div>{errors.picture?.message}</div>

          <ContactsButton type="submit" disabled={!isValid}>
            Сохранить
          </ContactsButton>
        </form>
      </Contacts>

      <Contacts>
        {task?.name && task?.text && task?.picture && (
          <PDFDownloadLink
            document={<PageDocument name={task.name} text={task.text} picture={task.picture} />}
            fileName="Текстовый документ.pdf"
          >
            {({ loading, error }) => {
              try {
                if (loading) return 'Скачивание файла...';
                if (error) throw new Error('Ошибка генерации...');

                return 'Скачайте ваш файл!';
              } catch (error) {
                return 'Ошибка попытки скачивания PDF';
              }
            }}
          </PDFDownloadLink>
        )}
      </Contacts>
    </>
  );
};

export default ContactsPage;
