import React, { createElement } from 'react';
import marksy from 'marksy';

const compile = marksy({ createElement });

function markdownToReact(markdown) {
  if (!markdown) {
    return;
  }
  return compile(markdown).tree;
}

export function brandToArticle({ fields = {} }) {
  return {
    header: fields.companyName,
    preface: fields.website,
    body: markdownToReact(fields.companyDescription)
  };
}

export function postToArticle({ fields = {} }) {
  return {
    header: fields.heading,
    preface: markdownToReact(fields.preface),
    body: markdownToReact(fields.body)
  };
}
