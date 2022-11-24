import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { IsString, IsAlpha, IsEmail } from 'class-validator';

@Table({ tableName: 'users', timestamps: true })
@ObjectType()
export class User extends Model {

  @Field(() => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @IsAlpha()
  @Field(() => String)
  @Column({ type: DataType.STRING(100), allowNull: false, unique: true })
  username: string;

  @IsEmail()
  @Field(() => String)
  @Column({ type: DataType.STRING(100), allowNull: false, unique: true })
  email: string;

  @IsString()
  @HideField()
  @Column({ type: DataType.STRING(100), allowNull: false })
  password: string;

  @IsString()
  @Field(() => String)
  @Column({ type: DataType.TEXT, allowNull: false, defaultValue: '' })
  avatar: string;

  @Field(() => String, { nullable: true })
  token: string;
}
