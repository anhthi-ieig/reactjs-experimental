import { get } from 'lodash';

export default (): void => {
  const personal = {
    name: 'Hello',
  };

  console.log(`Copied to clipboard: ${get(personal, 'name')}`);
};
