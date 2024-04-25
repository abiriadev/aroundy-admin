import type { Meta, StoryObj } from '@storybook/react'
import { EventChannel } from './EventChannel'

const meta = {
	component: EventChannel,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof EventChannel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
