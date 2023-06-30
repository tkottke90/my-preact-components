import { Meta, StoryObj } from '@storybook/preact';
import { useSignal } from '@preact/signals';

import { Button } from './';

const meta: Meta = {
  component: Button
}

export default meta;

export const Primary = {
  render: () => {
    const count = useSignal(0);
    const pressButton = () => {
      count.value++;
    }


    return (
      <Button onClick={pressButton}>
        { count.value === 0 ? 'Press Me' : `You Pressed Me ${count.value} Times` }
      </Button>
    )
  }
}