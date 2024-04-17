// divider.stories.tsx
import React from 'react'
import { Meta } from "@storybook/react"
import { DividerProps } from './index'
import { Divider } from './index'


const meta: Meta = {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    fullWidth: { control: 'boolean' }, // Adiciona a propriedade fullWidth
    width: { control: 'number' }, // Adiciona a propriedade width
    size: { control: 'number' }, // // Adiciona a propriedade size
    styled: { control: 'select', options: ['solid', 'dotted'] }, // Adiciona a propriedade styled
    color: { control: 'color' }, // Adiciona a propriedade color
    orientation: { control: 'select', options: ['horizontal', 'vertical'] }, // Adiciona a propriedade orientation
  },
}


export default meta

// Predefine os valores do Divider no StoryBook
export const DividerStory = (args: DividerProps) => <Divider {...args} />
DividerStory.args = {
  width: 100,
  size: 1,
  styled: 'solid',
  color: '#000000',
  orientation: 'horizontal',
}
