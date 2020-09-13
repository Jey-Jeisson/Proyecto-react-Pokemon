import React, { Component } from 'react'
import styled from 'styled-components';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-nd navbar-dark bg-dark fixed-top" style={{
                    blackgoroundColor: '#ef5350'
                }}>
                    <a>Pokemon</a>
                </nav>
            </div>
        )
    }
}