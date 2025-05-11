import React from 'react';
import {Toggle} from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { ToggleMood } from '../../store/themeSlice';

export const ToggleSimpleUsageShowcase = () => {
  const [checked, setChecked] = React.useState(false);
const dispatch = useDispatch();
  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    dispatch(ToggleMood());
  };

  return (
    <Toggle checked={checked} onChange={onCheckedChange}>
      {checked}
    </Toggle>
  );
};
