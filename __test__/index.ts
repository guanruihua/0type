import { ArrayLike, ERecord, FunctionLike, ObjectLike, StringLike } from '../src'

{
	interface btype{
		a:'aaa'
	}
}

{
	const t1: StringLike = '123'
	const t2: StringLike = 123
	const t3: StringLike = true
	const t4: StringLike = false
	const t5: StringLike = null
	const t6: StringLike = undefined
	const t7: StringLike = 9007199254740991n
}

{

	const t1: ArrayLike = []
	const t2: ArrayLike = [1, 3]
	const t22: Array<number> = [1, 2, 3]
	// const t3:ArrayLike = true
	// const t4:ArrayLike = false
	// const t5:ArrayLike = null
	// const t6:ArrayLike = undefined
	// const t7:ArrayLike = 9007199254740991n
}
{

	const t1: FunctionLike = () => { }
	const t2: FunctionLike = () => {
		return
	}
	const t3: FunctionLike = async () => {

	}
	const t4: FunctionLike = () => {
		return Promise.resolve(1)
	}
	// const t5: FunctionLike = null
	// const t6: FunctionLike = undefined
	// const t7: FunctionLike = 9007199254740991n
}
{

	const t1: ObjectLike = []
	const t2: ObjectLike = {}
	const t3: ObjectLike = {
		a: '123'
	}
	// const t4:ObjectLike = false
	// const t5:ObjectLike = null
	// const t6:ObjectLike = undefined
	// const t7:ObjectLike = 9007199254740991n
}

{
	// 内置
	const t1: Record<'s' | -1 | symbol, number> = {
		's': 123,
		'-1': 123,
		[Symbol(1)]: 123
	}
	// 拓展
	const te1: ERecord<null | undefined | true | false | '12', 1> = {
		null: 1,
		undefined: 1,
		false: 1,
		true: 1,
		12: 1
	}

	type tt = {
		a: number,
		b: number
	}

	const t2: Partial<tt> = {}
	const t3: Required<tt> = {
		a: 0,
		b: 0
	}
}

{

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
}

{
	type tt = {
		n: number,
		n2: number,
		s: string,
		s2: string,
	}
	const t1: Pick<tt, 'n'> = {
		n: 1
	}
	const t2: Pick<tt, 'n' | 's'> = {
		n: 1,
		s: 's'
	}
}

{
	type tt = number | string | boolean
	const t1: Exclude<tt, number | string> = true
	const t2: Exclude<tt, number | boolean> = '12'
}

{
	type tt = number | string | boolean
	const t1: Extract<tt, number> = 12
	const t2: Extract<tt, boolean> = true
}
{
	const t1: NonNullable<number> = 1
	const t2: NonNullable<123> = 123
}
