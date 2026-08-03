'use client'
import { Button, TextInput, useDebounce, useField } from '@payloadcms/ui'
import type { UIFieldClientComponent } from 'payload'
import { createElement, Fragment, useEffect, useMemo, useState } from 'react'

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

// Optimized icon options generator with caching
const getIconOptions = async () => {
	if (iconOptionsCache) return iconOptionsCache

	const icons = await loadLucideIcons()
	if (!icons) return []

	// More precise filtering to get only actual icon components
	const iconEntries = Object.entries(icons).filter(([key, value]) => {
		// Exclude icon data objects (ending with 'Icon')
		if (key.endsWith('Icon')) return false

		// Exclude utility functions and non-icon exports
		if (
			['createLucideIcon', 'default', 'Icon', 'LucideIcon', 'Lucide'].includes(
				key
			)
		)
			return false

		// Exclude anything that starts with 'Lucide' (these are likely utility exports)
		if (key.startsWith('Lucide')) return false

		// Only include entries that look like actual icon names (PascalCase, no special characters)
		return /^[A-Z][a-zA-Z0-9]*$/.test(key)
	})

	const options = iconEntries
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([key, Icon]) => ({
			label: key,
			value: key,
			Icon: Icon as any // Include the icon component for rendering
		}))

	// Cache the results
	iconOptionsCache = options
	return options
}

// Memoized icon display component for better performance
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
				if (icons?.[iconName]) {
					setIconComponent(() => icons[iconName])
				}
				setIsLoading(false)
			})
			.catch(() => {
				setIsLoading(false)
			})
	}, [iconName])

	if (isLoading) return <span>...</span>
	if (!IconComponent) return null

	return createElement(IconComponent, { size })
}

export const LucideIconPickerComponent: UIFieldClientComponent = props => {
	const { path } = props
	const { value, setValue } = useField<string>({ path })
	const [searchValue, setSearchValue] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [iconOptions, setIconOptions] = useState<
		Array<{ label: string; value: string; Icon: any }>
	>([])
	const [isLoadingIcons, setIsLoadingIcons] = useState(false)

	// Add debounced search value
	const debouncedSearchValue = useDebounce(searchValue, 300)

	// Load icons when component mounts or when modal opens
	useEffect(() => {
		if (isModalOpen && iconOptions.length === 0 && !isLoadingIcons) {
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
	}, [isModalOpen, iconOptions.length, isLoadingIcons])

	const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

	const handleIconChange = (icon: string) => {
		setSelectedIcon(icon)
		setValue(icon)
		setIsModalOpen(false)
	}

	const isSelected = (iconValue: string) =>
		selectedIcon === iconValue || value === iconValue

	const handleIconReset = () => {
		setSelectedIcon(null)
		setValue('')
	}

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value
		setSearchValue(searchValue)
	}

	const resetSearch = () => {
		setSearchValue('')
	}

	const filteredIconOptions = useMemo(() => {
		if (!debouncedSearchValue) return iconOptions
		return iconOptions.filter(option => {
			const iconName = option.value.toLowerCase()
			return iconName.includes(debouncedSearchValue.toLowerCase())
		})
	}, [iconOptions, debouncedSearchValue])

	// Handle Escape key to close modal
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false)
			}
		}

		if (isModalOpen) {
			document.addEventListener('keydown', handleKeyDown)
			// Prevent body scroll when modal is open
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = 'unset'
		}
	}, [isModalOpen])

	return (
		<Fragment>
			<div className='moonsio-icon-picker-field'>
				<label className='moonsio-icon-picker-field__label' htmlFor={path}>
					Choose an icon
				</label>
				<div className='moonsio-icon-picker-field__button-row'>
					<input type='hidden' value={value || ''} />
					<div className='moonsio-icon-picker-field__display'>
						{value ? (
							<div className='moonsio-icon-picker-field__icon-display'>
								<IconDisplay iconName={value} size={20} />
							</div>
						) : (
							<div className='moonsio-icon-picker-field__placeholder'>
								No icon selected
							</div>
						)}
					</div>
					<Button
						buttonStyle='primary'
						size='large'
						onClick={() => setIsModalOpen(true)}
						className='moonsio-icon-picker-field__open-modal'
					>
						Open icon picker
					</Button>
				</div>
			</div>
			{/* Modal Overlay */}
			{isModalOpen && (
				<div
					className='moonsio-icon-picker-modal-overlay'
					onClick={e => {
						if (e.target === e.currentTarget) {
							setIsModalOpen(false)
						}
					}}
					onKeyDown={e => {
						if (e.key === 'Enter' || e.key === ' ') {
							if (e.target === e.currentTarget) {
								setIsModalOpen(false)
							}
						}
					}}
				>
					<div className='moonsio-icon-picker-modal'>
						{/* Modal Header */}
						<div className='moonsio-icon-picker-modal__header'>
							<div className='moonsio-icon-picker-modal__header-content'>
								<h3 className='moonsio-icon-picker-modal__header-title'>
									{value ? 'Selected:' : 'Choose an icon'}
									{value && (
										<div className='moonsio-icon-picker-modal__selected-icon'>
											<IconDisplay iconName={value} size={32} />
										</div>
									)}
								</h3>
								<Button
									buttonStyle='secondary'
									size='medium'
									icon='x'
									onClick={handleIconReset}
									disabled={!value}
									className='moonsio-icon-picker-modal__reset-icon'
								>
									Reset icon
								</Button>
							</div>

							<Button
								buttonStyle='icon-label'
								size='large'
								icon='x'
								onClick={() => setIsModalOpen(false)}
								className='moonsio-icon-picker-modal__close-modal'
							/>
						</div>

						{/* Modal Content */}
						<div className='moonsio-icon-picker-modal__content'>
							{/* Search Controls */}
							<div className='moonsio-icon-picker-modal__search-controls'>
								<TextInput
									path={`${path}-search`}
									placeholder='Search for an icon...'
									value={searchValue}
									onChange={handleSearch}
									className='moonsio-icon-picker-modal__search-input'
								/>
								<div className='moonsio-icon-picker-modal__search-buttons'>
									{searchValue && (
										<Button
											buttonStyle='secondary'
											size='medium'
											icon='x'
											onClick={resetSearch}
											className='moonsio-icon-picker-modal__reset-search'
										>
											Clear search
										</Button>
									)}
								</div>
							</div>

							{/* Icon Grid */}
							<div className='moonsio-icon-picker-modal__grid'>
								{isLoadingIcons ? (
									<div className='moonsio-icon-picker-modal__loading'>
										<p>Loading icons...</p>
									</div>
								) : (
									filteredIconOptions.map(option => {
										const IconComponent = option.Icon
										return (
											<button
												key={option.value}
												type='button'
												className={`moonsio-icon-picker-modal__item ${isSelected(option.value) ? 'selected' : ''}`}
												onClick={() => handleIconChange(option.value)}
												title={option.value}
											>
												{IconComponent && (
													<div className='moonsio-icon-picker-modal__wrapper'>
														{createElement(IconComponent as any, { size: 24 })}
													</div>
												)}
											</button>
										)
									})
								)}
							</div>

							{/* No results message */}
							{filteredIconOptions.length === 0 && (
								<div className='moonsio-icon-picker-modal__no-results'>
									<p>No icons found matching "{searchValue}"</p>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default LucideIconPickerComponent
