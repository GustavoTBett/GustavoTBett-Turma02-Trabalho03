import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ForgetPassword extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getInputEmail(): Locator {
    return this.page.locator('input[id="email"]');
  }

  getInputCheckbox(): Locator {
    return this.page.locator('input[type="checkbox"]');
  }

  getButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageSucess(): Locator {
    return this.page.locator('text=Nova senha enviada');
  }

  getMessageError(): Locator {
    return this.page.locator('text=E-mail deve ser preenchido');
  }
}
