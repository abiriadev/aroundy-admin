import type { Meta, StoryObj } from '@storybook/react'
import { CompaniesPage } from './CompaniesPage'

const meta = {
	component: CompaniesPage,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CompaniesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
