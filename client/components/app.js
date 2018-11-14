import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//Pages
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from "./course/ManageCoursePage";

//Common
import Header from '../common/Header';
import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/styles.css';
import 'toastr/build/toastr.min.css';

class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <div className='container-fluid'>
                    <Header loading={this.props.loading}/>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/courses" component={CoursesPage}/>
                        <Route path="/course/:id?" component={ManageCoursePage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool
};

//eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps){
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
