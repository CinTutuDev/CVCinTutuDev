import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('https://formsubmit.co/6fb3a89c4ac279240907cc1b363f0488', this.formData, { headers })
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          alert('El formulario se envió correctamente. ¡Gracias por contactarnos!');
        },
        error => {
          console.error('Error al enviar el formulario:', error);
          this.errorMessage = 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.';
        }
      );
      alert('El formulario se envió correctamente. ¡Gracias por contactarnos!');
    /*   this.resetForm(); */
  }

  validateForm(): boolean {
    // Realizar la validación del formulario aquí
    // Verificar que los campos obligatorios estén completos u aplicar otras validaciones

    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Por favor, complete todos los campos obligatorios.';
      return false;
    }

    // Validación adicional si es necesario

    return true;
  }

  resetForm() {
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
  }

}
