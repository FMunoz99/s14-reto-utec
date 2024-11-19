import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}


//import { AuthProvider } from "@contexts/AuthContext";
//import "@styles/App.css";
//import "@styles/index.css";
//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import { RouterProvider } from "react-router-dom";
//
//createRoot(document.getElementById("root")!).render(
//	<StrictMode>
//		<AuthProvider>
//			<RouterProvider />
//		</AuthProvider>
//	</StrictMode>,
//);
