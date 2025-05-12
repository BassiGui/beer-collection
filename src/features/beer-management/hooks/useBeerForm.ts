import { useNavigate } from 'react-router-dom';

import { useBeerUseCase } from '../../../api/useCases/beerUseCase';
import { useStore } from '../../../store';
import { BeerFormData } from '../types';

export const useBeerForm = () => {
  const { handleAddBeer } = useBeerUseCase();
  const { isLoading, setLoading } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (data: BeerFormData) => {
    setLoading(true);
    try {
      await handleAddBeer(data);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
  };
};
