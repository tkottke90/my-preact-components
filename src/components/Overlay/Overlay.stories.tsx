import { Meta, StoryObj } from '@storybook/preact';
import { useSignal, useSignalEffect } from '@preact/signals';
import { Fragment } from 'preact';
import '../../storybook.scss';

import { Overlay } from './';
import { DomUtils } from '../../utils';

type Story = StoryObj<typeof Overlay>;
const meta: Meta<typeof Overlay> = {
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

export const CustomVariations = {
  
  args: {
    variations: {
      initial: {
        opacity: 0,
        'y': '-50%',
        pointerEvents: 'none',
        display: 'grid',
        position: 'absolute',
      },
      in: {
        opacity: 1,
        'y': 0,
        pointerEvents: 'all',
        transition: {
          staggerChildren: 0.07,
          delayChildren: 0.1,
          duration: 0.3,
          type: 'spring',
          mass: 0.01,
          velocity: 18,
        },
      },
      out: {
        opacity: 0,
        'y': '-50%',
        pointerEvents: 'none',
        transition: {
          type: 'spring',
          staggerChildren: 0.02,
          staggerDirection: -1,
          duration: 0.2,
          mass: 0.05,
          velocity: 18,
        },
      }
    }

  },
  render: (args: any) => {
    const open = useSignal(false);
    const show = useSignal(false);

    useSignalEffect(() => {
      console.log(`Open Change - Next Value: ${open.value}`);
    });

    return (
      <Fragment>
        <button onClick={() => show.value = true} >Open</button>
        <Overlay visible={open} show={show} portal={portal} className="storybook--overlay-wrapper" variations={args.variations} >
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