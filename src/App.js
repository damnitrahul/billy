import React from 'react';

// Vendor
import { Redirect, Switch, Route } from 'react-router-dom';
// Styled Components
import { BodyContainer } from './components/styledComponents/layout/BodyContainer';
import SideBar from './components/sidebar/SideBar';
// Pages Components
import Dashboard from './components/pages/dashboard/Dashboard';
import NewInvoice from './components/pages/create/NewInvoice';
import Invoices from './components/pages/invoices/Invoices';
import Settings from './components/pages/settings/Settings';
import InvoiceDetails from './components/pages/view/InvoiceDetails';

// Firestore
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import SignUp from './components/pages/auth/SignUp';
import Login from './components/pages/auth/Login';
import EditSettings from './components/pages/settings/EditSettings';
import BottomNavigation from './components/bottomNavigation/BottomNavigation';
import AlertDialog from './components/dialog/Dialog';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import AlertSnackbar from './components/snackbar/SnackBar';

function App() {
  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: 'users',
      doc: auth.uid || '7H32sbpohKZk24Q2',
      subcollections: [
        { collection: 'invoices', orderBy: ['invoiceDate', 'desc'] }
      ],
      storeAs: 'invoices'
    }
  ]);

  if (!isLoaded(auth)) return <h1>Loading...</h1>;

  if (isEmpty(auth))
    return (
      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    );

  return (
    <BodyContainer>
      <SideBar />
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create" component={NewInvoice} />
          <Route exact path="/invoices" component={Invoices} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings/edit" component={EditSettings} />
          <Route exact path="/invoice/:id" component={InvoiceDetails} />
          <Route exact path="/register" render={() => <Redirect to="/" />} />
          <Route exact path="/login" render={() => <Redirect to="/" />} />
          <Route render={() => <Redirect to="/" />} />
          />
        </Switch>
      </div>
      <BottomNavigation />
      <AlertDialog />
      <AlertSnackbar />
    </BodyContainer>
  );
}

export default App;
