import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTable } from './ArticleTable'

const meta = {
	component: ArticleTable,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ArticleTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
