// contact.js - Módulo para la página de contacto

export function loadContact() {
  const content = document.createElement('div');
  content.classList.add('contact-content');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contacto';
  contactTitle.classList.add('contact-title');
  content.appendChild(contactTitle);

  // Información de contacto
  const infoSection = document.createElement('div');
  infoSection.classList.add('contact-info-section');

  const infoTitle = document.createElement('h2');
  infoTitle.textContent = 'Encuéntranos';
  infoSection.appendChild(infoTitle);

  // Dirección
  const addressCard = createContactCard(
    '📍',
    'Dirección',
    'Calle de la Gastronomía, 42\n28001 Madrid, España'
  );

  // Teléfono
  const phoneCard = createContactCard(
    '📞',
    'Teléfono',
    '+34 912 345 678\nReservas: +34 912 345 679'
  );

  // Email
  const emailCard = createContactCard(
    '✉️',
    'Email',
    'info@lataverna.es\nreservas@lataverna.es'
  );

  infoSection.appendChild(addressCard);
  infoSection.appendChild(phoneCard);
  infoSection.appendChild(emailCard);

  // Formulario de reservas
  const reservationSection = document.createElement('div');
  reservationSection.classList.add('reservation-section');

  const reservationTitle = document.createElement('h2');
  reservationTitle.textContent = 'Haz tu Reserva';
  reservationSection.appendChild(reservationTitle);

  const form = document.createElement('form');
  form.classList.add('reservation-form');

  // Nombre
  const nameGroup = createFormGroup('Nombre completo', 'text', 'name', 'Juan Pérez');
  
  // Email
  const emailGroup = createFormGroup('Email', 'email', 'email', 'juan@example.com');
  
  // Teléfono
  const phoneGroup = createFormGroup('Teléfono', 'tel', 'phone', '+34 600 000 000');
  
  // Fecha
  const dateGroup = createFormGroup('Fecha', 'date', 'date', '');
  
  // Hora
  const timeGroup = createFormGroup('Hora', 'time', 'time', '');
  
  // Número de personas
  const guestsGroup = createFormGroup('Número de personas', 'number', 'guests', '2', { min: 1, max: 12 });

  // Mensaje
  const messageGroup = document.createElement('div');
  messageGroup.classList.add('form-group');
  
  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Comentarios adicionales';
  
  const messageTextarea = document.createElement('textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.rows = 4;
  messageTextarea.placeholder = 'Alergias, ocasión especial, preferencias...';
  
  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageTextarea);

  // Botón de envío
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('submit-btn');
  submitBtn.textContent = 'Enviar Reserva';

  // Agregar event listener al formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu reserva! Nos pondremos en contacto contigo pronto.');
    form.reset();
  });

  form.appendChild(nameGroup);
  form.appendChild(emailGroup);
  form.appendChild(phoneGroup);
  form.appendChild(dateGroup);
  form.appendChild(timeGroup);
  form.appendChild(guestsGroup);
  form.appendChild(messageGroup);
  form.appendChild(submitBtn);

  reservationSection.appendChild(form);

  // Horarios de atención
  const hoursSection = document.createElement('div');
  hoursSection.classList.add('contact-hours');
  
  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = 'Horario de Atención';
  
  const hoursList = document.createElement('div');
  hoursList.classList.add('hours-list');
  hoursList.innerHTML = `
    <p><strong>Reservas telefónicas:</strong></p>
    <p>Lunes - Domingo: 10:00 - 22:00</p>
    <br>
    <p><strong>Horario del restaurante:</strong></p>
    <p>Lunes - Viernes: 12:00 - 23:00</p>
    <p>Sábado - Domingo: 11:00 - 00:00</p>
  `;
  
  hoursSection.appendChild(hoursTitle);
  hoursSection.appendChild(hoursList);

  content.appendChild(infoSection);
  content.appendChild(reservationSection);
  content.appendChild(hoursSection);

  return content;
}

function createContactCard(icon, title, info) {
  const card = document.createElement('div');
  card.classList.add('contact-card');

  const cardIcon = document.createElement('div');
  cardIcon.classList.add('contact-icon');
  cardIcon.textContent = icon;

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;

  const cardInfo = document.createElement('p');
  cardInfo.style.whiteSpace = 'pre-line';
  cardInfo.textContent = info;

  card.appendChild(cardIcon);
  card.appendChild(cardTitle);
  card.appendChild(cardInfo);

  return card;
}

function createFormGroup(labelText, type, name, placeholder, attrs = {}) {
  const group = document.createElement('div');
  group.classList.add('form-group');

  const label = document.createElement('label');
  label.setAttribute('for', name);
  label.textContent = labelText;

  const input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.name = name;
  input.placeholder = placeholder;
  input.required = true;

  // Agregar atributos adicionales
  Object.keys(attrs).forEach(key => {
    input.setAttribute(key, attrs[key]);
  });

  group.appendChild(label);
  group.appendChild(input);

  return group;
}
