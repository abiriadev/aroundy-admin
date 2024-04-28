import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPage } from './ArticlesPage'

const meta = {
	component: ArticlesPage,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
