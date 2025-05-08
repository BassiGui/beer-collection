import { useEffect } from 'react';

import { useBeerStore } from '../store/beerStore';

export function BeerList() {
  const { beers, loading, error, fetchBeers } = useBeerStore();

  useEffect(() => {
    void fetchBeers();
  }, [fetchBeers]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error !== null) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h2>Lista de Cervejas</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {beers.map((beer) => (
          <div
            key={beer.id}
            style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}
          >
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
