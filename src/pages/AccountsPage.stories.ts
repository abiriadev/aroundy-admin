import type { Meta, StoryObj } from '@storybook/react'
import { AccountsPage } from './AccountsPage'

const meta = {
	component: AccountsPage,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AccountsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
