import './Accordion.css';

import React, { PureComponent } from 'react';
import { B } from 'b_';

const bemName = B({ modSeparator: '--' }).bind(undefined, 'nsb-accordion');

class AccordionSection extends PureComponent {
  constructor() {
    super();
    this.state = { showContent: false };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    const { showContent } = this.state;
    this.setState({ showContent: !showContent });
  }

  render() {
    const { heading, content } = this.props;
    const { showContent } = this.state;

    return (
      <section className={bemName('section')}>
        <button
          className={bemName('toggle', {
            open: showContent,
            closed: !showContent
          })}
          onClick={this.toggleContent}
        >
          {heading}
        </button>
        {showContent && <div className={bemName('content')}>{content}</div>}
      </section>
    );
  }
}

function Accordion({ heading, items = [] }) {
  return (
    <div className={bemName()}>
      <h2>{heading}</h2>
      {items.map((item, index) => <AccordionSection key={index} {...item} />)}
    </div>
  );
}

export default Accordion;
