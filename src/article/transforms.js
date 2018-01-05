import React, { createElement } from 'react';
import marksy from 'marksy';
import Accordion from '../components/accordion/Accordion';

const compile = marksy({ createElement });

function markdownToReact(markdown) {
  if (!markdown) {
    return;
  }
  return compile(markdown).tree;
}

function trekkspillToAccordion(module, key) {
  const items = module.fields.items.map(({ fields }) => ({
    heading: fields.tittel,
    content: markdownToReact(fields.beskrivelse)
  }));
  return <Accordion key={key} heading={module.fields.tittel} items={items} />;
}

function mapModules(modules = []) {
  return modules.map((module, index) => {
    if (module.sys.contentType.sys.id === 'trekkspill') {
      return trekkspillToAccordion(module, index);
    }
  });
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
    body: markdownToReact(fields.body),
    modules: mapModules(fields.moduler)
  };
}
