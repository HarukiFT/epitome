import NxWelcome from './nx-welcome';

import { Ui } from '@myorg/ui';
import { contracts } from '@myorg/contracts';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    fetch('/api').then((response) => console.log(response));
  }, []);

  return (
    <div>
      <NxWelcome title="frontend" />

      <p>{contracts()}</p>

      <Ui />
    </div>
  );
}

export default App;
