import React from 'react';
import { Button } from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Design System</h1>
        <p className="text-lg text-gray-600 mb-8">React + TypeScript + Storybook</p>
        <div className="space-x-4">
          <Button variant="primary" size="large">
            Primary Button
          </Button>
          <Button variant="secondary" size="large">
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
