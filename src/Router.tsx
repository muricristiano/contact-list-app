import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout.tsx'
import { List } from './pages/List/List.tsx'
import { NewContact } from './pages/NewContact/NewContact.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<List />} />
        <Route path="/new" element={<NewContact />} />
      </Route>
    </Routes>
  )
}
