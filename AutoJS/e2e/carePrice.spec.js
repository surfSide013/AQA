const { test, expect } = require('@playwright/test');

test('carPrice', async ({ page }) => {
  // test.slow();
  await page.goto('https://carprice.ru/');

  await expect(page).toHaveTitle(/Выкуп автомобилей в Москве и других городах России – «CarPrice» – быстро, дорого, надежно/);

  const logo = page.locator('.AppHeader_logo__n_Rh2');
  await expect((logo).first()).toBeVisible();

  await page.locator('.css-19bb58m').click();
  await expect(page.locator('#react-select-test-brand-select-listbox')).toHaveText('AudiBMWCadillacCheryChevroletChryslerCitroenDaewooDodgeFiatFordGreat WallHondaHyundaiInfinitiJaguarJeepKiaLand RoverLexusLifanMINIMazdaMercedes-BenzMitsubishiNissanOpelPeugeotPorscheRenaultSEATSaabSkodaSsangYongSubaruSuzukiToyotaVolkswagenVolvoВАЗ (Lada)ГАЗЗАЗТагАЗУАЗACAM GeneralAMCAcuraAdlerAlfa RomeoAlpinaAlpineApalArielAroAsiaAston MartinAuburnAurusAustinAustin HealeyAutobianchiBAICBYDBajajBaltijas DzipsBatmobileBeijingBentleyBertoneBilenkinBio autoBitterBorgwardBrabusBrillianceBristolBuforiBugattiBuickByvinCHERYEXEEDCallawayCarbodiesCaterhamChanaChangFengChanganChangheCizetaCoggiolaCordCupraDAFDKWDSDW HowerDaciaDadiDaihatsuDaimlerDallaraDatsunDe TomasoDeLoreanDeSotoDeco RidesDelageDerwaysDongFengDoninvestDonkervoortE-CarEXEEDEagleEagle CarsEcomotorsExcaliburFAWFSOFerrariFiskerFlankerFotonFuqiGACGALLIKERGMCGPGeelyGenesisGeoGonowGordonHYSTERHafeiHaimaHanomagHavalHawtaiHeinkelHennesseyHindustanHispano-SuizaHoldenHongqiHorchHuangHaiHudsonHummerIVECOInnocentiInternationalInvictaIran KhodroIsderaIsuzuJACJMCJensenJinbeiKTMKoenigseggLTILamborghiniLanciaLandwindLeapmotorLiXiangLiebao MotorLigierLincolnLingstarLogemLotusLucidLuxgenMGMahindraMarcosMarlinMarussiaMarutiMaseratiMaybachMcLarenMegaMercuryMetrocabMicrocarMinelliMitsuokaMorganMorrisNashNioNobleOldsmobileOscaPGOPUCHPackardPaganiPanozPeroduaPiaggioPlymouthPolestarPontiacPremierProtonPumaQorosQvaleRAMRamblerRavonReliantRenaissanceRenault SamsungRezvaniRimacRinspeedRoeweRolls-RoyceRonartRoverSMASUVSaipaSaleenSantanaSaturnScionSearsShanghai MapleShuangHuanSimcaSkywellSmartSoueastSpectreSpykerSteyrStudebakerTATATECHAUTVRTalbotTatraTazzariTeslaThinkTianmaTianyeTofasTrabantTramontanaTriumphUltimaVauxhallVectorVenturiVortexVoyahW MotorsWandererWartburgWeltmeisterWestfieldWiesmannWillysXin KaiXpengYulonZXZastavaZenosZenvoZibarZotyeЁ-мобильАвтокамАстроБогданБронтоЗИЛЗиСИЖКамАЗКанонирКомбатЛуАЗМосквичРидаСМЗСеАЗСпортивные авто и РепликиТонар');
  await page.getByText('Cadillac', { exact: true }).click();
  await expect(page.locator('i').first()).toBeVisible();
  await expect(page.locator('i')).toHaveCSS('background', 'rgb(128, 212, 166) none repeat scroll 0% 0% / auto padding-box border-box');

  await page.locator('.css-17m4fwt-control > .css-hlgwow > .css-19bb58m').click();
  const year = page.locator('#react-select-test-year-select-listbox');
  await expect(year).toBeVisible();
  await page.getByText('2020', { exact: true }).click();

  await page.locator('.css-17m4fwt-control > .css-hlgwow > .css-19bb58m').click();
  const model = page.locator('#react-select-test-model-select-listbox');
  await expect(model).toBeVisible();
  await page.getByText('Escalade V', { exact: true }).click();

  await page.getByPlaceholder('Email для отправки оценки авто').fill('v.ksdjjff@mail.ru');
  const green = page.locator('.Step1_selectedCityIcon__orv3K > svg');
  await expect(green).toBeVisible();

  await page.getByRole('button', { name: 'Получить оценку авто' }).click();

  await expect(page).toHaveURL('https://carprice.ru/wizard-finish');

  const textenroll = page.getByText('Запишитесь на продажу автомобиля');
  await expect(textenroll).toBeVisible();

  await page.locator('#react-select-2-input').click();
  const city = page.locator('#react-select-2-listbox');
  await expect(city).toBeVisible();
  await page.locator('#react-select-2-option-0').click();

  await page.locator('#react-select-3-input').click();
  const maps = page.locator('.ymaps-2-1-79-events-pane');
  await expect(maps).toBeVisible();
  await page.getByRole('button', { name: '1-й Митинский пер., 25' }).click();

  await page.locator('#react-select-test-date-select-input').click();
  const date = page.locator('#react-select-test-date-select-listbox');
  await expect(date).toBeVisible();
  await page.getByText('30 Мар, Чт', { exact: true }).click();

  await page.locator('#test-time-select-loaded svg').click();
  await page.getByText('18:00', { exact: true }).click();

  await page.getByPlaceholder('Имя', { name: true }).fill('vasy');

  await page.getByPlaceholder('Телефон', { exact: true }).fill('+7 (999) 234-33353');

  await page.getByRole('button', { name: 'Записаться' }).click();

  await page.getByText('Ждем Вас на вашем авто', { exact: true });

  await page.locator('span').filter({ hasText: 'Cadillac Escalade V [2020]' });

console.log('TEST COMPLETED');
});