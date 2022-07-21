import React, { FC, ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import theme from '../theme/theme'

const RenderProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        { children }
      </MemoryRouter>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: RenderProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }