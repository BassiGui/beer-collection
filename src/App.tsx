import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './features/layout/components/Layout';
import AppRoutes from './routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
