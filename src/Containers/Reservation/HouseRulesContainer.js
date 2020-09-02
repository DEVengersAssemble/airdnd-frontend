import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HouseRules from '../../Components/Reservation/HouseRules';

const HouseRulesContainer = () => {
  const { id, address, checkin, checkout, rules } = useSelector(
    state => ({
      id: state.home.homeState.home.id,
      address: state.home.homeState.home.address,
      checkin: state.home.homeState.home.checkin,
      checkout: state.home.homeState.home.checkout,
      rules: state.home.homeState.home.notice.rules,
    }),
    shallowEqual,
  );

  const history = useHistory();
  const [readMore, setReadMore] = useState(false);

  const shortAddress = address.split(',')[0];

  const onReadMore = () => setReadMore(!readMore);
  const onNextPage = () => history.push(`/Reservation/GuestInfo/${id}`);

  return (
    <HouseRules
      address={shortAddress}
      checkin={checkin}
      checkout={checkout}
      rules={rules}
      readMore={readMore}
      onReadMore={onReadMore}
      onNextPage={onNextPage}
    />
  );
};

export default HouseRulesContainer;
