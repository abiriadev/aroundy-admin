import type { Meta, StoryObj } from '@storybook/react'
import { SelectTags } from './SelectTags'

const meta = {
	component: SelectTags,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SelectTags>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
