import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
// Vendor
import { Redirect, Switch, Route } from 'react-router-dom';
// Styled Components
import { BodyContainer } from './components/styledComponents/layout/BodyContainer';
import SideBar from './components/sidebar/SideBar';

// Firestore
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import SignUp from './components/pages/auth/SignUp';
import Login from './components/pages/auth/Login';
import BottomNavigation from './components/bottomNavigation/BottomNavigation';
import AlertDialog from './components/dialog/Dialog';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import AlertSnackbar from './components/snackbar/SnackBar';
import AppLoader from './components/loaders/app/AppLoader';

const LazyApp = Loadable({
  loader: () => import('./AllAppRoutes'),
  loading: AppLoader
});

function App() {
  const auth = useSelector((state) => state.firebase.auth);

  useEffect(() => {
    console.log(
      '%c👋 Oh, Hi there,Curious web lover!',
      'color: #d74034; font-size:24px;'
    );
    console.log(
      `%c ✨ Like what you see? We could work together!
      
    🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...
    
    🛠 Code available here: https://github.com/damnitrahul/billy
      
    📬 Find me here: https://twitter.com/damnitrahul
      
    Let the debug begin!
    
    Bonus meme: https://i.redd.it/xz60l1c7pxt41.jpg
    `,
      'font-size:16px'
    );
  }, []);

  useFirestoreConnect([
    {
      collection: 'users',
      doc: auth.uid || ' ',
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
        <LazyApp />
      </div>
      <BottomNavigation />
      <AlertDialog />
      <AlertSnackbar />
    </BodyContainer>
  );
}

export default App;
