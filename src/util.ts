/**
 * 深度遍历 并把属性变成只读
 */
export type DeepReadonly<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>
}

/**
 * 去除所有只读
 */
export type Mutable<T> = {
	-readonly [P in keyof T]: T[P]
}