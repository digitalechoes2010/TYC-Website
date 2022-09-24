import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Product from "./components/ShopPage/Product";
import history from "./history";
import Analytics from "./pages/Analytics";
import Cart from "./pages/Cart";

import CompatibleDevices from "./pages/CompatibleDevices";

import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import DownloadApp from "./pages/DownloadApp";
import ForgotPasswordChange from "./pages/ForgotPassword-ChangePass";
import ForgotPasswordContact from "./pages/ForgotPassword-Contact";
import Home from "./pages/Home";
import MyQR from "./pages/MyQR";
import Otp from "./pages/Otp";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import ProfileInfo from "./pages/ProfileInfo";
import PublicProfile from "./pages/PublicProfile";
import RefundPolicy from "./pages/RefundPolicy";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";
import TermsOfUse from "./pages/TermsOfUse";
import Transactions from "./pages/Transactions";
import WelcomePage from "./pages/WelcomePage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route
                path="/Product/:id/:category"
                render={(propsRoute) => <Product {...propsRoute} />}
              />
              <Route exact path="/Shop" render={() => <Shop />} />
              <Route exact path="/Support" render={() => <Support />} />
              <Route
                exact
                path="/Support/CompatibleDevices"
                render={() => <CompatibleDevices />}
              />
              <Route
                exact
                path="/Support/RefundPolicy"
                render={() => <RefundPolicy />}
              />
              <Route exact path="/Cart" render={() => <Cart />} />
              <Route exact path="/SignIn" render={() => <SignIn />} />
              <Route exact path="/SignUp" render={() => <SignUp />} />
              <Route exact path="/SignIn/OTP" render={() => <Otp />} />
              <Route
                exact
                path="/Terms&Conditions"
                render={() => <TermsOfUse />}
              />
              <Route
                exact
                path="/ForgotPassword/Contact"
                render={() => <ForgotPasswordContact />}
              />
              <Route
                exact
                path="/resetPassword/:token"
                render={(props) => <ForgotPasswordChange {...props} />}
              />
              <Route
                exact
                path="/Privacy-Policy"
                render={() => <PrivacyPolicies />}
              />
              <Route exact path="/Analytics" render={() => <Analytics />} />
              <Route exact path="/Contacts" render={() => <Contacts />} />
              <Route
                exact
                path="/Transactions"
                render={() => <Transactions />}
              />
              <Route
                exact
                path="/PublicProfile/:id"
                render={(props) => <PublicProfile {...props} />}
              />
              <Route
                exact
                path="/p/:id"
                render={(props) => <PublicProfile {...props} />}
              />
              <Route
                exact
                path="/tags/:serialNumber"
                render={(props) => <PublicProfile {...props} />}
              />
              <Route exact path="/downloadapp" render={() => <DownloadApp />} />
              <Route exact path="/MyQR" render={() => <MyQR />} />
              <Route exact path="/Welcome" render={() => <WelcomePage />} />
              <Route
                exact
                path="/Profile/EditInfo"
                render={() => <ProfileInfo />}
              />
              <Route
                exact
                path="/Profile/Dashboard"
                render={() => <Dashboard />}
              />
              <Route
                path="/Android"
                component={() => {
                  window.location.replace(
                    "https://play.google.com/store/apps/details?id=com.tyc"
                  );
                  return null;
                }}
              />{" "}
              <Route
                path="/Apple"
                component={() => {
                  window.location.replace(
                    "https://apps.apple.com/us/app/tap-your-chip/id1586810911"
                  );
                  return null;
                }}
              />
              <Route exact path="/" render={() => <Home />} />
              <Route component={() => <PageNotFound />} />
            </Switch>
          </Layout>
          {/* <Route exact path="/" render={() => <ConstructionPage />} /> */}
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
