import type { Meta, StoryObj } from '@storybook/react'
import { CompanyForm } from './CompanyForm'

const meta = {
	component: CompanyForm,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CompanyForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
