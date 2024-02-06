/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 10:13:35
 * @FilePath: \electron-serve\src\instance\entities\instance.entity.ts
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Instance {
  // 主键
  @PrimaryGeneratedColumn()
  id: number;
  // 父级的id
  @Column()
  parentId: string;
  //缩略图
  @Column()
  thumbnail: string;
  // 画布配置
  @Column()
  GraphConfig: string;
  // 创建时间
  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
  // 更新时间
  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  UpdateTime: Date;
}
