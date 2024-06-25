import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import Login from './login';
import Home from './home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'home',
                element: <Home />,
            },
        ],
    },
]);

export default router;