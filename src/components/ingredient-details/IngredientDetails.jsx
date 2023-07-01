import React from 'react';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';

import styles from './IngredientDetails.module.css';

function IngredientDetails({ item }) {
  return (
  <div>
  <img
       className={styles.image}
       src={item.image_large}
       alt={item.name}
     />
  <h2 className={styles.title}>{item.name}</h2>
  <div className={styles.parametres}>
  <div>
  <span>Калории, ккал:</span>
  <span>{item.calories}</span>
  </div>
  <div>
  <span>Белки, г:</span>
  <span>{item.proteins}</span>
  </div>
  <div>
  <span>Жиры, г:</span>
  <span>{item.fat}</span>
  </div>
  <div>
  <span>Углеводы, г:</span>
  <span>{item.carbohydrates}</span>
  </div>
  </div>
  </div>
  );
  }
  
  IngredientDetails.propTypes = {
  item: ingredientType,
  };
  
  export default IngredientDetails;