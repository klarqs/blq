"use client";

import { useState, useEffect } from 'react';

const CategoriesComponent = () => {
  const [mainShortcuts, setMainShortcuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMainShortcuts = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
        if (response.ok) {
          const data = await response.json();
          const mainShortcutsData = data.map(item => ({
            imageUrl: item.imageUrl,
            title: item.title,
          }));
          setMainShortcuts(mainShortcutsData);
        }
      } catch (error) {
        console.error('Error fetching main shortcuts:', error);
      } finally {
        setLoading(false);
      }
    };

    getMainShortcuts();
  }, []);

  const handleShortcutClick = (title) => {
    // Handle click event here, you can navigate to a specific page or perform an action
    console.log(`Clicked on shortcut: ${title}`);
  };

  return (
    <div style={{ padding: '36px 64px 64px 64px', width: '100%' }}>
      <div style={{ width: '965px', margin: '0 auto' }}>
        {loading ? (
          <div style={{ textAlign: 'center', color: 'black' }}>Loading...</div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            {mainShortcuts.map((shortcut, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '18px 18px 18px 18px', cursor: 'pointer' }} onClick={() => handleShortcutClick(shortcut.title)}>
                <img src={shortcut.imageUrl} height="62" />
                <div style={{ marginTop: '16px', width: '62px' }}>
                  <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', textAlign: 'center', color: 'black', fontSize: '14px' }}>
                    {shortcut.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesComponent;
