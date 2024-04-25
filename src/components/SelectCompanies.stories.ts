import type { Meta, StoryObj } from '@storybook/react'
import { SelectCompanies } from './SelectCompanies'

const meta = {
	component: SelectCompanies,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SelectCompanies>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
