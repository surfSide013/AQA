# carP 

#### В этом тесте сделал проверку на форму заполнения Легкового автомобиля 

#### Основные проверки были сделаны на две формы, Номер автомобиля и Мейл c применением техник тест-дизайна
Граничные значения 
Эквивалентное разбиение


Ожидаем проверку на тайтл и логотип
>await expect(page).toHaveTitle(/Выкуп автомобилей в Москве и других городах России – «CarPrice» – быстро, дорого, надежно/);
  const logo = page.locator('.AppHeader_logo__n_Rh2');
  await expect((logo).first()).toBeVisible();

Проверка на появление формы заполнения
>const box =  page.locator('.Step1_form__8QaMW'); //* Ожидаем полной загрузки форм 
await expect(box).toBeVisible();

Ожидание кнопки + проверка дизейбл
>const passBut = page.locator('.baseStyles_buttonGetPriceMinute__8irsE'); 
  await expect(passBut).toBeVisible();
  await (passBut).click();
  await passBut.isDisabled();

Проверка присутствия формы легкового автомобиля + дизейбл кнопки при пустых значениях 
  >await expect(page.locator('.Step1_activeItem__0s1DK')).toHaveText('Легковой');
  await passBut.isDisabled();

Проверка, что кнопка заблокирована при вводе только одного поля(номер) ввода
  >const numberAuto = page.getByPlaceholder('A 000 AA 000');
  await (numberAuto).fill("О987ВС09");
  await passBut.isDisabled();
  await (passBut).click();
  await (numberAuto).fill('');

Проверка, что кнопка заблокирована при вводе только одного поля(мейл) ввода
  >const typeMail = page.getByPlaceholder('Email для отправки оценки авто'); 
  await (typeMail).fill('sssdsdsd@gmail.com');
  await passBut.isDisabled();
  await (passBut).click();
  await (typeMail).fill('');

Проверка невалидных данных и что кнопка заблокирована 
  >await (numberAuto).fill('A777IO878009809889лолрр');
  await (typeMail).fill('vbvwb.com')
  await (passBut).click();
  await passBut.isDisabled();
  await (numberAuto).fill('');
  await (typeMail).fill('');

Проверка невалидных данных (мейл с русскими буквами)  
  await (numberAuto).fill('ы869фф987');
  await (typeMail).fill('йогурт@gmail.ru')
  await (passBut).click();
  await passBut.isDisabled();
  await (numberAuto).fill('');
  await (typeMail).fill('');

Проверка валидных данных по активной кнопки + проверка бордера
  await (numberAuto).fill('П098АА117'); 
  await (typeMail).fill('dscdc@mail.ru');
  const iIcon = page.locator('i').first();
  await (iIcon).toBeVisible();
  await (iIcon).toHaveCSS('background', 'rgb(128, 212, 166) none repeat scroll 0% 0% / auto padding-box border-box');
  await passBut.toBeEditable();
  await (passBut).click();
  

Проверка, что перешли на следующую форму заполнения
  await page.locator('.Step1_input__mQdy_', '.Step1_inputValid__rV4nz')
  .not.toBeVisible();


## CarPrice

>await page.goto('https://carprice.ru/');

Переход на сайт 

>await expect(page).toHaveTitle(/Выкуп автомобилей в Москве и других городах России – «CarPrice» – быстро, дорого, надежно/);

Проверка на соответствие title

>const logo = page.locator('.AppHeader_logo__n_Rh2');
await expect((logo).first()).toBeVisible();

Проверка на присутствие logo

>await page.locator('.css-19bb58m').click();
>await expect(page.locator('#react-select-test-brand-select-listbox')).toHaveText('AudiBMWCadillacCheryChevroletChrysler...');
>await page.getByText('Cadillac', { exact: true }).click();
>await expect(page.locator('i').first()).toBeVisible();
>await expect(page.locator('i')).toHaveCSS('background', 'rgb(128, 212, 166) none repeat scroll 0% 0% / auto padding-box border-box');

В этом блоке проверяем на присутствие всех марок автомобиля > делаем выбор > проверяем появление галочки + цвет галочки

>await page.locator('.css-17m4fwt-control > .css-hlgwow > .css-19bb58m').click();
const year = page.locator('#react-select-test-year-select-listbox');
await expect(year).toBeVisible();
await page.getByText('2020', { exact: true }).click();

Выбор года автомобиля + проверка, что список разворачивается

>await page.locator('.css-17m4fwt-control > .css-hlgwow > .css-19bb58m').click();
const model = page.locator('#react-select-test-model-select-listbox');
await expect(model).toBeVisible();
await page.getByText('Escalade V', { exact: true }).click();

Проверка на список моделей авто и выбор нужной

>await page.getByPlaceholder('Email для отправки оценки авто').fill('v.ksdjjff@mail.ru');
const green = page.locator('.Step1_selectedCityIcon__orv3K > svg');
await expect(green).toBeVisible();

Проверка правельности почты по появлению галочки

>await page.getByRole('button', { name: 'Получить оценку авто' }).click();

Поиск кнопки с определенным текстом

>await expect(page).toHaveURL('https://carprice.ru/wizard-finish');

Проверка изменения ссылки после перехода 

>const textenroll = page.getByText('Запишитесь на продажу автомобиля');
>await expect(textenroll).toBeVisible();

Проверка начала следующего этапа 

>await page.locator('#react-select-2-input').click();
  const city = page.locator('#react-select-2-listbox');
  await expect(city).toBeVisible();
  await page.locator('#react-select-2-option-0').click();

  Проверка на список городов + выбор города

>await page.locator('#react-select-3-input').click();
  const maps = page.locator('.ymaps-2-1-79-events-pane');
  await expect(maps).toBeVisible();
  await page.getByRole('button', { name: '1-й Митинский пер., 25' }).click();

  Проверка отображаения карты + выбор офиса 

>await page.locator('#react-select-test-date-select-input').click();
const date = page.locator('#react-select-test-date-select-listbox');
await expect(date).toBeVisible();
await page.getByText('30 Мар, Чт', { exact: true }).click();

>await page.locator('#test-time-select-loaded svg').click();
await page.getByText('18:00', { exact: true }).click();

Проверка и выбор даты и времени 

>await page.getByPlaceholder('Имя', { name: true }).fill('vasy');
await page.getByPlaceholder('Телефон', { exact: true }).fill('+7 (999) 234-33353');

Поиск инпутов и ввод нужных значений 

>await page.getByRole('button', { name: 'Записаться' }).click();

Поиск кнопки + нажатие 

>await page.getByText('Ждем Вас на вашем авто', { exact: true });
await page.locator('span').filter({ hasText: 'Cadillac Escalade V [2020]' });

Проверка на присутствие текста подтверждающий записть.
