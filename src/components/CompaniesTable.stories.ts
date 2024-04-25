import type { Meta, StoryObj } from '@storybook/react'
import { CompaniesTable } from './CompaniesTable'

const meta = {
	component: CompaniesTable,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CompaniesTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
