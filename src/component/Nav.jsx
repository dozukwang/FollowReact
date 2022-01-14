import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  const Ul = styled.ul`
    list-style: none;
    border: 1px solid red;
  `

  const Flexbox = styled.div`
    display: flex;
    margin: 0 20px;
  `
  
  return (
    <Flexbox>
      <Ul>
        <li>
          <NavLink activeclassname="active" to="/css"> CSS </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/js"> JS </NavLink>
        </li>
      </Ul>      
    </Flexbox>
  );
};

export default Nav;
