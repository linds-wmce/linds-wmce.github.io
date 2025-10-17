import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactController extends Controller {
  @tracked name = '';
  @tracked email = '';
  @tracked subject = '';
  @tracked message = '';
  @tracked isSubmitting = false;
  @tracked submitSuccess = false;
  @tracked submitError = false;

  @action
  updateName(event) {
    this.name = event.target.value;
    this.clearMessages();
  }

  @action
  updateEmail(event) {
    this.email = event.target.value;
    this.clearMessages();
  }

  @action
  updateSubject(event) {
    this.subject = event.target.value;
    this.clearMessages();
  }

  @action
  updateMessage(event) {
    this.message = event.target.value;
    this.clearMessages();
  }

  @action
  clearMessages() {
    this.submitSuccess = false;
    this.submitError = false;
  }

  @action
  async handleSubmit(event) {
    event.preventDefault();

    this.isSubmitting = true;
    this.clearMessages();

    try {
      const response = await fetch('https://formspree.io/f/mwprynkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          _replyto: this.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form on success
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.submitSuccess = true;
    } catch (error) {
      console.error('Error sending message:', error);
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}
