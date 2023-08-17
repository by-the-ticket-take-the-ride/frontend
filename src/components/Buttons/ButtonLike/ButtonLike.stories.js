import ButtonLike from "./ButtonLike";

const meta = {
  title: 'uikit/Buttons/ButtonLike',
  component: ButtonLike,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      description: 'Взаимодействие с кнопкой',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },
  }
}

export default meta;

export const Primary = {
  args: {
    isActive: false
  },
}

export const Secondary = {
  args: {
    isActive: true
  },
};
