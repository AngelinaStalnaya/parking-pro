import { Form, Input, Button } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInSchema = z.object({
  email: z.string().email('Введён невалидный email'),
  password: z.string().min(8, 'Пароль должен быть минимум 8 символов'),
  confirmPassword: z.string().min(8, 'Пароль должен быть минимум 8 симолов'),
  name: z.string().min(2)
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});

const SignInForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SignInSchema),
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
      <Input
        isRequired
        label='Повторите пароль'
        labelPlacement='outside'
        type="password"
        id='confirmPassword'
        size='md'
        color='secondary'
        variant='bordered'
        {...register('confirmPassword')}
      />
      {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
      <Input
        isRequired
        label='Имя'
        labelPlacement='outside'
        type="text"
        id='name'
        size='md'
        color='secondary'
        variant='bordered'
        {...register('name')}
      />
      <Button
        type="submit"
        color='secondary'
        variant='flat'
        isLoading={isSubmitting}
      >
        Отправить
      </Button>
    </Form >
  );
};
export default SignInForm;