import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'portfolio-website';

  loading = false;
  errorMessage = '';
  successMessage = '';

  submitForm() {
    // Simulate form submission (replace this with your actual form submission logic)
    // For demonstration purposes, just clear the form and show the success message

    console.log("Submit form invoked.");
    // Clear the form
    this.resetForm();

    // Display the success message
    this.loading = false;
    this.errorMessage = '';
    this.successMessage = 'Your message has been sent. Thank you!';
  }

  private resetForm() {
    // Reset form fields
    // Note: You may want to bind these properties to ngModel in the template
    // and set them to empty strings here

    this.loading = false;
    this.errorMessage = '';
    this.successMessage = '';
  }
}
