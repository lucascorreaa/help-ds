import type { Meta, StoryObj } from "@storybook/react"
import { TextButton } from "."
import { ButtonProps } from "."

const meta = {
  title: "Example/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>;

export const TextButtonExemple: Story = {
  args: {
    label: "Button",
  },
}
