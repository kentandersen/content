import './AppBtns.css';

import React from 'react';
import b from 'b_';
// from https://commons.wikimedia.org/wiki/File:Download_on_the_App_Store_Badge.svg
import appStoreLogo from './Download-on-the-App-Store-Badge.svg';

// from https://commons.wikimedia.org/wiki/File:Get_it_on_Google_play.svg
import googlePlayLogo from './Get-it-on-Google-play.svg';

const bemName = b.bind(undefined, 'nsb-app-btns');

function AppBtn() {
  return (
    <div className={`${bemName()} nsb-wrapper`}>
      <a
        className={bemName('btn')}
        href="https://itunes.apple.com/no/app/nsb/id439655098"
      >
        <img src={appStoreLogo} alt="Apple App Store" />
      </a>
      <a
        className={bemName('btn')}
        href="https://play.google.com/store/apps/details?id=com.intele.nsbmob.app"
      >
        <img src={googlePlayLogo} alt="Google Play" />
      </a>
    </div>
  );
}
export default AppBtn;
