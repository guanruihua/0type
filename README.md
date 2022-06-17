# 描述

## ts 内置常用 & 拓展

> 拓展内置类型名前加`E`, 表示对原有的类型进行拓展

### `Record<K, T>`

> 生成属性为`K`, 类型为`T`的类型几何
> `K` 只支持 `number`, `string` , `symbol` 的类型

```ts
 const t1: Record<'s' |  -1 | symbol, number> = {
  's': 123,
  '-1': 123,
  [Symbol(1)]: 123
 }

```

#### `ERcord<K, T>`

> 拓展`K`的支持类型 `null, undefined, boolean`

```ts
 const te1: ERecord<null | undefined| true | false | '12', 1> = {
  null: 1,
  undefined: 1,
  false: 1,
  true: 1,
  12: 1
 }
```

### `Partial<T>`

> 全部变可选

```ts
 type tt = {
  a: number,
  b: number
 }

 const t2: Partial<tt> = {}
```

### `Required<T>`

> 全部变必填

```ts
 type tt = {
  a?: number,
  b: number
 }

 const t3: Required<tt> = {
  a: 0,
  b: 0
 }
```

### `Readonly<T>`

> 全部变只读

```ts
 type tt = {
  a: number,
  b: number
 }
 type t1 = Readonly<tt>
 // 等同于
 type t2 = {
  readonly a: number;
  readonly b: number;
 }
```

### `Pick<T,K>`

> 提取指定属性

```ts
 type tt = {
  n: number,
  n2: number,
  s: string,
  s2: string,
 }
 const t1: Pick<tt, 'n'> = {
  n: 1
 }
 const t2: Pick<tt, 'n'|'s'> = {
  n: 1,
  s: 's'
 }
```

### `Exclude<T,U>`

> 从`T`中排除掉所有包含`U`的属性

```ts
 type tt = number | string | boolean
 const t1: Exclude<tt, number|string> =  true
 const t2: Exclude<tt, number|boolean> = '12'
```

### `Extact<T,U>`

> 提取T和U都有的

```ts
 type tt = number | string | boolean
 const t1: Extract<tt, number> =  12
 const t2: Extract<tt, boolean> = true
```

### `NonNullable<T>`

> 去除掉`null`和`underfined`

```ts
// 不可以为 null 和 undefined
const t1: NonNullable<number> = 1
const t2: NonNullable<123> = 123
```

### `Omit<T,K>`

> 忽略T中的K属性

## 基础类型

| 类型             | 描述               | 预期                                                                     |
| :--------------- | :----------------- | :----------------------------------------------------------------------- |
| `NumberLike`     | 可转`number`的类型 | <code> number \| \`${number}\` </code>                                   |
| `CanStringified` | 可转`string`的类型 | <code>string \| number \| bigint \| boolean \| null \| undefined </code> |

## ts拓展
