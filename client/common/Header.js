import React from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
    return (
        <nav>
            <NavLink exact={true} to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            { loading && <LoadingDots interval={100} dots={20}/> }
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool
};

export default Header;