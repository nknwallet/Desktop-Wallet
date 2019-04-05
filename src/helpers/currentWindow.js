import { remote } from 'electron';

export default () => {
  const bounds = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds();

  return bounds;
};
