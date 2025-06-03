import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QuestionProvider } from './context/QuestionContext';
import { ActiveProvider } from './context/ActiveContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ActiveProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </ActiveProvider>
    </BrowserRouter>
  </React.StrictMode>
);
