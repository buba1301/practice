import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  ru: {
    translation: {
      errors: {
        network: 'Network Error. Try Again',
      },
      filters: {
        title: 'Количество пересадок',
        all: 'Все',
        direct: 'Без пересадок',
        oneTransfer: '1 пересадка',
        twoTransfer: '2 пересадки',
        threeTransfer: '3 пересадки',
        empty: 'Мы нашли рейсы по вашему запросу, но вы не выбрали ни одного фильтра. Выберите необходимый фильтр',
      },
      sort: {
        price: 'Самый дешевый',
        fastest: 'Самый быстрый',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
  });

export default i18n;
