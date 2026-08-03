'use client'
import { Button as PayloadButton, TextInput, useDebounce, useField } from '@payloadcms/ui'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import type { UIFieldClientComponent } from 'payload'
import { createElement, useEffect, useMemo, useState } from 'react'

// Lazy load Lucide icons to improve initial performance
let LucideIcons: any = null
let iconOptionsCache: Array<{
	label: string
	value: string
	Icon: any
}> | null = null

const loadLucideIcons = async () => {
	if (LucideIcons) return LucideIcons
	try {
		LucideIcons = await import('lucide-react')
		return LucideIcons
	} catch (error) {
		console.error('Failed to load Lucide icons:', error)
		return null
	}
}

const getIconOptions = async () => {
	if (iconOptionsCache) return iconOptionsCache

	const icons = await loadLucideIcons()
	if (!icons) return []

	const iconEntries = Object.entries(icons).filter(([key]) => {
		if (key.endsWith('Icon')) return false
		if (
			['createLucideIcon', 'default', 'Icon', 'LucideIcon', 'Lucide'].includes(
				key
			)
		)
			return false
		if (key.startsWith('Lucide')) return false
		return /^[A-Z][a-zA-Z0-9]*$/.test(key)
	})

	const options = iconEntries
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([key, Icon]) => ({ label: key, value: key, Icon: Icon as any }))

	iconOptionsCache = options
	return options
}

const IconDisplay = ({
	iconName,
	size
}: {
	iconName: string
	size: number
}) => {
	const [IconComponent, setIconComponent] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (!iconName) return
		setIsLoading(true)
		loadLucideIcons()
			.then(icons => {
				if (icons?.[iconName]) setIconComponent(() => icons[iconName])
				setIsLoading(false)
			})
			.catch(() => setIsLoading(false))
	}, [iconName])

	if (isLoading) return <span>…</span>
	if (!IconComponent) return null
	return createElement(IconComponent, { size })
}

export const LucideIconPickerComponent: UIFieldClientComponent = props => {
	const { path } = props
	const { value, setValue } = useField<string>({ path })
	const [searchValue, setSearchValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [iconOptions, setIconOptions] = useState<
		Array<{ label: string; value: string; Icon: any }>
	>([])
	const [isLoadingIcons, setIsLoadingIcons] = useState(false)

	const debouncedSearch = useDebounce(searchValue, 300)

	useEffect(() => {
		if (isOpen && iconOptions.length === 0 && !isLoadingIcons) {
			setIsLoadingIcons(true)
			getIconOptions()
				.then(options => {
					setIconOptions(options)
					setIsLoadingIcons(false)
				})
				.catch(error => {
					console.error('Failed to load icon options:', error)
					setIsLoadingIcons(false)
				})
		}
	}, [isOpen, iconOptions.length, isLoadingIcons])

	const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

	const handleSelect = (icon: string) => {
		setSelectedIcon(icon)
		setValue(icon)
		setIsOpen(false)
	}

	const handleReset = () => {
		setSelectedIcon(null)
		setValue('')
	}

	const isSelected = (iconValue: string) =>
		selectedIcon === iconValue || value === iconValue

	const filteredOptions = useMemo(() => {
		if (!debouncedSearch) return iconOptions
		return iconOptions.filter(o =>
			o.value.toLowerCase().includes(debouncedSearch.toLowerCase())
		)
	}, [iconOptions, debouncedSearch])

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			{/* Field row */}
			<div className='icon-picker-field flex flex-col gap-2'>
				<label className='icon-picker-field__label' htmlFor={path}>
					Choose an icon
				</label>
				<div className='icon-picker-field__row'>
					<input type='hidden' value={value || ''} />

					<div className='icon-picker-field__display'>
						{value ? (
							<>
								<IconDisplay iconName={value} size={18} />
								<span className='icon-picker-field__name'>{value}</span>
							</>
						) : (
							<span className='icon-picker-field__placeholder'>
								No icon selected
							</span>
						)}
					</div>

					<DialogTrigger asChild>
						<button type='button' className='icon-picker-field__btn'>
							Browse icons
						</button>
					</DialogTrigger>

					{value && (
						<PayloadButton buttonStyle='secondary' size='medium' icon='x' onClick={handleReset}>
							Clear
						</PayloadButton>
					)}
				</div>
			</div>

			{/* Dialog */}
			<DialogContent
				aria-describedby={undefined}
				showCloseButton={true}
				className='icon-picker-dialog'
			>
				<DialogHeader className='icon-picker-dialog__header'>
					<div className='icon-picker-dialog__header-inner'>
						{value && (
							<span className='icon-picker-dialog__preview'>
								<IconDisplay iconName={value} size={22} />
							</span>
						)}
						<DialogTitle>
							{value ? `Selected: ${value}` : 'Choose an icon'}
						</DialogTitle>
					</div>

					<div className='icon-picker-dialog__search'>
						<TextInput
							path={`${path}-search`}
							placeholder='Search icons…'
							value={searchValue}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setSearchValue(e.target.value)
							}
						/>
						{searchValue && (
							<PayloadButton buttonStyle='secondary' size='small' icon='x' onClick={() => setSearchValue('')}>
								Clear
							</PayloadButton>
						)}
					</div>
				</DialogHeader>

				{/* Grid */}
				<div className='icon-picker-dialog__grid-wrap'>
					{isLoadingIcons ? (
						<div className='icon-picker-dialog__empty'>Loading icons…</div>
					) : filteredOptions.length === 0 ? (
						<div className='icon-picker-dialog__empty'>
							No icons found for &ldquo;{searchValue}&rdquo;
						</div>
					) : (
						<div className='icon-picker-dialog__grid'>
							{filteredOptions.map(option => (
								<Button
									key={option.value}
									type='button'
									size='icon'
									variant={isSelected(option.value) ? 'primary' : 'surface'}
									title={option.value}
									onClick={() => handleSelect(option.value)}
								>
									{option.Icon &&
										createElement(option.Icon as any, { size: 18 })}
								</Button>
							))}
						</div>
					)}
				</div>

				{/* Footer */}
				<div className='icon-picker-dialog__footer'>
					{filteredOptions.length} icon{filteredOptions.length !== 1 ? 's' : ''}
					{searchValue && ` matching "${searchValue}"`}
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default LucideIconPickerComponent
