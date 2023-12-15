
import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="container">
        <button>Popular</button>
        <div>
            <ul>
                <li>All</li>
                <li>Animation</li>
                <li>Branding</li>
                <li>Illustration</li>
                <li>Mobile</li>
                <li>Print</li>
                <li>Product Design</li>
                <li>Typography</li>
                <li>Web Design</li>
            </ul>
        </div>
        <button>Filters</button>
    </div>
  )
}

export default Menu;
