
const config = {
    appVersion              : "1.0",
    allowedLocale           : [ "da", "en", "es", "nn", "ru", "sv" ],
    watchdogTimeout         : 60,             // 60 sec
    watchdogAttempts        : 300,            //  5 min
    fetchTimeout            : 5000,           //  5 sec
    throttleLimitForEvents  : 100,            // .1 sec
    noEventTimeout          : 5 * 1000,       //  5 sec авто убирание интерфейса
    rangeBarTimeout         : 2 * 1000,       //  2 sec задержка при перемотке
    rangeBarAlertTimeout    : 3 * 1000,       //  3 sec задержка при перемотке Alert точки
    secondsToTimeShift      : 30,             // 30 sec
    msBeforeDialog          : 60 * 1000,      // 60 sec время перед показом Keep watching ?
    popUpDelay              : 2 * 1000,       //  2 sec время показа PopUp
    channelDialDelay        : 5 * 1000,       //  5 sec набор номера канала с дисташки
    renderDelay             : 400,            // .4 sec задержка отображения правой части
    // archive timing
    arRewindInitial         : 10 * 1000,      // 10 sec начальный шаг
    arRewindMaximum         : 300 * 1000,     //  5 min максимальный шаг
    arThrottleRightLoaded   : 45 * 1000,      // 45 sec минимум до правого края ПОЛНОГО файла
    arThrottleRightUnloaded : 300 * 1000,     //  5 min минимум до правого края НЕПОЛНОГО файла
    // time shift
    tsOffsetInitial         : 10,             // 10 sec начальный шаг
    tsOffsetMaximum         : 3600,           // 60 min максимальный шаг
    tsThrottleRight         : 180,            //  3 min минимум до точки предложения LIVE

    debugWindow             : false,
    defaultTimeZone         : "Europe/Madrid",
    platformType            : "stub",
    // platformType            : "tizen",
};
export default config;
