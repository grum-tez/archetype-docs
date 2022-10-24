---
sidebar_position: 0
sidebar_label: App.tsx
---

# App.tsx

```
└── src
    ├── App.tsx
```

The `App.tsx` file contains the root component of the application `App` (it comes with the default react template project).

The role of this component is to wrap the main panel component `<MainPanel />` with [constate](/docs/dapps/project/#store) context providers. It should at least be wrapped with the settings, Taquito and Beacon contexts, as illustrated below:

```tsx
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <SettingsProvider>
        <TaquitoProvider>
          <BeaconProvider>
            <MainPanel />
          </BeaconProvider>
        </TaquitoProvider>
      </SettingsProvider>
    </div>
  );
}
```
