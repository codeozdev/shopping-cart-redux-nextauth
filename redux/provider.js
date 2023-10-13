'use client'

import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  )
}
