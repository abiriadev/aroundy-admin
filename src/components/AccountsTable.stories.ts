import type { Meta, StoryObj } from '@storybook/react'
import { AccountsTable } from './AccountsTable'

const meta = {
	component: AccountsTable,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AccountsTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
