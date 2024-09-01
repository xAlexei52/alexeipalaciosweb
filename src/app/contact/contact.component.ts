import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulario enviado', this.contactForm);
    // Aquí iría la lógica para manejar el envío del formulario
    // Por ejemplo, llamar a un servicio para enviar los datos al backend
    
    // Resetear el formulario después del envío
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
    // Aquí podrías agregar una notificación de éxito o error
  }
}