import styled from "styled-components";
import { themeFirstColors, themeSecondColors } from "../../global-styles";

const Contacts = styled.div`
    margin: 0 33vw;
    border-radius: 2em;
    padding: 1vw 2vw;
    ${themeFirstColors};
`

const ContactsButton = styled.button`
    ${themeSecondColors};
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