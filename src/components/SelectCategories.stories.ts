import type { Meta, StoryObj } from '@storybook/react'
import { SelectCategories } from './SelectCategories'

const meta = {
	component: SelectCategories,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SelectCategories>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
