import { mdiApple } from '@mdi/js';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { useRef } from 'react';
import { AppIcon } from '../../../components/utils/AppIcon';
import { useFocusOutside, useOutsideClick } from '../../../hooks';
import {
  activeMenuStore,
  menuBarMenusStore,
} from '../../../stores/menubar.store';
import { Menu } from './Menu';
import css from './MenuBar.module.scss';

export const MenuBar = () => {
  const [currentAppMenus] = useAtom(menuBarMenusStore);
  const [activeMenu, setActiveMenu] = useAtom(activeMenuStore);

  const parentRef = useRef<HTMLDivElement>();

  /** Close when document focus isn't in any menubar */
  useFocusOutside(parentRef, () => setActiveMenu(''));

  /** Close when clicked outside */
  useOutsideClick(parentRef, () => setActiveMenu(''));

  return (
    <div className={css.container} ref={parentRef}>
      {Object.keys(currentAppMenus).map((menuID) => (
        <div key={menuID}>
          <span style={{ height: '100%' }}>
            <button
              onClick={() => setActiveMenu(menuID)}
              onMouseOver={() => activeMenu && setActiveMenu(menuID)}
              onFocus={() => setActiveMenu(menuID)}
              className={clsx({
                [css.menuButton]: true,
                [css.defaultMenu]: menuID === 'default',
                [css.appleIconButton]: menuID === 'apple',
              })}
              style={
                {
                  '--scale': activeMenu === menuID ? 1 : 0,
                } as React.CSSProperties
              }
            >
              {menuID === 'apple' ? (
                <AppIcon size={18} path={mdiApple} />
              ) : (
                currentAppMenus[menuID].title
              )}
            </button>
          </span>
          <div
            className={css.menuParent}
            style={{
              visibility: activeMenu !== menuID ? 'hidden' : 'visible',
            }}
          >
            <Menu menu={currentAppMenus[menuID].menu} />
          </div>
        </div>
      ))}
    </div>
  );
};
