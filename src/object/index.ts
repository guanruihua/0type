export * from './expand'

/**
 * 类 object
 */
export type ObjectLike = {
  [key: string]: any
}
/**
 * object key 支持类型
 */
export type ObjectKey = number | string | symbol

/**
 * 取出所有属性值
 */
export type ValueOf<T> = T[keyof T]

/**
 * 取出所有的属性名
 */
export type Keyof<T> = keyof T

