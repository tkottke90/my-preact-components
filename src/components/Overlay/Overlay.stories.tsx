import { Meta, StoryObj } from '@storybook/preact';
import { useSignal, useSignalEffect } from '@preact/signals';
import { Fragment } from 'preact';
import '../../storybook.scss';

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

    useSignalEffect(() => {
      console.log(`Open Change - Next Value: ${open.value}`);
    });

    return (
      <Fragment>
        <button onClick={() => show.value = true} >Open</button>
        <Overlay visible={open} show={show} portal={portal} className="storybook--overlay-wrapper">
          <div className="storybook--overlay-content">
            <header>
              <h2>Are you Sure?</h2>
            </header>

            <p>There is no turning back.  You can never come back....</p>

            <footer>
              <button>Yes</button>
              <button>No</button>
            </footer>
          </div>
        </Overlay>
      </Fragment>
    )
  }
}