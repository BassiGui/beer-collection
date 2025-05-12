import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared/components/Button';
import { BeerCardProps } from '../../types';

import styles from './BeerCard.module.css';

export const BeerCard = ({ beer, onRemove }: BeerCardProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/beers/edit/${beer.id}`);
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(beer.id);
  };

  const handleActionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={handleClick} role="article">
      <img className={styles.image} src={beer.image} alt={beer.name} />
      <div className={styles.info}>
        <h3 className={styles.name}>{beer.name}</h3>
        <p>{beer.liters}L</p>
        <div className={`${styles.additionalInfo} ${isExpanded ? styles.expanded : ''}`}>
          <p>
            <strong>Tipo:</strong> {beer.type}
          </p>
          <p>
            <strong>Preço: </strong>
            {beer.price.toFixed(2)}€
          </p>
          <p>
            <strong>Avaliação:</strong> {beer.rating}/5
          </p>
          <p>
            <strong>Descrição:</strong> {beer.description}
          </p>
        </div>
      </div>
      <div className={styles.actions} onClick={handleActionsClick}>
        <Button variant="primary" onClick={handleEditClick} aria-label="Editar">
          Editar
        </Button>
        <Button variant="secondary" onClick={handleRemoveClick} aria-label="Remover">
          Remover
        </Button>
      </div>
    </div>
  );
};
