/**
 * 类 function
 */
export type FunctionLike = (...args: any[]) => any | Promise<any>

/**
 * 任意 function
 */
export type AnyFunction = (...arg: any) => any | Promise<any>

/**
 * 标准 function
 */
export type Function<Params extends unknown[], Result = void> = (
  ...args: Params
) => Result

/**
 * 标准 
 */
export type AsyncFuncFunction<T extends [], U> = (...arg: T) => Promise<U>
