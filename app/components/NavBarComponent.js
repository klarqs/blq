import React from 'react';

const NavBarComponent = () => {
  return (
    <nav className="bg-gray-800 p-4" style={{
      borderBottom: '1px solid #EEEEEE',
      width: '100%',
      margin: '0 auto',
      padding: '0 16px',
      boxSizing: 'border-box',
      height: '72px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    }}>
      <div style={{ width: '965px', margin: '0 auto' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="logo-new.png" alt="Logo" height="26" width="126" style={{ marginRight: '14px' }} />
            <img src="hamburger-icon.png" alt="Hamburger Icon" height="14" width="14" style={{ marginRight: '6px' }} />
            <span style={{ color: 'black', fontSize: '14px' }}>Category</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="home-event.png" alt="Home Event" height="26" width="26" />
            <div style={{ backgroundColor: '#DDDDDD', width: '1px', height: '14px', margin: '0 12px' }} />
            <span style={{ color: 'black', fontSize: '14px' }}>Login / Sign up</span>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavBarComponent;
