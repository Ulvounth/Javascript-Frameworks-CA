import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

type ToastProps = {
  type: 'success' | 'error' | 'info';
};

const StyledToast = styled.div<ToastProps>`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ type }) =>
    type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
  color: white;
  padding: 12px;
  border-radius: 4px;
  z-index: 1000;
`;

interface ToastComponentProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

type ToastContextType = {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info'
  ) => {
    setMessage(message);
    setType(type);
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && <Toast message={message} type={type} />}
    </ToastContext.Provider>
  );
};

const Toast: React.FC<ToastComponentProps> = ({ message, type }) => {
  return <StyledToast type={type}>{message}</StyledToast>;
};
