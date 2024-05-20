import type { Meta, StoryObj } from '@storybook/react'
import { UploadImage } from './UploadImage'

const meta = {
	component: UploadImage,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof UploadImage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
