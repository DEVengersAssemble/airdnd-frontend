import React from 'react';
import styled from 'styled-components';

const StBackgroundWrapper = styled.div`
  height: 650px;
  background-size: cover;
  background-image: url('https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1440');
`;

const Background = () => {
  return <StBackgroundWrapper></StBackgroundWrapper>;
};

export default Background;
