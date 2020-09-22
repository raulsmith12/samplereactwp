import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const {links} = props;
  
    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand href="/waterdamage">
            <h2><img src="https://galacticblue.net/waterdamage/img/logo.png" height="35" alt="Water Damage Restoration of Utah" />&nbsp;
            Water Damage Restoration of Utah</h2>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/waterdamage">Home</NavLink>
              </NavItem>
              {links.map((link, index) => {
                if (link.slug !== 'index' && link.slug !== 'privacy-policy') {
                    return (
                        <NavItem key={index}>
                            <NavLink href={link.slug}>{link.title.rendered}</NavLink>
                        </NavItem>
                    )
                }
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
  
export default Header;
