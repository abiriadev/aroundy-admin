import type { Meta, StoryObj } from '@storybook/react'
import { ArticleForm } from './ArticleForm'

const meta = {
	component: ArticleForm,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ArticleForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
