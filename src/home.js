// home.js - Módulo para la página de inicio

export function loadHome() {
  const content = document.createElement('div');
  content.classList.add('home-content');

  // Hero section
  const hero = document.createElement('div');
  hero.classList.add('hero');
  
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Bienvenido a La Taverna';
  
  const heroSubtitle = document.createElement('p');
  heroSubtitle.classList.add('hero-subtitle');
  heroSubtitle.textContent = 'Auténtica cocina mediterránea desde 1985';
  
  hero.appendChild(heroTitle);
  hero.appendChild(heroSubtitle);

  // About section
  const about = document.createElement('div');
  about.classList.add('about-section');
  
  const aboutTitle = document.createElement('h2');
  aboutTitle.textContent = 'Nuestra Historia';
  
  const aboutText = document.createElement('p');
  aboutText.textContent = 'Durante más de 35 años, La Taverna ha sido el corazón culinario de la ciudad. ' +
    'Nuestros chefs combinan recetas tradicionales con técnicas modernas para crear experiencias ' +
    'gastronómicas inolvidables. Cada plato es preparado con ingredientes frescos y locales, ' +
    'seleccionados cuidadosamente cada mañana.';
  
  about.appendChild(aboutTitle);
  about.appendChild(aboutText);

  // Features section
  const features = document.createElement('div');
  features.classList.add('features');
  
  const feature1 = createFeature('🍷', 'Vinos Selectos', 'Carta con más de 200 referencias');
  const feature2 = createFeature('👨‍🍳', 'Chef Estrella', 'Galardonados internacionalmente');
  const feature3 = createFeature('🌿', 'Ingredientes Frescos', 'De productores locales');
  
  features.appendChild(feature1);
  features.appendChild(feature2);
  features.appendChild(feature3);

  // Hours section
  const hours = document.createElement('div');
  hours.classList.add('hours-section');
  
  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = 'Horarios';
  
  const hoursList = document.createElement('div');
  hoursList.classList.add('hours-list');
  hoursList.innerHTML = `
    <p><strong>Lunes - Viernes:</strong> 12:00 - 23:00</p>
    <p><strong>Sábado - Domingo:</strong> 11:00 - 00:00</p>
    <p><strong>Cocina cierra:</strong> 22:30</p>
  `;
  
  hours.appendChild(hoursTitle);
  hours.appendChild(hoursList);

  // Append all sections
  content.appendChild(hero);
  content.appendChild(about);
  content.appendChild(features);
  content.appendChild(hours);

  return content;
}

function createFeature(icon, title, description) {
  const feature = document.createElement('div');
  feature.classList.add('feature-card');
  
  const featureIcon = document.createElement('div');
  featureIcon.classList.add('feature-icon');
  featureIcon.textContent = icon;
  
  const featureTitle = document.createElement('h3');
  featureTitle.textContent = title;
  
  const featureDesc = document.createElement('p');
  featureDesc.textContent = description;
  
  feature.appendChild(featureIcon);
  feature.appendChild(featureTitle);
  feature.appendChild(featureDesc);
  
  return feature;
}
