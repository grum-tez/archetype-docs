---
sidebar_position: 5
sidebar_label: App.tsx
---

# App.tsx

```
└── src
    ├── App.tsx
```

The `App.tsx` file contains the root component of the application `App` (it comes with the default react template project).

The role of this component is to wrap the main panel component `<MainPanel />` with [constate](/docs/dapps/project/#store) context providers. It should at least be wrapped with the [`Settings`](/docs/dapps/project/settings), [`Taquito`](/docs/dapps/project/taquito), [`Beacon`](/docs/dapps/project/beacon) and [`Contract`](/docs/dapps/project/contract) contexts, as illustrated below:

```tsx
function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <TaquitoProvider>
          <BeaconProvider>
            <ContractProvider>
              <MainPanel />
            </ContractProvider>
          </BeaconProvider>
        </TaquitoProvider>
      </SettingsProvider>
    </div>
  );
}
```

