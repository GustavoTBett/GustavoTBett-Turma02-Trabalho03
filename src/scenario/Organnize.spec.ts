import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support-qa/pages/LoginPage';
import ForgetPasswordPage from '../support-qa/pages/ForgetPasswordPage';
import CadastrarPage from '../support-qa/pages/CadastrarPage';

test.describe('Tela de login', () => {
  const CONFIG = join(__dirname, '../support-qa/fixtures/config.yml');
  let loginPage: LoginPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.organnize')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Tentativa de login erro', async () => {
    await loginPage.preencherFormulario();
    await loginPage.validarErroLogin();
  });

  test('Tentativa de login sucesso', async () => {
    await loginPage.preencherFormularioCorreto();
    await loginPage.validarAcesso();
  });
});

test.describe('Tela de redefinir senha', () => {
  const CONFIG = join(__dirname, '../support-qa/fixtures/config.yml');
  let forgetPasswordPage: ForgetPasswordPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.organnize')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    forgetPasswordPage = new ForgetPasswordPage(page);
    await page.goto(BASE_URL);
  });

  test('Tentativa de redifinir senha usando o checkbox de redefinir a senha', async () => {
    await forgetPasswordPage.testarEnvioRedefinirSenhaClicandoCheckbox();
    await forgetPasswordPage.validarMsgRedefinirSenhaSucess();
  });

  test('Tentativa de redifinir senha sem usar o checkbox de redefinir a senha', async () => {
    await forgetPasswordPage.testarEnvioRedefinirSenhaClicandoCheckbox();
    await forgetPasswordPage.validarMsgRedefinirSenhaSucess();
  });

  test('Tentativa de redifinir senha sem usar o email', async () => {
    await forgetPasswordPage.testarEnvioRedefinirSenhaSemEmail();
    await forgetPasswordPage.validarMsgRedefinirSenhaError();
  });
});

test.describe('Tela de cadastro', () => {
  const CONFIG = join(__dirname, '../support-qa/fixtures/config.yml');
  let cadastrarPage: CadastrarPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.organnize')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastrarPage = new CadastrarPage(page);
    await page.goto(BASE_URL);
  });

  test('Tentativa de cadastrar preenchendo tudo', async () => {
    await cadastrarPage.testarCadastraPreenchendoTudo();
    await cadastrarPage.validarMsgCadastrarSucess();
  });

  test('Tentativa de cadastrar sem preencher nada', async () => {
    await cadastrarPage.testarCadastraSemPreencher();
    await cadastrarPage.validarMsgCadastrarError();
  });
});
