import { createClient } from 'contentful';
import shallowEqualArrays from 'shallow-equal/arrays';

const client = createClient({
  space: '19kcgufi8mus',
  accessToken:
    'f4ae0cb2b5fd6727808bb80d634d7ebcfd29b0fcb08381ce09fc11bdef8429c8'
});

function dasherize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, '-');
}

function getCategoryNames(category) {
  if (category && category.fields && category.fields.parent) {
    return [category.fields.name, ...getCategoryNames(category.fields.parent)];
  } else {
    return [category.fields.name];
  }
}

const entryNameLookupTable = new Map();

export function getEntryIdFromName(name) {
  const id = entryNameLookupTable.get(name);

  if (id) {
    return Promise.resolve(id);
  }

  return client
    .getEntries({
      'fields.name': name,
      content_type: 'post',
      limit: 1
    })
    .then(entries => {
      if (entries.items && entries.items[0]) {
        return entries.items[0].sys.id;
      } else {
        throw new Error('Not found');
      }
    })
    .then(id => {
      entryNameLookupTable.set(name, id);
      return id;
    });
}

export function getEntry(entryId = '') {
  return client.getEntry(entryId);
}

export function getPost(url = '') {
  const [name, ...hierarchy] = url
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/')
    .reverse();

  return client
    .getEntries({
      'fields.name': name,
      content_type: 'post',
      include: 5
    })
    .then(entries => {
      if (entries.items) {
        return entries.items.find(({ fields }) => {
          return fields.category.some(category => {
            const categoryNames = getCategoryNames(category).map(dasherize);
            return shallowEqualArrays(categoryNames, hierarchy);
          });
        });
      } else {
        throw new Error('Not found');
      }
    });
}
