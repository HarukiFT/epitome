import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Поле "name" обязательно для заполнения' })
  readonly name: string;

  @IsNotEmpty({ message: 'Поле "email" обязательно для заполнения' })
  @IsEmail({}, { message: 'Поле "email" должно быть валидным email\'ом' })
  readonly email: string;

  @IsString({ message: 'Поле "password" обязательно для заполнения' })
  @Length(8, 24, {
    message: 'Поле "password" должно быть не меньше 8 и не больше 24 символов',
  })
  readonly password: string;
}
