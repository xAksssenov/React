import styled from "styled-components";

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

export const ContactsPage = () => {
    return (
        <>
            <h1>Контактная страница</h1>
            <Contacts>
                <p>Адрес: Большая Семеновская</p>
                <p>Телефон: + 7 (920) 600-02-20</p>
                <p>Почта: aks.kirill32@gmail.com</p>
                <ContactsButton>Написать</ContactsButton>
            </Contacts>
        </>
    )
}

export default ContactsPage;