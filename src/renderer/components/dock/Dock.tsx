import { useMotionValue } from 'framer-motion';
import { useAtom } from 'jotai';
import { RovingTabIndexProvider } from 'react-roving-tabindex';
import { appsConfig } from '../../data/apps/apps-config';
import { openAppsStore } from '../../stores/apps.store';
import css from './Dock.module.scss';
import { DockItem } from './DockItem';

export const Dock = () => {
  const [openApps] = useAtom(openAppsStore);

  const mouseX = useMotionValue<number | null>(null);

  // Hi
  return (
    <section id="dock" className={css.container}>
      <RovingTabIndexProvider options={{ direction: 'horizontal' }}>
        {Object.keys(appsConfig).map((appID, i) => (
          <div>
            {appsConfig[appID].dockBreaksBefore && (
              <div
                className={css.divider}
                key={`${appID}-divider`}
                aria-hidden="true"
              />
            )}
            <DockItem
              key={appID}
              mouseX={mouseX}
              appID={appID}
              isOpen={openApps[appID]}
              {...appsConfig[appID]}
            />
          </div>
        ))}
      </RovingTabIndexProvider>
    </section>
  );
};
