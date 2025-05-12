import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared/components/Button';
import { Input } from '../../../../shared/components/Input';
import { useBeerForm } from '../../hooks/useBeerForm';
import { BeerFormProps } from '../../types';

import styles from './BeerForm.module.css';

export const BeerForm = ({ initialData, isEditing = false }: BeerFormProps) => {
  const navigate = useNavigate();
  const { handleSubmit, isLoading } = useBeerForm({ initialData, isEditing });

  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    type: initialData?.type || '',
    liters: initialData?.liters ? String(initialData.liters) : '',
    image: initialData?.image || '',
    price: initialData?.price ? String(initialData.price) : '',
    rating: initialData?.rating ? String(initialData.rating) : '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      type: formData.get('type') as string,
      liters: Number(formData.get('liters')),
      image: formData.get('image') as string,
      price: Number(formData.get('price')),
      rating: Number(formData.get('rating')),
    };

    handleSubmit(data);
  };

  return (
    <section className={`${styles.createBeer} container mainContainer`}>
      <form className={styles.forms} onSubmit={onSubmit}>
        <h1 className={styles.title}>{isEditing ? 'Editar cerveja' : 'Criar cerveja'}</h1>

        <Input
          name="name"
          label="Nome"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          name="description"
          label="Descrição"
          type="text"
          required
          value={formData.description}
          onChange={handleChange}
        />

        <Input
          name="type"
          label="Tipo"
          type="text"
          required
          value={formData.type}
          onChange={handleChange}
        />

        <Input
          name="liters"
          label="Litros"
          type="number"
          required
          min="0"
          step="0.1"
          value={formData.liters}
          onChange={handleChange}
        />

        <Input
          name="image"
          label="Url da imagem"
          type="text"
          required
          value={formData.image}
          onChange={handleChange}
        />

        <Input
          name="price"
          label="Preço"
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
        />

        <Input
          name="rating"
          label="Avaliação"
          type="number"
          required
          min="0"
          max="5"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />

        <div className={styles.buttons}>
          <Button type="button" variant="secondary" onClick={() => navigate('/')}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? 'Salvando...' : isEditing ? 'Atualizar' : 'Salvar'}
          </Button>
        </div>
      </form>
    </section>
  );
};
