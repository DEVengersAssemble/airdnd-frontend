import React, { useState } from 'react';
import {
  HeartBlock,
  HeartLabel,
  HeartInput,
  HeartIcon,
  EmptyHeart,
  FillHeart,
} from '../StyledComponents/Global/Heart';

const MessagePage = () => {
  const [check, setCheck] = useState(false);
  const onClickHeart = e => {
    setCheck(e.target.checked);
  };

  return (
    <HeartBlock>
      <HeartLabel>
        <HeartInput type="checkbox" onClick={onClickHeart} />
        <HeartIcon checked={check}>
          {check ? <FillHeart /> : <EmptyHeart />}
        </HeartIcon>
      </HeartLabel>
    </HeartBlock>
  );
};

export default MessagePage;
