import React, { Component } from 'react';
import "../header.css";
import { withRouter } from 'react-router';

export class Header extends Component {

    render() {
        return (
            <header>
                <div className="navbar-static-top">
                    <nav>
                        <div class="brand"><img src={"/kaubs logo.png"} alt="" /></div>

                        <div class="menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/allvideo">Anime</a></li>
                                <li><a href="">Account</a></li>
                                <li><a href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }


}

export default withRouter(Header);