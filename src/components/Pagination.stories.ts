import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta = {
	component: Pagination,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
