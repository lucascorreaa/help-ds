import type { Meta, StoryObj } from "@storybook/react"
import { Marker as Marker } from "."
import { MarkerProps } from "."

const meta = {
  title: "Example/Marker",
  component: Marker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: "text" },
    borderColor: { control: "text" },
    size: { control: "number" },
    isBorder: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<MarkerProps>

export default meta
type Story = StoryObj<typeof meta>;

export const MarkerTest: Story = {
  args: {
    color: 'black',
    borderColor: 'red',
    size: 20,
    isBorder: true
  },
}
