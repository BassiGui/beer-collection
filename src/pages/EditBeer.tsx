import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Beer } from '../api/types/beer';
import { useBeerUseCase } from '../api/useCases/beerUseCase';
import { BeerForm } from '../features/beer-management/components/BeerForm';

export const EditBeer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { handleGetBeer } = useBeerUseCase();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      if (!id) {
        navigate('/');
        return;
      }

      try {
        const beerData = await handleGetBeer(id);
        if (beerData) {
          setBeer(beerData);
        } else {
          throw new Error('Cerveja não encontrada');
        }
      } catch (error) {
        console.error('Erro ao carregar cerveja:', error);
        navigate('/');
      }
    };

    fetchBeer();
  }, [id]);

  if (!beer) {
    return <div>Carregando...</div>;
  }

  return <BeerForm initialData={beer} isEditing />;
};

export default EditBeer;
