import './SoftFooter.css';
import React, { PureComponent } from 'react';
import { B } from 'b_';

const bemName = B({ modSeparator: '--' }).bind(undefined, 'nsb-softfooter');

const INITIAL_DELAY_BEFORE_TUT = 2000;
const DELAY_BETWEEN_TUT = 4000;
const SHOW_TUT_DURATION = 1500;

class SoftFooter extends PureComponent {
  constructor() {
    super();
    this.state = { animate: false, tutTut: false };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation() {
    const { animate } = this.state;
    this.setState({ animate: !animate });

    if (!animate) {
      this.timeoutId = setTimeout(
        this.showTutTut.bind(this),
        INITIAL_DELAY_BEFORE_TUT
      );
    } else {
      clearTimeout(this.timeoutId);
      this.hideTutTut();
    }
  }

  showTutTut() {
    this.setState({ tutTut: true });
    this.timeoutId = setTimeout(() => {
      this.hideTutTut();
      this.timeoutId = setTimeout(
        this.showTutTut.bind(this),
        DELAY_BETWEEN_TUT
      );
    }, SHOW_TUT_DURATION);
  }

  hideTutTut() {
    this.setState({ tutTut: false });
  }

  render() {
    const { animate, tutTut } = this.state;
    return (
      <section className={`nsb-wrapper ${bemName({ animate })}`}>
        <div className={bemName('kissgoodbye')} onClick={this.toggleAnimation}>
          {tutTut ? 'Tut! Tut!' : 'Spar tid, miljø og penger. Ta toget.'}
        </div>
      </section>
    );
  }
}

export default SoftFooter;
