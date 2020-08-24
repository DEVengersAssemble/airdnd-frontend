import axios from 'axios';

export const getLocationAutoComplete = async value => {
  const results = await axios.get(
    `/api/v2/autocompletes?country=KR&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&language=ko&locale=ko&num_results=5&user_input=${value}&api_version=1.1.1&satori_config_token=EhIiJQIiEhUCEiIyEhIyEiEA&vertical_refinement=all&region=-1&options=should_filter_by_vertical_refinement%7Chide_nav_results%7Cshould_show_stays%7Csimple_search`,
  );
  return results.data.autocomplete_terms.map(term => term.display_name);
};
