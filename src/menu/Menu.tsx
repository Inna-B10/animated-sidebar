import { MENU } from './menu.data'
import MenuItem from './MenuItem'

export default function Menu() {
	return (
		<div>
			{MENU.map(item => (
				<MenuItem key={item.link} item={item} />
			))}
		</div>
	)
}
