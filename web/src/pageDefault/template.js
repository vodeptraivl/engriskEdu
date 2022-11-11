import React, { useState } from 'react';
import "./template.css";
import Header from './header/header';

class Template extends React.Component{
    render(){
        return (
            <div className='templateBody'>
                <Header></Header>
                <div className='bodyTemplate'></div>
            </div>
        )
    }
}
export default Template;