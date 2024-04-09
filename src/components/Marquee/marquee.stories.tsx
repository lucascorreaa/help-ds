import type { Meta, StoryObj } from "@storybook/react"
import { Marquee } from "."
import { MarqueeProps } from "."

const meta = {
  title: "Example/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  argTypes: {
    description: { control: "text" },
  },
} satisfies Meta<MarqueeProps>

export default meta
type Story = StoryObj<typeof meta>;

export const MarqueeStory: Story = {
  args: {
    description: " React - Jest - StoryBook - Styled-Components - TypeScript -"
  },
}
