type Toggle = 'light' | 'dark'
type System = 'system'

function App(): JSX.Element {
  async function toggle(): Promise<Toggle> {
    return window.darkMode.toggle()
  }
  async function system(): Promise<System> {
    return window.darkMode.system()
  }
  return (
    <div>
      <h1>Hello World!</h1>

      <button onClick={toggle}>Toggle Dark Mode</button>
      <button onClick={system}>Reset to System Theme</button>
    </div>
  )
}

export default App
