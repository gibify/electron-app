import { ElectronAPI } from '@electron-toolkit/preload'
import { darkMode } from './index'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    darkMode: typeof darkMode
  }
}
