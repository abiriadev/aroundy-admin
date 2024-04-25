import type { Meta, StoryObj } from '@storybook/react'
import { InputCaption } from './InputCaption'

const meta = {
	component: InputCaption,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof InputCaption>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
