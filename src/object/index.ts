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



/**
 * 对象类型
 */
export type ObjectType<Value = unknown> = Record<string, Value>

/**
 * Map类型
 */
export type MapType<Value = unknown> = Map<string | number, Value>

/**
 * Set类型
 */
export type SetType<Value = unknown> = Set<Value>
