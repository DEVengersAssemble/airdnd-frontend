import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../../Components/Main/SearchForm';
import { setSearchData } from '../../Modules/searchForm';
import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.searchForm);
  console.log('searchData: ', searchData);
  const [locationResult, setLocationResult] = useState([]);

  // location,checkIn,checkOut,guests
  const [type, setType] = useState(null);

  const closePopup = () => {
    setType(null);
  };

  const changeType = e => {
    setType(e.target.name);
  };

  const getLocationAutoComplete = async value => {
    const results = await axios.get(
<<<<<<< HEAD
      // `https://www.airbnb.co.kr/api/v2/autocompletes?country=KR&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&language=ko&locale=ko&num_results=5&user_input=${value}&api_version=1.1.1&satori_config_token=EhIiJQIiEhUCEiIyEhIyEiEA&vertical_refinement=all&region=-1&options=should_filter_by_vertical_refinement%7Chide_nav_results%7Cshould_show_stays%7Csimple_search`,
      `/api/v2/autocompletes?country=KR&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&language=ko&locale=ko&num_results=5&user_input=${value}&api_version=1.1.1&satori_config_token=EhIiJQIiEhUCEiIyEhIyEiEA&vertical_refinement=all&region=-1&options=should_filter_by_vertical_refinement%7Chide_nav_results%7Cshould_show_stays%7Csimple_search`,
=======
      `/api/v2/autocompletes?country=KR&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&language=ko&locale=ko&num_results=5&user_input=${value}&api_version=1.1.1&satori_config_token=EhIiJQIiEhUCEiIyEhIyEiEA&vertical_refinement=all&region=-1&options=should_filter_by_vertical_refinement%7Chide_nav_results%7Cshould_show_stays%7Csimple_search`,
    );
    console.log(
      'results: ',
      results.data.autocomplete_terms.map(term => term.display_name),
>>>>>>> 7019a4364ea3de5fe4a094cf6879415d8a566c7f
    );
  };
  const changeSearchData = (name, value) => {
    const data = { name, value };
    console.log('data: ', data);
    console.log('setSearchData(data): ', setSearchData(data));
    if (name === 'location') {
      getLocationAutoComplete(value);
    }
    dispatch(setSearchData(data));
  };
  return (
    <SearchForm
      type={type}
      changeType={changeType}
      closePopup={closePopup}
      searchData={searchData}
      changeSearchData={changeSearchData}
    ></SearchForm>
  );
};

export default SearchFormContainer;
