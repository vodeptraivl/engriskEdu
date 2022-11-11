
import React, { useState } from 'react';
import './header.css';
import crown from '../../login/crown.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from './user.png';

library.add(faUser)
class Header extends React.Component{
    render(){
        return(
            <div className='headerTemplate'>
                <div className='gridHeader'>
                    <div className='logo'>
                        <img src={crown} style={{width:'30px'}}></img>
                    </div>
                    <div className='headerSearchCtn'>
                        <input type={'text'} className='searchInput' placeholder='search...'></input>
                    </div>
                    <div className='infoCtn'>
                        <div className='userLogo'>
                            <div className='imgUser'>
                                {/* <FontAwesomeIcon icon={['fas','fa-user']} style={{color:'#4267B2',fontSize:'18px'}}/> */}
                                <img src={user} style={{width:'40px'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    
}
export default Header;