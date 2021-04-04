import React, {Component} from "react"
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";



import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

import courseData from "./courseData"

var hist = createBrowserHistory();

class App extends Component {

    state = {
        currentCourse: courseData.course1
    }

    changeCurrentCourse = (courseNum) => {
        if (courseNum === 1) {
            this.setState({
                currentCourse: courseData.course1
            })
        } else if (courseNum === 2) {
            this.setState({
                currentCourse: courseData.course2
            })
        } else if (courseNum === 3) {
            this.setState({
                currentCourse: courseData.course3
            })
        } else if (courseNum === 4) {
            this.setState({
                currentCourse: courseData.course4
            })
        }
    }

    render() {
        return (
        <Router history={hist}>
            <Switch>
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/course" render={()=> <BlogPostPage courseData={this.state.currentCourse} />} />
            <Route path="/courses" render={()=> <BlogPostsPage changeCurrentCourse={this.changeCurrentCourse} />} />
            <Route path="/components" component={ComponentsPage} />
            <Route path="/contact-us" component={ContactUsPage} />
            <Route path="/ecommerce-page" component={EcommercePage} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/login-page" component={LoginPage} /> {/* This is the login page*/}
            <Route path="/pricing" component={PricingPage} /> 
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/product-page" component={ProductPage} />
            <Route path="/sections" component={SectionsPage} />
            <Route path="/shopping-cart-page" component={ShoppingCartPage} />
            <Route path="/signup-page" component={SignupPage} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/" component={LoginPage} />
            </Switch>
        </Router>
        )
    }
}

export default App;