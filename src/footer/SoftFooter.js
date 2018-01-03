import './SoftFooter.css';
import React from 'react';
import b from 'b_';

const bemName = b.bind(undefined, 'nsb-softfooter');

// blocks
// b('button', {size: 'xl'}) === 'button button_size_xl';
//
// // block elements
// b('modal', 'close', {size: 'xl'}) === 'modal__close modal__close_size_xl';

// const bemName = b.bind(undefined, {
//   name: ,
//   modifiers: ['color', 'block'],
//   states: ['disabled']
// });

function SoftFooter() {
  return (
    <section className={`nsb-wrapper ${bemName()}`}>
      <div className={bemName('kissgoodbye')}>
        Spar tid, miljø og penger. Ta toget.
      </div>
    </section>
  );
}

export default SoftFooter;
