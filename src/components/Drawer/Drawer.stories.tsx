import { Meta, StoryObj } from '@storybook/preact';
import { useSignal } from '@preact/signals';
import { Fragment } from 'preact';
import '../../storybook.scss';

import { Drawer } from '.'
import { DomUtils } from '../../utils';

type Story = StoryObj<typeof Drawer>;
const meta: Meta<typeof Drawer> = {
  component: Drawer,
  tags: ['autodocs']
}

export default meta;

const portal = DomUtils.getPortalContainer('modals');
export const Default = {
  argTypes: {
    direction: {
      description: 'Prebuilt Enter/Exit animations allowing the modal to slide down or up on entrance',
      control: { type: 'radio' },
      options: [ 'left', 'right', 'bottom' ]
    }
  } as any,
  render: (args) => { 
    const show = useSignal(false);

    console.dir(args);


    return (<Fragment>
      <button onClick={() => show.value = true} >Open Modal</button>
      <Drawer show={show} portal={portal} {...args} className="storybook--drawer">
        <h2>Add Entry</h2>
        <form>
          <div className="formField">
            <label htmlFor="username">Username</label>
            <input id="username"/>
          </div>

          <div className="formField">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
          </div>

          <footer>
            <button type="button">Login</button>
          </footer>
        </form>
      </Drawer>
    </Fragment>)
  }
}

export const LeftDrawer = {
  render: () => { 
    const show = useSignal(false);

    return (<Fragment>
      <button onClick={() => show.value = true} >Open Modal</button>
      <Drawer show={show} portal={portal} direction={'left'} className="storybook--drawer">
        <h2>Add Entry</h2>
        <form>
          <div className="formField">
            <label htmlFor="username">Username</label>
            <input id="username"/>
          </div>

          <div className="formField">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
          </div>

          <footer>
            <button type="button">Login</button>
          </footer>
        </form>
      </Drawer>
    </Fragment>)
  }
}

export const RightDrawer = {
  render: () => { 
    const show = useSignal(false);

    return (<Fragment>
      <button onClick={() => show.value = true} >Open Modal</button>
      <Drawer show={show} portal={portal} direction={'right'} className="storybook--drawer">
        <h2>Add Entry</h2>
        <form>
          <div className="formField">
            <label htmlFor="username">Username</label>
            <input id="username"/>
          </div>

          <div className="formField">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
          </div>

          <footer>
            <button type="button">Login</button>
          </footer>
        </form>
      </Drawer>
    </Fragment>)
  }
}

export const BottomDrawer = {
  render: () => { 
    const show = useSignal(false);

    return (<Fragment>
      <button onClick={() => show.value = true} >Open Modal</button>
      <Drawer show={show} portal={portal} direction={'bottom'} className="storybook--drawer">
        <h2>Add Entry</h2>
        <form>
          <div className="formField">
            <label htmlFor="username">Username</label>
            <input id="username"/>
          </div>

          <div className="formField">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
          </div>

          <footer>
            <button type="button">Login</button>
          </footer>
        </form>
      </Drawer>
    </Fragment>)
  }
}