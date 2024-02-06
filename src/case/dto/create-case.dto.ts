/*
 * @Author: SUN HENG
 * @Date: 2024-01-31 16:45:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:01:48
 * @FilePath: \electron-serve\src\case\dto\create-case.dto.ts
 * @Description:
 */
export class CreateCaseDto {
  readonly name: string;
  readonly password: string;
  readonly backgroundUrl: string;
  readonly isPublish: boolean;
}
