import { Link, NavLink as NavLinkRRD } from 'react-router-dom';
import { } from './redux/hooks';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Navbar color="light" light expand="md" className='pl-5 pr-5'>
      <Link to='/'><NavbarBrand href="#">Brandeery</NavbarBrand></Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/my-ideas" tag={NavLinkRRD}>My ideas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/settings" tag={NavLinkRRD}>Settings</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Vote
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink to="/business" tag={NavLinkRRD}>Business</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/social" tag={NavLinkRRD}>Social</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink to="/dating" tag={NavLinkRRD}>Dating</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
