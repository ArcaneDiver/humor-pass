import { Story, Meta } from '@storybook/react';
import { ComponentsApp, ComponentsAppProps } from './components-app';

export default {
  component: ComponentsApp,
  title: 'ComponentsApp',
} as Meta;

const Template: Story<ComponentsAppProps> = (args) => (
  <ComponentsApp {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
