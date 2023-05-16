export class Settings {
  // Global Settings
  public static APP_NAME = 'Diproach - Framework3';
  public static APP_VERSION = '0.0.1';

  public static LOADER_TEXT = 'Procesando...';

  public static networkConnection = true;

  public static SOCKET_ENABLED = false;

  // (+) EndPoints

  public static endPoints = {
    bnaRates: '/bnaRates',
    clients: '/clients',
    construya: '/construya',
    icc: '/icc',
    iop: '/iop',
    iopFactors: '/iopFactors',
    isac: '/isac',
    labor: '/labor',
    materials: '/materials',
    registeredEmployment: '/registeredEmployment',
    actions: '/actions',
    administrators: '/administrators',
    projects: '/projects',
    files: '/files',
    logs: '/logs',
    users: '/users',
    teams: '/teams',
    players: '/players',
    countries: '/countries',
    stages: '/stages',
    activities: '/activities',
    employees: '/employees',
  };

  public static endPointsMethods = {
    administrators: {
      create: '/create',
      login: '/login',
      newPassword: '/newPassword',
      changePassword: '/changePassword/',
      recoverPassword: '/recoverPassword',
      refreshToken: '/refreshToken',
    },
    users: {
      create: '/create',
      login: '/login',
      newPassword: '/newPassword',
      changePassword: '/changePassword/',
      recoverPassword: '/recoverPassword',
      refreshToken: '/refreshToken',
    },
  };

  // (-) EndPoints

  // (+) Keys

  public static keys = {
    googleMaps: 'AIzaSyAMrhJP5YW6rgpFfW1COIhNUjrbSc2qHlo'
    // googleMaps: 'AIzaSyBZBcA9sl890-ogezSTLJEj5ICTMxWOgc4', // To Do: Change to your own key
  }

  // (-) Keys

  // (+) Push

  public static push = {
    icon: {
      name: 'ic_stat_notifications',
      color: '#2FA9E0',
    },
    events: {
      onNotification: 'onNotification'
    },
    channel: {
      default: ''
    },
    appId: '',
    urls: {
      ensure: 'http://vps-1060583-x.dattaweb.com:3050/api/users/ensure',
      unensure: 'http://vps-1060583-x.dattaweb.com:3050/api/users/unensure'
    }
  };

  public static actions = {
    types: {
      push: {
        code: 'push',
        name: 'Action'
      },
      'deep-link': {
        code: 'deep-link',
        name: 'deepLinking'
      },
      socket: {
        code: 'socket',
        name: 'Event'
      }
    }
  };

  // (-) Push

  public static storage = {
    actions: 'finde.adm.actions',
    actionsToPerform: 'finde.adm.actionsToPerform',
    refreshToken: 'finde.adm.refreshToken',
    accessToken: 'finde.adm.accessToken',
    user: 'finde.adm.user',
    address: 'finde.address'
  };


  public static months = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre',
  }


}
