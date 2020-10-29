import React from 'react';
import { 
  Eggs,
  Fats,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
  Sugar,
  Vegan} from '../../shared/icons';

export default function AllergensSection() {
  return (
    <div>
      <Eggs/>
      <Fats/>
      <Fish/>
      <Gluten/>
      <Lactose/>
      <Nuts/>
      <Peanuts/>
      <Sugar/>
      <Vegan/>
    </div>
  )
}