import { memo } from 'react';

import { UserPosition } from '../../model/types/userPosition';
import { FormRadioButton, Typography, VStack } from '@shared/ui';

interface UserPositionSelectorProps {
    className?: string;
    positions: UserPosition[];
    name: string;
    label: string;
}

export const UserPositionSelector = memo<UserPositionSelectorProps>(function UserPositionSelector(props) {
  return (
    <VStack gapY={11} align="start" className={props.className}>
      <Typography>
        {props.label}
      </Typography>

      <VStack align="start" gapY={7}>
        {props.positions.map(position => (
          <FormRadioButton
            key={position.id}
            value={position.id}
            name={props.name}
            label={position.name} />
        ))}
      </VStack>
    </VStack>
  );
});
