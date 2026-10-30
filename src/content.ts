/**
 * Every word on the page. SELENE is a concept brand — names, dates and
 * missions are illustrative placeholders, and the page says so.
 */

export const brand = {
  name: 'Селена',
  wordmark: 'SELENE',
  email: 'ekipazh@selene.space',
};

export const nav = [
  {label: 'Журнал', href: '#log'},
  {label: 'Маршрут', href: '#trajectory'},
  {label: 'Экспедиции', href: '#missions'},
  {label: 'Заявка', href: '#reserve'},
];

export const hero = {
  title: 'ВОСХОД ЗЕМЛИ',
  kicker: 'Концепция лунных экспедиций',
  site: 'Море Спокойствия · 0,67° с. ш. 23,47° в. д.',
};

export const intro = {
  eyebrow: 'Журнал экспедиции',
  heading: 'Первый отпуск за пределами Земли.',
  body: 'Четыре дня в пути, неделя на поверхности и вид, который невозможно забыть. Вся экспедиция — кадр за кадром.',
};

export const log = [
  {tag: 'Т−0', title: 'Старт', body: 'Девять минут оглушительного грохота — и тишина. В иллюминаторе изгиб Земли.', image: 'media/cards/m1-launch.webp'},
  {tag: 'День 3', title: 'Лунная орбита', body: 'За окном проплывает обратная сторона Луны. Ваша ладонь касается стекла.', image: 'media/cards/m2-orbit.webp'},
  {tag: 'День 4', title: 'База «Транквилити»', body: 'Герметичные купола, горячий ужин и окно, обращённое к дому.', image: 'media/cards/m3-base.webp'},
  {tag: 'День 5', title: 'Первые шаги', body: 'Следы, которые переживут все здания, что вы когда-либо видели.', image: 'media/cards/m4-walk.webp'},
];

/** Legs of the Earth → Moon trajectory, in drawing order. */
export const trajectory = {
  eyebrow: 'Маршрут',
  heading: '384 400 км пути — шаг за шагом.',
  legs: [
    {day: 'День 0', title: 'Орбита ожидания', body: 'Два витка вокруг Земли, пока экипаж и корабль проходят проверку.'},
    {day: 'День 0', title: 'Переход на лунную траекторию', body: 'Шестиминутное включение двигателя — и мы в пути. Следующие три дня повернуть назад нельзя.'},
    {day: 'День 3', title: 'Выход на орбиту Луны', body: 'Двигатель включается за Луной, вне связи с Землёй. Затем корабль выходит на орбиту.'},
    {day: 'День 4', title: 'Посадка', body: 'Двенадцать минут от орбиты до лунной пыли Моря Спокойствия.'},
  ],
};

export const missions = {
  eyebrow: 'Экспедиции',
  heading: 'Три способа отправиться к Луне.',
  note: 'Концепции экспедиций — сроки указаны для примера.',
  items: [
    {name: 'Орбитальная', days: 6, lines: ['Два витка вокруг Луны', 'Полёт над обратной стороной Луны', 'Восход Земли с орбиты'], cta: 'В список орбитальной экспедиции'},
    {name: 'Посадочная', days: 10, lines: ['Четыре ночи на базе «Транквилити»', 'Два выхода на поверхность', 'Восход Земли с Луны'], cta: 'В список посадочной экспедиции', featured: true},
    {name: 'Долгая', days: 28, lines: ['Полный лунный день и ночь', 'Путешествие на луноходе к нагорьям', 'Ротация научного экипажа'], cta: 'В список долгой экспедиции'},
  ],
};

export const reserve = {
  eyebrow: 'Заявка',
  heading: 'Оставьте имя в списке экспедиции.',
  body: 'Без оплаты и обязательств. Мы напишем, когда откроется следующее окно запуска.',
  /** Illustrative launch window for the countdown (the Apollo 11 anniversary). */
  window: '2031-07-20T20:17:00Z',
  windowLabel: 'Следующее окно запуска (концепция)',
};
