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
import AppLoader from './components/loaders/app/AppLoader';
import NotFound from './components/loaders/404/NotFound';

function App() {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(
    '%c 👋 Oh, Hi there,Curious web lover!',
    'color: #d74034; font-size:24px;'
  );
  console.log(
    `%c  ✨ Like what you see? We could work together!
    
  🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...
  
  🛠 Code available here: https://github.com/damnitrahul/billy
    
  📬 Find me here: https://twitter.com/damnitrahul
    
  Let the debug begin!
  
  Bonus meme: https://i.redd.it/xz60l1c7pxt41.jpg
  `,
    'font-size:16px'
  );
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

  if (!isLoaded(auth)) {
    return <AppLoader />;
  }

  if (isEmpty(auth))
    return (
      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route render={() => <Redirect to="/register" />} />
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
          <Route component={NotFound} />
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
