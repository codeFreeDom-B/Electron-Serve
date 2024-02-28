/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-28 16:46:17
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
  @Column({ type: 'longtext' })
  thumbnail: string;
  // 画布节点
  @Column({ type: 'longtext' })
  GraphConfig: string;
  // 画布配置参数
  @Column({ type: 'longtext' })
  GraphOption: string;
  // 是否发布
  @Column({ default: false })
  isPublish: boolean;
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
