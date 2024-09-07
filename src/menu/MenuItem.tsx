import { useAtomValue } from 'jotai'
import { isCollapsedAtom } from '../store'
import { IMenuItem } from './menu.data'

export default function MenuItem({ item }: { item: IMenuItem }) {
	const isCollapsed = useAtomValue(isCollapsedAtom)
	return (
		<a href={item.link} rel='noreferrer noopener' target='_blank'>
			<item.icon />
			{!isCollapsed && <span>{item.name}</span>}
		</a>
	)
}
