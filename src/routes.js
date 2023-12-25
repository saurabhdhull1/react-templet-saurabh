import { createBrowserRouter, useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const spin = 
<Spinner animation="border" role="status">
  <span className="visually-hidden" style={{display:'grid', placeItems:'center', padding:'100px', height:'50vh'}}>spin</span>
</Spinner>

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Suspense fallback={<div style={{display:'grid', placeItems:'center', padding:'100px', height:'50vh'}}>{spin}</div>}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <MainLayout>
        <Suspense fallback={<div style={{display:'grid', placeItems:'center', padding:'100px', height:'50vh'}}>{spin}</div>}>
          <About />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <Suspense fallback={<div style={{display:'grid', placeItems:'center', padding:'100px', height:'50vh'}}>{spin}</div>}>
          <Contact />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: (
      <MainLayout>
        <Suspense fallback={<div style={{display:'grid', placeItems:'center', padding:'100px', height:'50vh'}}>{spin}</div>}>
          <NotFound />
        </Suspense>
      </MainLayout>
    ),
  },
];

export const BrowserRouter = createBrowserRouter(routes);

export function AppRoutes() {
  const routeElement = useRoutes(routes);
  return routeElement;
}
