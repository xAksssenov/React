import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contacts, ContactsButton, ContactsInput } from '../global-styles';
import authInstance from '../services/authInstance';
import { AuthContext } from '../services/AuthProvider';
import { toast } from 'sonner';
import axios from 'axios';

interface IAuthForm {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthForm>({
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
      navigate('/');
    }
  }, [setIsAuth, navigate]);

  const sendRequest: SubmitHandler<IAuthForm> = async (data) => {
    try {
      const response = await authInstance.post('/token/', data);
      const token = response.headers['authorization'];

      if (token) {
        localStorage.setItem('token', token);
        setIsAuth(true);
        navigate('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`Ошибка авторизации: ${error.response?.data?.message || error.message}`);
      } else {
        toast.error(`Ошибка авторизации: ${String(error)}`);
      }
    }
  };

  return (
    <Contacts>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(sendRequest)}>
        <ContactsInput
          {...register('username', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 2,
              message: 'Нужно больше символов',
            },
          })}
        />
        <div>{errors.username?.message}</div>

        <ContactsInput
          type="password"
          {...register('password', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 4,
              message: 'Нужно больше символов',
            },
          })}
        />
        <div>{errors.password?.message}</div>

        <ContactsButton type="submit" disabled={!isValid}>
          Войти
        </ContactsButton>
      </form>
    </Contacts>
  );
};

export default LoginForm;
