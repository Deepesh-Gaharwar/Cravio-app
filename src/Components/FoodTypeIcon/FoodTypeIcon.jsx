import React from 'react';

const FoodTypeIcon = ({ isVeg, size = 16 }) => {
  
  const vegColors = {
    border: '#0f8a45',
    fill: '#0f8a45'
  };
  
  const nonVegColors = {
    border: '#e43b4f', 
    fill: '#e43b4f'
  };

  const colors = isVeg ? vegColors : nonVegColors;

  return (
    <div 
      style={{
        width: size,
        height: size,
        border: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px',
        flexShrink: 0
      }}
    >
      <div 
        style={{
          width: '60%',
          height: '60%',
          backgroundColor: colors.fill,
          borderRadius: '50%'
        }}
      />
    </div>
  );
};

export default FoodTypeIcon;