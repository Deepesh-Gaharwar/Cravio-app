import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import appRouter from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import appStore, { persistor } from './utils/appStore.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router = {appRouter} />
      </PersistGate>
    </Provider>
    
  </StrictMode>,
)
