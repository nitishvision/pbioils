import {Platform} from 'react-native';

export default {
  //CONSTANT TO MANAGE DEVELOPING MODE AND ENDPOINT URL's

  // new url
  // https://eda.workflex360.de/

  // old url
  // https://das4you.mhcode.pl/

  IS_TESTDATA: '1',
  activeOpacity: 0.5,
  IS_DEVELOPING_MODE: true,
  KEY_APP_TOKEN: 'fcm_token',
  BASE_URL: {
    apiURL: 'https://server.visionvivante.com/don-mobile/wp-json/v1/',
    contactApiUrl:
      'https://server.visionvivante.com/don-mobile/wp-json/contact-form-7/v1/',
    location:
      'https://www.google.com/maps/place/Ector+County+Coliseum/@31.8838889,-102.3875,15z/data=!4m5!3m4!1s0x0:0xef3751c30018e9d9!8m2!3d31.8838889!4d-102.3875',
    guideProg:
      'https://www.nxtbook.com/nxtbooks/aogr/202009/index.php#/p/Intro',
    oilField: 'https://www.oilpatchcalendar.com/',
    newsletter:
      'https://us5.list-manage.com/subscribe?u=0fc7489ea93434444d41a7430&id=20cd2fe409',
    exhibitorForm: 'https://server.visionvivante.com/don-mobile/exhibitor/',
    exhibitors: 'https://www.expocad.com/host/fx/PBIOS/pbios20/exfx.html',
    aroundUs: 'https://www.nxtbook.com/nxtbooks/aogr/202009/index.php#/p/6',
    attandees: 'https://events.american-tradeshow.com/PBIOS2021',
  },
  ENVIRONMENT: {
    DEV: 'development',
    PROD: 'production',
  },
  ALERT_TYPE: {
    THANKS: 'thanks',
    NORMAL: 'normal',
  },
  USER_AGENT: Platform.OS === 'android' ? 'Android' : 'iOS',
  DEVICE_TYPE: Platform.OS === 'android' ? 1 : 0,
  REPORT_MAIL: 'support@test.com',
  NO_INTERNET_MESSAGE: 'No internet connection!!',
  USER_ROLE: {
    USER: 0,
    CHURCH: 1,
  },
  IMAGE_PICKER_TYPE: {
    AVATAR: 0,
    COVER: 1,
  },
  TOASTTYPE: {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
  },
  LANGUAGES: {
    ENGLISH: {
      LABEL: 'English',
      CODE: 'en',
    },
    HINDI: {
      LABEL: 'Hindi',
      CODE: 'hi',
    },
  },
};
