import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return (
            <div className='jumbotron'>
                <h1>Gin / React Example</h1>
                <p>Gin, React, Redux and React Router for ES6.</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
