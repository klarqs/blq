"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultipleCollectionsComponent = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const response = await axios.get("https://api.testvalley.kr/collections?prearrangedDiscount");
        if (response.status === 200) {
          const filteredCollections = response.data.items.filter(item => item.type === "SINGLE" && item.viewType === "TILE");
          setCollections(filteredCollections.slice(1)); // Exclude the first item
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCollections();
  }, []);

  return (
    <div style={{ padding: '0 24px 0 24px', width: '100%', textAlign: 'center' }}>
      <div style={{ width: '965px', margin: '0 auto' }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <p>Loading...</p>
          </div>
        ) : (
          collections.map((collection, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ flex: 2 }}>
                <div style={{ marginBottom: '10px' }}>
                  <h2 style={{ fontSize: '22px', color: '#333333', fontWeight: '500' }}>{collection.title}</h2>
                </div>
                <p style={{ fontSize: '12px', color: '#999999' }}>{collection.subtitle}</p>
              </div>
              <div style={{ flex: 7 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {collection.items.slice(0, 4).map((item, idx) => (
                    <div key={idx} style={{ flex: 1 }}>
                      <div style={{ position: 'relative' }}>
                        <img src={item.publication.media[0].uri} alt={item.name} style={{ width: '100%', borderRadius: '4px' }} />
                        <div style={{ position: 'absolute', bottom: '0', left: '0', margin: '6px', padding: '6px', backgroundColor: '#009E8A', borderRadius: '4px' }}>
                          <p style={{ fontSize: '10px', fontWeight: '400', color: 'white', overflow: 'ellipsis', height: '1.4', textAlign: 'center' }}>{item.name}</p>
                        </div>
                      </div>
                      <div style={{ marginTop: '8px' }}>
                        <p style={{ fontSize: '13.36px', fontWeight: '400', color: 'black', overflow: 'ellipsis', height: '1.4' }}>{item.name}</p>
                        <p style={{ fontSize: '18px', fontWeight: '400', color: 'black', overflow: 'ellipsis' }}>{item.publication.priceInfo.price}</p>
                        <p style={{ fontSize: '14px', fontWeight: '400', color: 'black54' }}>{item.publication.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MultipleCollectionsComponent;

