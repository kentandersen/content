import React, { createElement } from 'react';
import marksy from 'marksy';
import Accordion from '../components/accordion/Accordion';
import FeatureBox from '../components/feature/Feature';

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

function featureToFeatureBox({ fields }, key) {
  const content = markdownToReact(fields.body);
  return <FeatureBox key={key} heading={fields.heading} content={content} />;
}

function unknownModule(module, key) {
  return <div key={key}>Ukjent: {module.sys.contentType.sys.id}</div>;
}

function mapModules(modules = []) {
  return modules.map((module, index) => {
    switch (module.sys.contentType.sys.id) {
      case 'trekkspill':
        return trekkspillToAccordion(module, index);
      case 'feature':
        return featureToFeatureBox(module, index);
      default:
        return unknownModule(module, index);
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
    modulesTop: mapModules(fields.modulesTop),
    modulesBottom: mapModules(fields.modulesBottom)
  };
}
