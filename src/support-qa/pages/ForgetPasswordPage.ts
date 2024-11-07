import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LoginElements from '../elements/LoginElements';
import ForgetPassword from '../elements/ForgetPassword';
import BasePage from './BasePage';

export default class ForgetPasswordPage extends BasePage {
  readonly loginElements: LoginElements;

  readonly forgetPasswordElements: ForgetPassword;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
    this.forgetPasswordElements = new ForgetPassword(page);
  }

  async testarEnvioRedefinirSenhaClicandoCheckbox(): Promise<void> {
    await this.loginElements.getForgetPassword().click();
    await this.forgetPasswordElements
      .getInputEmail()
      .fill(faker.internet.email());
    await this.forgetPasswordElements.getInputCheckbox().click();
    await this.forgetPasswordElements.getButton().click();
  }

  async testarEnvioRedefinirSenhaNaoClicandoCheckbox(): Promise<void> {
    await this.loginElements.getForgetPassword().click();
    await this.forgetPasswordElements
      .getInputEmail()
      .fill(faker.internet.email());
    await this.forgetPasswordElements.getButton().click();
  }

  async testarEnvioRedefinirSenhaSemEmail(): Promise<void> {
    await this.loginElements.getForgetPassword().click();
    await this.forgetPasswordElements.getButton().click();
  }

  async validarMsgRedefinirSenhaSucess(): Promise<void> {
    await expect(this.forgetPasswordElements.getMessageSucess()).toBeVisible();
  }

  async validarMsgRedefinirSenhaError(): Promise<void> {
    await expect(this.forgetPasswordElements.getMessageError()).toBeVisible();
  }
}
