import Button from "./Button";

const meta = {
  title: 'uikit/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta;

export const Primary = {
  args: {
    primary: true,
    children: 'Button',
  },
}

export const PrimaryOutlined = {
  args: {
    children: 'Button',
    primaryOutlined: true
  },
};

export const Light = {
  args: {
    light: true,
    children: 'Button'
  },
};

export const LightOutlined = {
  args: {
    lightOutlined: true,
    children: 'Button'
  },
};

export const Dark = {
  args: {
    dark: true,
    children: 'Button'
  },
};

export const DarkOutlined = {
  args: {
    darkOutlined: true,
    children: 'Button'
  },
};

export const Gradient = {
  args: {
    gradient: true,
    children: 'Button'
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Button'
  },
};