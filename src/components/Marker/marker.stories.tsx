import type { Meta, StoryObj } from "@storybook/react"
import { Marker } from "."
import { MarkerProps } from "."

const meta = {
  title: "Example/Marker",
  component: Marker,
  parameters: {
   
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "text" },
    borderColor: { control: "text" },
    size: { control: "number" },
    isBorder: { control: 'boolean' },
    borderSize: { control: "number" }
  },
} satisfies Meta<MarkerProps>

export default meta
type Story = StoryObj<typeof meta>;

export const MarkerStory: Story = {
  args: {
    color: 'green',
    borderColor: 'red',
    size: 20,
    isBorder: true,
    borderSize: 4
  },
}
