import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LoginElements from '../elements/LoginElements';
import BasePage from './BasePage';
import CadastrarElements from '../elements/CadastrarElements';

export default class CadastrarPage extends BasePage {
  readonly loginElements: LoginElements;

  readonly cadastrarElements: CadastrarElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
    this.cadastrarElements = new CadastrarElements(page);
  }

  async testarCadastraPreenchendoTudo(): Promise<void> {
    await this.loginElements.getCadastrar().click();
    await this.cadastrarElements.getInputNome().fill(faker.person.firstName());
    await this.cadastrarElements
      .getInputSobrenome()
      .fill(faker.person.lastName());
    await this.cadastrarElements.getInputEmail().fill(faker.internet.email());
    await this.cadastrarElements
      .getInputSenha()
      .fill(faker.internet.password());
    await this.cadastrarElements.getButton().click();
  }

  async testarCadastraSemPreencher(): Promise<void> {
    await this.loginElements.getCadastrar().click();
    await this.cadastrarElements.getButton().click();
  }

  async validarMsgCadastrarSucess(): Promise<void> {
    await expect(this.cadastrarElements.getMessageSucess()).toBeVisible();
  }

  async validarMsgCadastrarError(): Promise<void> {
    await expect(this.cadastrarElements.getMessageError()).toBeVisible();
  }
}
