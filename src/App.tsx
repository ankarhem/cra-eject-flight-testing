import React from 'react';
import ProductGrid from './components/ProductGrid';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const Title = styled.h1`
  font-size: 3rem;
`;

const header = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 text-white">
      <header className={header}>
        <Title>A header</Title>
      </header>
      <ProductGrid />
    </div>
  );
}

export default App;
