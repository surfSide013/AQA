const { test, expect } = require('@playwright/test');

test('carPrice', async ({ page }) => {
// test.slow();
  await page.goto('https://carprice.ru/');

  await expect(page).toHaveTitle(/Выкуп автомобилей в Москве и других городах России – «CarPrice» – быстро, дорого, надежно/);
  const logo = page.locator('.AppHeader_logo__n_Rh2');
  await expect((logo).first()).toBeVisible();

  const box =  page.locator('.Step1_form__8QaMW'); //* Ожидаем полной загрузки форм 
  await expect(box).toBeVisible();

  const passBut = page.locator('.baseStyles_buttonGetPriceMinute__8irsE'); //* Поиск кнопки и проверка, что кнопка заблокирована 
  await expect(passBut).toBeVisible();
  await (passBut).click();
  await passBut.isDisabled();

  await expect(page.locator('.Step1_activeItem__0s1DK')).toHaveText('Легковой'); //* Проверка видимости заполенения формы легкового автомобиля
  
  await passBut.isDisabled(); //* проверка на пустые значения полей при нажатии кнопки 

  const numberAuto = page.getByPlaceholder('A 000 AA 000'); //* Проверка, что кнопка заблокирована при вводе только одного поля(номер) ввода 
  await (numberAuto).fill("О987ВС09");
  await passBut.isDisabled();
  await (passBut).click();
  await (numberAuto).fill('');
  
  const typeMail = page.getByPlaceholder('Email для отправки оценки авто'); //* Проверка, что кнопка заблокирована при вводе только одного поля(мейл) ввода 
  await (typeMail).fill('sssdsdsd@gmail.com');
  await passBut.isDisabled();
  await (passBut).click();
  await (typeMail).fill('');

  await (numberAuto).fill('A777IO878'); //* Проверка невалидных данных и что кнопка заблокирована 
  await (typeMail).fill('vbvwb.com')
  await (passBut).click();
  await passBut.isDisabled();
  await (numberAuto).fill('');
  await (typeMail).fill('');

  await (numberAuto).fill('">"<<<'); //* Проверка невалидных данных(спец. символы)
  await (typeMail).fill('>">>">"|}{')
  await (passBut).click();
  await passBut.isDisabled();
  await (numberAuto).fill('');
  await (typeMail).fill('');

  await (numberAuto).fill('ы869фф987'); //* Проверка невалидных данных (мейл с русскими буквами)
  await (typeMail).fill('йогурт@gmail.ru')
  await (passBut).click();
  await passBut.isDisabled();
  await (numberAuto).fill('');
  await (typeMail).fill('');

  await (numberAuto).fill('П098АА117'); //* Проверка валидных данных 
  await (typeMail).fill('dscdc@mail.ru');
  const iIcon = page.locator('i').first();
  await (iIcon).toBeVisible();
  await (iIcon).toHaveCSS('background', 'rgb(128, 212, 166) none repeat scroll 0% 0% / auto padding-box border-box');
  await passBut.toBeEditable();
  await (passBut).click();
  

  await page.locator('.Step1_input__mQdy_', '.Step1_inputValid__rV4nz')
  .not.toBeVisible(); //* Проверка, что перешли на следующую форму заполнения

//   Step1_input__mQdy_
// Step1_inputValid__rV4nz

});



