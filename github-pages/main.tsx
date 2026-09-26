import { createRoot } from 'react-dom/client';
import Dashboard from '../app/dashboard';
import '../app/globals.css';

const root = document.getElementById('root')!;
createRoot(root).render(<Dashboard page={Number(root.dataset.page)} />);
