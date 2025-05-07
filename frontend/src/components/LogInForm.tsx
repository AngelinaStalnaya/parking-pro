import { Form, Input, Button } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginSchema = z.object({
  email: z.string().email('Введён невалидный email'),
  password: z.string().min(8, 'Пароль должен быть минимум 8 символов'),
});

const LogInForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onFormSubmit = (data) => {
    console.log(data);
  };


  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col min-w-[250px] w-auto border-2 rounded-2xl border-secondary p-3'>
      <Input
        isRequired
        label='Email'
        labelPlacement='outside'
        type="email"
        id='email'
        size='md'
        color='secondary'
        variant='bordered'
        {...register('email')}
      />
      {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      <Input
        isRequired
        label='Пароль'
        labelPlacement='outside'
        type="password"
        id='password'
        size='md'
        color='secondary'
        variant='bordered'
        {...register('password')}
      />
      {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
      <Button
        type="submit"
        color='secondary'
        variant='shadow'
        size='md'
        radius='full'
        isLoading={isSubmitting}
      >
        Войти
      </Button>
    </Form >
  );
};
export default LogInForm;