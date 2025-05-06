import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const LoginSchema = z.object({
  email: z.string().email({message: 'Невалидный email'}),
  password: z.string().min(8, {message: 'Ненадёжный пароль'}),
});

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onFormSubmit = (data) => {
    console.log(data);
  //  отправка на сервер
  };

  return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register('email')}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            {...register('password')}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button type="submit">Войти</button>
      </form>
  );
};

export default LogInForm;