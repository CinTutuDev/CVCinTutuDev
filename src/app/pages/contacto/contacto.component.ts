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
    // Validar el formulario antes de enviarlo
    if (!this.validateForm()) {
      return;
    }

    // Configurar los encabezados de la solicitud
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Realizar la solicitud POST al servidor con los datos del formulario
    this.http.post('url_del_servidor', this.formData, { headers })
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);

          // Restablecer el formulario después del envío exitoso
          this.resetForm();
        },
        error => {
          console.error('Error al enviar el formulario:', error);
          this.errorMessage = 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.';
        }
      );
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
    // Restablecer los valores del formulario
    this.formData = {
      name: '',
      email: '',
      message: ''
    };

    // Restablecer el mensaje de error
    this.errorMessage = '';
  }
}
