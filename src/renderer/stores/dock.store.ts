import { atom } from 'jotai';
import { appsConfig } from '../../data/apps/apps-config';

export const appSizeIndexAtom = atom(
  Array(Object.keys(appsConfig).length).fill(0).map(Number)
);
