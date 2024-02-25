import { Meta } from '@storybook/preact';
import '../../storybook.scss';
import { DomUtils } from '../../utils';
import { SnackbarList, addItem } from './';
import { useSignal } from '@preact/signals';
import { SnackbarItemProps } from './snackbar.types';

const meta: Meta = {
  component: SnackbarList
}

export default meta;

const portal = DomUtils.getPortalContainer('snackbar');

const toastMessage = [
  'Entity Created Successfully',
  'Update Complete',
  'Setup Complete',
  '1 New Notification',
  'Offline Mode'
];
const warningMessages = [
  'Authentication Error',
  'Something Went Wrong!',
  'Unable to complete request',
  'Disconnected'
];

function randomItemSelect(arr: any[]) {
  const pos = Math.floor(Math.random() * arr.length);

  return arr[pos];
}

export const Primary = {
  render: () => {
    const items = useSignal<SnackbarItemProps[]>([]);
    
    function addNewItem() {
      addItem({ label: randomItemSelect(toastMessage), ttl: -1 })
    }

    function addNewAutoHide() {
      addItem({ label: randomItemSelect(toastMessage) })
    }

    function addWarning() {
      addItem({
        label: randomItemSelect(warningMessages),
        severity: 'warning',
        buttonLabel: 'Dismiss',
        action: () => console.log('Warning Dismissed')
      })
    }

    return (
      <div className='storybook--snackbar'>
        <fieldset>
          <legend>Add a snackbar item</legend>
          <button onClick={addNewAutoHide}>Add Item</button>
          <button onClick={addNewItem}>Add Persistent Item</button>
          <button onClick={addWarning}>Add Warning Item</button>
        </fieldset>
        <SnackbarList portal={portal} items={items} />
      </div>
    )
  }
}