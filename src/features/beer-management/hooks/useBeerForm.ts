import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBeerUseCase } from '../../../api/useCases/beerUseCase';
import { BeerFormData, BeerFormProps } from '../types';

export const useBeerForm = ({ initialData, isEditing = false }: BeerFormProps = {}) => {
  const { handleAddBeer, handleUpdateBeer } = useBeerUseCase();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: BeerFormData) => {
    try {
      setIsLoading(true);
      if (isEditing && initialData) {
        await handleUpdateBeer(initialData.id, data);
      } else {
        await handleAddBeer(data);
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
  };
};
