import './Feature.css';

import React from 'react';
import { B } from 'b_';

const bemName = B({ modSeparator: '--' }).bind(undefined, 'nsb-feature-box');

function FeatureBox({ heading, content }) {
  return (
    <div className={bemName()}>
      <h2 className={bemName('heading')}>{heading}</h2>
      {content}
    </div>
  );
}

export default FeatureBox;
