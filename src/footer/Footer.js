import './Footer.css';

import React from 'react';
import { B } from 'b_';

const bemName = B({ modSeparator: '--' }).bind(undefined, 'nsb-page-footer');

function Footer() {
  return (
    <footer className={`${bemName()} nsb-wrapper`} aria-label="Viktige lenker">
      <div className={bemName('section')}>
        <h2 className="visuallyhidden">Navigasjon</h2>

        <h3 className={bemName('header')}>Kontakt oss</h3>

        <ul className={bemName('list')}>
          <li className={bemName('list-item')}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb/kontakt-oss/hittegods"
            >
              <span>Mistet eller glemt noe?</span>
            </a>
          </li>
          <li className={bemName('list-item')}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb/kontakt-oss/kontrollgebyr"
            >
              <span>Har du fått kontrollgebyr?</span>
            </a>
          </li>
          <li className={bemName('list-item')}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb/kontakt-oss/vil-du-soke-om-refusjon"
            >
              <span>Vil du søke om refusjon?</span>
            </a>
          </li>
          <li className={bemName('list-item')}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb/kontakt-oss/tilbakemelding"
            >
              <span>Har du en tilbakemelding?</span>
            </a>
          </li>
          <li className={bemName('list-item', { 'call-us': true })}>
            <div className={bemName('highlight')}>
              Ring oss på&nbsp;
              <a className={bemName('link')} href="tel:+4761051910">
                61 05 19 10
              </a>
            </div>
            <a href="https://test3.cloud.nsb.no/om-nsb/kontakt-oss/kundesenter">
              Les mer om NSB Kundesenter
            </a>
          </li>
        </ul>
      </div>

      <div className={bemName('section')}>
        <h3 className={`${bemName('header')} visuallyhidden`}>
          Høyre lenkeliste
        </h3>
        <ul className={bemName('list')}>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb"
            >
              <span>Om NSB</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/om-nsb/behandling-og-bruk-av-personopplysninger"
            >
              <span>Personvern</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="https://test3.cloud.nsb.no/12669/bruk-av-cookies-infokapsler"
            >
              <span>Informasjonskapsler (cookies)</span>
            </a>
          </li>
        </ul>
        <h3 className={`${bemName('header')} visuallyhidden`}>
          Følg NSB på sosiale medier
        </h3>
        <ul className={bemName('list')}>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="http://www.facebook.com/nsb.no"
              data-event-label="Facebook"
            >
              <span>Facebook</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="https://www.instagram.com/nsb_no"
              data-event-label="Instagram"
            >
              <span>Instagram</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="http://twitter.com/nsb_no"
              data-event-label="Twitter"
            >
              <span>Twitter</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="http://www.youtube.com/user/nsb"
              data-event-label="Youtube"
            >
              <span>Youtube</span>
            </a>
          </li>
          <li className={bemName('list-item', { secondary: true })}>
            <a
              className={bemName('link')}
              href="https://plus.google.com/105480024587119911179"
              data-event-label="Google pluss"
            >
              <span>Google+</span>
            </a>
          </li>
        </ul>
      </div>

      <a
        href="https://test3.cloud.nsb.no/en/frontpage"
        className={bemName('change-language')}
      >
        In English
      </a>
    </footer>
  );
}

export default Footer;
