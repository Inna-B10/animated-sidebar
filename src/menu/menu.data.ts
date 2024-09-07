import {
	Award,
	CheckSquare,
	Home,
	LucideIcon,
	Settings,
	User,
} from 'lucide-react'

export interface IMenuItem {
	icon: LucideIcon
	name: string
	link: string
}

export const MENU: IMenuItem[] = [
	{
		icon: Home,
		name: 'Home',
		link: './',
	},
	{
		icon: User,
		name: 'Friends',
		link: './friends',
	},
	{
		icon: CheckSquare,
		name: 'Todo list',
		link: './todo',
	},
	{
		icon: Award,
		name: 'Achievements',
		link: './achievements',
	},
	{
		icon: Settings,
		name: 'Settings',
		link: './settings',
	},
]
