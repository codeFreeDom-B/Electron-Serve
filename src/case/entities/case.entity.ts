/*
 * @Author: SUN HENG
 * @Date: 2024-01-31 16:45:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:04:38
 * @FilePath: \electron-serve\src\case\entities\case.entity.ts
 * @Description:
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Case {
  // 实例id
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 实例名称
  @Column()
  name: string;

  //实例密码
  @Column()
  password: string;

  // 是否发布
  @Column({ default: false })
  isPublish: boolean;

  //实例背景图
  @Column({ type: 'longtext' })
  backgroundUrl: string;

  //创建时间
  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
}
