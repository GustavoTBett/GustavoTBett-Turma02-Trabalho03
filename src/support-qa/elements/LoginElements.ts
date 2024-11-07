import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getInputLogin(): Locator {
    return this.page.locator('input[id="email"]');
  }

  getInputPassword(): Locator {
    return this.page.locator('input[id="password"]');
  }

  getForgetPassword(): Locator {
    return this.page.locator('a[href="redefinir-senha"]');
  }

  getBtnLogin(): Locator {
    return this.page.locator('button[type="Submit"]');
  }

  getCadastrar(): Locator {
    return this.page.locator('a[href="cadastrar"]');
  }

  getMessageErrorLogin(): Locator {
    return this.page.locator('text=Usuário ou senha incorreto');
  }

  getPageLogged(): Locator {
    return this.page.locator('text=Organizze');
  }
}
