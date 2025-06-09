import { FormProvider, useForm } from 'react-hook-form';
import { LoginUserDto } from '@myorg/contracts';
import { Button, Input } from '@myorg/ui';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useLoginUser } from '@/api/user';
const loginUserResolver = classValidatorResolver(LoginUserDto);

export const LoginForm = () => {
  const form = useForm<LoginUserDto>({
    resolver: loginUserResolver,
  });

  const { mutate: login } = useLoginUser();

  const onSubmit = (data: LoginUserDto) => {
    login(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-sm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="gap-xxxs flex flex-col">
          <label
            htmlFor="email"
            className="font-medium text-md text-surface-medium"
          >
            Электронная почта
          </label>
          <Input placeholder="test@list.ru" {...form.register('email')} />
        </div>

        <div className="gap-xxxs flex flex-col">
          <label
            htmlFor="password"
            className="font-medium text-md text-surface-medium"
          >
            Пароль
          </label>
          <Input {...form.register('password')} type="password" />
        </div>

        <Button type="submit" className="mt-xxxxs" size={'lg'}>
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
