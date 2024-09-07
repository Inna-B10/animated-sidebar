import { IMenuItem } from './menu.data'

export default function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<a href={item.link} rel='noreferrer noopener'>
			<item.icon />
			<span>{item.name}</span>
		</a>
	)
}
