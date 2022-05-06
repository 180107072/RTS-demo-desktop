import { mdiApple } from '@mdi/js';
import clsx from 'clsx';
import { useState } from 'react';
import { useTimeout } from '../../hooks';
import { AppIcon } from '../utils/AppIcon';
import css from './StartupChime.module.scss';

export const StartupChime = () => {
  const [hiddenSplashScreen, setHiddenSplashScreen] = useState(false);

  useTimeout(() => {
    setHiddenSplashScreen(false);
  }, 3000);

  return (
    <>
      <div
        className={clsx({
          [css.splashScreen]: true,
          [css.hidden]: hiddenSplashScreen,
        })}
        hidden={hiddenSplashScreen}
      >
        <AppIcon path={mdiApple} fill="white" size={100} />
      </div>
    </>
  );
};
