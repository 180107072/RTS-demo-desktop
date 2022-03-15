import clsx from 'clsx';

import css from './traffic_lights.module.css';
import Minimize from '../../../../assets/icons/svg/minimize.svg';
import Restore from '../../../../assets/icons/svg/restore.svg';
import Close from '../../../../assets/icons/svg/close.svg';

export function TrafficLights() {
  return (
    <div
      className={clsx(css.window_controls_container, css.window_traffic_lights)}
    >
      <div
        className={css.window_icon}
        onClick={window.electron.ipcRenderer.minimizeWindow}
      >
        <Minimize />
      </div>
      <div
        className={css.window_icon}
        onClick={window.electron.ipcRenderer.maximizeWindow}
      >
        <Restore />
      </div>
      <div
        className={clsx(css.window_icon, css.window_close)}
        onClick={window.close}
      >
        <Close />
      </div>
    </div>
  );
}
