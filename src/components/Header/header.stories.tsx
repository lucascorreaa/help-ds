import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "."
import { HeaderProps } from "."

function test() {
  return console.log('oi')
}

const buttonArray = [
  {title: 'Sobre', onclick: () => test()},
  {title: 'Projetos', onclick: () => test()},
  {title: 'Contato', onclick: () =>  test()}
]

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<HeaderProps>

export default meta
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {
    title: "Header Title",
    actions: buttonArray
  },
}
