import './App.css'
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import TicketRoute from '../src/pages/ticket'
import QuizRoute from '../src/pages/quiz'
import Home from '../src/pages/home'
import Counter from '../src/pages/count'
import Users from '../src/pages/users'

const rootRoute = createRootRoute()
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const counterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/count',
  component: Counter,
})

const ticketRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ticket',
  component: TicketRoute,
})

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz',
  component: QuizRoute,
})

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: Users,
})

const routeTree = rootRoute.addChildren([indexRoute, ticketRoute, quizRoute, counterRoute, usersRoute])
const router = createRouter({ routeTree })


export default function App() {
    return <RouterProvider router={router} />
}