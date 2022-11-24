import { CreateUserInput } from './create-user.input';
import { InputType, Field, HideField, PartialType } from '@nestjs/graphql';
import { IsString, IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {

  @Field()
  id: number;

  @IsAlpha()
  @Field(() => String)
  username: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @Field()
  password: string;

  @IsString()
  @Field(() => String)
  avatar: string;
}
