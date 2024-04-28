import type { Meta, StoryObj } from '@storybook/react'
import { InfoTable } from './InfoTable'

const meta = {
	component: InfoTable,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof InfoTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
