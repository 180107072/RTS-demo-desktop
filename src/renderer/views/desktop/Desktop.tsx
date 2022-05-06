import { useEffect, useRef } from 'react';
import { ContextMenu } from '../../components/Desktop/ContextMenu/ContextMenu';
import { StartupChime } from '../../components/Desktop/StartupChime';
import { WindowsArea } from '../../components/Desktop/Window/WindowsArea';
import { Dock } from '../../components/dock/Dock';
import { TopBar } from '../../components/topbar/TopBar';
import css from './Desktop.module.scss';

const DarkBackground = '/assets/wallpapers/3-1.jpg';
const LightBackground = '/assets/wallpapers/3-2.jpg';

export const Desktop = () => {
  const outerRef = useRef<HTMLDivElement>();

  useEffect(() => {}, []);

  return (
    <>
      <main ref={outerRef} className={css.main}>
        <ContextMenu outerRef={outerRef} />
        <TopBar />
        <WindowsArea />
        <Dock />
      </main>

      <div className={css.backgroundCover} aria-hidden="true" />
    </>
  );
};

function preloadImage(path: string) {
  const img = new Image();
  img.src = path;
}
