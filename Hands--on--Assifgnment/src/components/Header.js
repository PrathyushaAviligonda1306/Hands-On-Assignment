import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Books In Our Store</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          No.of.Books{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      
      </div>
    </header>
  );
}
