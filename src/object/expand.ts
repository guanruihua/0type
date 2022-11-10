import { ObjectKey } from '.'
/**
 * Record 拓展
 */

export type ERecord<K extends ObjectKey | undefined | null| boolean, T> = {
	[P in 
		K extends ObjectKey ? K : 
			K extends undefined | null | true | false ? `${K}`:
		string
	]: T
}