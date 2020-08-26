/* eslint react/no-multi-comp: 0, no-console: 0 */
import React from 'react';
import Slider from 'rc-slider';

const { Range } = Slider;

const style = { width: 400, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

const MyRange = () => (
  <div style={style}>
    <p>Basic Range，`allowCross=false`</p>
    <Range allowCross={false} defaultValue={[0, 20]} onChange={log} />
  </div>
);

export default MyRange;
