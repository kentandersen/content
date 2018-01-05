import './Article.css';

import React from 'react';
import b from 'b_';

const bemName = b.bind(undefined, 'nsb-article');

function Article({ header, preface, body, modulesTop, modulesBottom }) {
  return (
    <article className={`${bemName()} nsb-wrapper`}>
      <h1 className="page-header">{header}</h1>
      {preface && <div className={bemName('preface')}>{preface}</div>}
      {modulesTop && <div className={bemName('modules')}>{modulesTop}</div>}
      {body && <div className={bemName('body')}>{body}</div>}
      {modulesBottom && (
        <div className={bemName('modules')}>{modulesBottom}</div>
      )}
    </article>
  );
}

export default Article;
