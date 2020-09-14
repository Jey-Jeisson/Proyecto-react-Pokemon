import React, { Component } from 'react'
import styled from 'styled-components';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-nd navbar-dark bg-dark fixed-top">
                    <a className = "navbar-brand col-sm-3 col-sm-2 mr-0 align-itms-center">
                        Pokemon
                    </a>
                </nav>
            </div>
        )
    }
}