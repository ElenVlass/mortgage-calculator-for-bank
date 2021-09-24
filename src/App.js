import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { bankOperations } from './redux/banks';
import LoaderSpiner from './components/Loader';
import Layout from '../src/components/Layout';

const BanksView = lazy(() =>
  import('./views/BanksView.js' /* webpackChunkName: "banks-view" */),
);
const MortgageCalculatorView = lazy(() =>
  import(
    './views/MortgageCalculatorView.js' /* webpackChunkName: "calculator-view" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankOperations.fetchBanks());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          <Route path={routes.banks} exact>
            <BanksView />
          </Route>
          <Route path={routes.calculator}>
            <MortgageCalculatorView />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}
