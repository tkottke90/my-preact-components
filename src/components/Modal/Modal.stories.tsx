import { Meta, StoryObj } from '@storybook/preact';
import { useSignal } from '@preact/signals';
import { Fragment } from 'preact';
import '../../storybook.scss';

import { Modal } from './'
import { DomUtils } from '../../utils';

type Story = StoryObj<typeof Modal>;
const meta: Meta<typeof Modal> = {
  component: Modal
}

export default meta;

const portal = DomUtils.getPortalContainer('modals');
export const Default = {
  render: () => {
    const show = useSignal(false);

    return (<Fragment>
      <button onClick={() => show.value = true} >Open Modal</button>
      <Modal show={show} portal={portal} direction={'bottom'} className="storybook--modal" >
        <h2>Login</h2>
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
      </Modal>
    </Fragment>)
  }
}