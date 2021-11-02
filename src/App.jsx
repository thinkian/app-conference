import { Suspense } from 'react';
import { Root, Routes } from 'react-static';

import { Spinner } from './components';

const App = () => {
  return (
    <Root>
      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    </Root>
  );
};

export default App;
