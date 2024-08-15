import { Component } from '@angular/core';

@Component({
  selector: 'app-contact_form-component',
  templateUrl: './contact_form.component.html'
})
export class ContactFormComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
