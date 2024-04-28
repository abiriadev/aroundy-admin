import type { Meta, StoryObj } from '@storybook/react'
import { LoginPage } from './LoginPage'

const meta = {
	component: LoginPage,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
