/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:52:35
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 13:30:10
 * @FilePath: \electron-serve\src\user\entities\user.entity.ts
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
