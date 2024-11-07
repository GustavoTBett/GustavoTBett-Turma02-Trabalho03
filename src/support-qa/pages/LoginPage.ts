import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LoginElements from '../elements/LoginElements';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.loginElements.getInputLogin().fill(faker.internet.email());
    await this.loginElements.getInputPassword().fill(faker.internet.password());
    await this.loginElements.getBtnLogin().click();
  }

  async preencherFormularioCorreto(): Promise<void> {
    await this.loginElements.getInputLogin().fill('user1');
    await this.loginElements.getInputPassword().fill('pass1');
    await this.loginElements.getBtnLogin().click();
  }

  async validarErroLogin(): Promise<void> {
    await expect(this.loginElements.getMessageErrorLogin()).toBeVisible();
  }

  async validarAcesso(): Promise<void> {
    await expect(this.loginElements.getPageLogged()).toBeVisible();
  }
}
