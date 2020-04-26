import React from 'react';
// Material UI
import { Grid, Hidden } from '@material-ui/core';

// Components
import Header from '../../header/Header';
import CreateInvoice from './widgets/CreateInvoice';
import FulfilledInvoice from './widgets/FulfilledInvoice';
import PendingInvoice from './widgets/PendingInvoice';
import RecentInvoices from './widgets/RecentInvoices';
import PieGraph from './widgets/PieGraph';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Welcome from '../../loaders/welcome/Welcome';
import { useSelector } from 'react-redux';

function Dashboard() {
  const invoices = useSelector((state) => state.firestore.ordered.invoices);

  if (isLoaded(invoices) && isEmpty(invoices)) return <Welcome />;

  return (
    <div>
      <Header title={'Dashboard'} />
      <Grid container justify="center" align-items="center">
        <Grid item xs={12} sm={4} md={4}>
          <CreateInvoice />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FulfilledInvoice />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <PendingInvoice />
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        align-items="center"
        style={{ marginTop: '3rem', width: '100%' }}
      >
        <Grid item xs={12} md={12} lg={9}>
          <RecentInvoices />
        </Grid>
        <Hidden mdDown>
          <Grid item md={3} lg={3}>
            <PieGraph />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default Dashboard;
