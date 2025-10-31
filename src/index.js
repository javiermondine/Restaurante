// index.js - Controlador principal de la aplicación

import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

console.log('JavaScript cargado correctamente');

// Función para limpiar el contenido y cargar una nueva página
function loadPage(pageLoader) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Limpiar contenido anterior
  content.appendChild(pageLoader()); // Cargar nuevo contenido
}

// Función para actualizar el botón activo
function setActiveButton(buttonId) {
  // Remover clase 'active' de todos los botones
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Agregar clase 'active' al botón seleccionado
  document.getElementById(buttonId).classList.add('active');
}

// Event listeners para los botones de navegación
function initializeNavigation() {
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');

  homeBtn.addEventListener('click', () => {
    loadPage(loadHome);
    setActiveButton('home-btn');
  });

  menuBtn.addEventListener('click', () => {
    loadPage(loadMenu);
    setActiveButton('menu-btn');
  });

  contactBtn.addEventListener('click', () => {
    loadPage(loadContact);
    setActiveButton('contact-btn');
  });
}

// Cargar la página de inicio cuando se carga el documento
document.addEventListener('DOMContentLoaded', () => {
  console.log('Inicializando Restaurant Page');
  
  // Cargar página de inicio por defecto
  loadPage(loadHome);
  
  // Inicializar navegación
  initializeNavigation();
});
