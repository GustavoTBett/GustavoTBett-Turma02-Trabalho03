import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastrarElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getInputNome(): Locator {
    return this.page.locator('input[id="nome"]');
  }

  getInputSobrenome(): Locator {
    return this.page.locator('input[id="sobrenome"]');
  }

  getInputEmail(): Locator {
    return this.page.locator('input[id="email"]');
  }

  getInputSenha(): Locator {
    return this.page.locator('input[id="password"]');
  }

  getButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageSucess(): Locator {
    return this.page.locator('text=Cadastro realizado com sucesso');
  }

  getMessageError(): Locator {
    return this.page.locator('text=O cadastro não pode estar vazio');
  }
}
