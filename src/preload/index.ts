import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

type Toggle = 'light' | 'dark'
type System = 'system'
// Custom APIs for renderer
const api = {}
export const darkMode = {
  toggle(): Promise<Toggle> {
    return ipcRenderer.invoke('dark-mode:toggle')
  },
  system(): Promise<System> {
    return ipcRenderer.invoke('dark-mode:system')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('darkMode', darkMode)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
