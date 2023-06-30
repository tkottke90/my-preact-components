import { Meta, StoryObj } from '@storybook/preact';
import { useSignal } from '@preact/signals';

import { Overlay } from './';
import { DomUtils } from '../../utils';

const meta: Meta = {
  component: Overlay
}

export default meta;

const portal = DomUtils.getPortalContainer('overlay');

export const Primary = {
  render: () => {
    const open = useSignal(false);
    const show = useSignal(false);

    return (
      <Overlay open={open} show={show} portal={portal} >
        <div style={{ margin: 'auto', height: '10rem', width: '10rem', backgroundColor: '#fff' }} ></div>
      </Overlay>
    )
  }
}