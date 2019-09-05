import React from 'react';
import { Navbar } from './navbar';

export class Header extends React.Component {
  render() {
    return (
        <header>
            <div>
                <h1>
                    Amy Whitfield
                </h1>
            </div>
            <Navbar />
        </header>
    );
  }
}