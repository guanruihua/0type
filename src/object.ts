
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
export type ValueOf<T = any> = T[keyof T]

/**
 * 取出所有的属性名
 */
export type Keyof<T = any> = keyof T

/**
 * 对象类型
 */
export type ObjectType<Value = any> = Record<string, Value>

/**
 * Map类型
 */
export type MapType<Value = any> = Map<string | number, Value>

/**
 * Set类型
 */
export type SetType<Value = any> = Set<Value>
