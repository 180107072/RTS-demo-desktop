import css from './titlebar.module.css';
import { TrafficLights } from './traffic_lights';
import { SettingsContextMenu } from './settings';

export function TitleBar() {
  return (
    <div className={css.wrapper}>
      <div className={css.titlebar}>
        <SettingsContextMenu />
        <TrafficLights />
      </div>
    </div>
  );
}
