import { Outlet } from 'react-router-dom'
import { Header } from './../../components/Header/Header.tsx'
import { DefaultLayoutStyles } from './DefaultLayout-styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutStyles>
      <Header />
      <Outlet />
    </DefaultLayoutStyles>
  )
}