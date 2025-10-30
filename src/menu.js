// menu.js - Módulo para la página del menú

export function loadMenu() {
  const content = document.createElement('div');
  content.classList.add('menu-content');

  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Nuestro Menú';
  menuTitle.classList.add('menu-title');
  content.appendChild(menuTitle);

  // Entrantes
  const startersSection = createMenuSection('Entrantes', [
    { name: 'Bruschetta Mediterránea', description: 'Pan tostado con tomate, albahaca y aceite de oliva', price: '8€' },
    { name: 'Carpaccio de Ternera', description: 'Finas láminas con rúcula, parmesano y vinagreta', price: '12€' },
    { name: 'Tabla de Quesos Artesanales', description: 'Selección de 5 quesos con mermeladas caseras', price: '15€' },
    { name: 'Pulpo a la Gallega', description: 'Con patatas, pimentón y aceite de oliva', price: '14€' },
  ]);

  // Platos principales
  const mainsSection = createMenuSection('Platos Principales', [
    { name: 'Risotto de Setas', description: 'Con boletus, trufa y parmesano reggiano', price: '18€' },
    { name: 'Ossobuco a la Milanesa', description: 'Jarrete de ternera con gremolata y risotto', price: '24€' },
    { name: 'Lubina al Horno', description: 'Con verduras asadas y salsa de limón', price: '22€' },
    { name: 'Chuleta de Cordero', description: 'Con puré de patata trufado y reducción de vino tinto', price: '26€' },
    { name: 'Lasagna Casera', description: 'Pasta fresca con ragú bolognesa y bechamel', price: '16€' },
  ]);

  // Postres
  const dessertsSection = createMenuSection('Postres', [
    { name: 'Tiramisú Clásico', description: 'Receta tradicional con café y mascarpone', price: '7€' },
    { name: 'Panna Cotta', description: 'Con coulis de frutos rojos', price: '6€' },
    { name: 'Tarta de Queso', description: 'Estilo New York con base de galleta', price: '7€' },
    { name: 'Semifrío de Chocolate', description: 'Con helado de vainilla y salsa de caramelo', price: '8€' },
  ]);

  // Bebidas
  const drinksSection = createMenuSection('Bebidas', [
    { name: 'Vino de la Casa (Copa)', description: 'Tinto, blanco o rosado', price: '5€' },
    { name: 'Vino Reserva (Botella)', description: 'Selección premium', price: '35-85€' },
    { name: 'Cerveza Artesanal', description: 'Variedades locales', price: '4€' },
    { name: 'Cócteles Clásicos', description: 'Preparados por nuestro bartender', price: '9€' },
  ]);

  content.appendChild(startersSection);
  content.appendChild(mainsSection);
  content.appendChild(dessertsSection);
  content.appendChild(drinksSection);

  return content;
}

function createMenuSection(title, items) {
  const section = document.createElement('div');
  section.classList.add('menu-section');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('menu-items');

  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemHeader = document.createElement('div');
    itemHeader.classList.add('item-header');

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = item.price;

    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = item.description;

    menuItem.appendChild(itemHeader);
    menuItem.appendChild(itemDescription);
    itemsContainer.appendChild(menuItem);
  });

  section.appendChild(itemsContainer);
  return section;
}
