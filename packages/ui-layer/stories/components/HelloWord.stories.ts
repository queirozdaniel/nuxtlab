import type { Meta, StoryObj } from '@storybook/vue3'

import HelloWorld from '../components/HelloWorld.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Component/HelloWorld',
  component: HelloWorld,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const HelloWorldStory: Story = {
  args: {},
}
