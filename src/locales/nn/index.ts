const translations = {
    //                      1          2         3         4
    //             1234567890 1234567890123456789012345678901234
    keyboard    : "1234567890\\qwertyuiopåasdfghjkløæzxcvbnm<>?@",
    key_clear   : "Tøm",
    key_done    : "OK",
    key_space   : "Mellomrom",
    key_abc     : "ABC",

    username    : "Brukernavn",
    password    : "Passord",
    sign_in     : 'Logg på',
    login       : 'Logg inn',
    change_srv  : 'Bytt Server',
    title       : 'Tittel',
    save        : 'Lagre',
    change      : 'Skifte',
    enter       : 'Enter',
    close       : 'Lukk',
    back        : 'Tilbake',
    tvGuide     : 'TVGuide',
    channelList : 'Kanaler',
    yes         : 'Ja',
    no          : 'Nei',
    on          : 'På',
    off         : 'Av',
    speed       : 'Hastighet',
    audio       : 'Lydspråk',
    cc          : 'Undertekster',
    logout      : 'Logg ut',
    enabled     : 'Aktivert',
    disabled    : 'Deaktivert',
    comingSoon  : 'Kommer snart',
    setDefault  : 'Sett Standard',
    setDefaultS : 'Sett til standard serveradresse',
    done        : 'Ferdig',
    noInternet  : 'Dårlig tilkobling til server',
    connecting  : 'Kobler til...',

    disconsent      : 'Misfornøyd',
    sure_disconsent : ['Tjenesten vår vil være utilgjengelig.',
                       'Er du sikker på at du vil misforstå vilkårene?'],

    error       : 'Feil',
    // communication
    err_failed_to_fetch       : 'Dårlig Internett eller server nede',
    err_empty_body            : 'Tjener tømt svar',

    err_access_denied         : 'Ingen tilgang. Kontakt din forhandler',
    err_authorization_failed  : 'Autorisasjonen mislyktes. Kontakt din forhandler',
    err_identification_failed : 'Identifikasjon mislyktes. Kontakt din forhandler',
    err_unauthorized_request  : 'Uautorisert forespørsel. Kontakt din forhandler',
    err_unspecified           : 'Uspesifisert feil. Kontakt din forhandler',

    err_login_required        : 'Bruk brukernavn og passord for å logge inn',
    err_wrong_user_pass       : 'Ugyldig pålogging/passord. Kontakt din forhandler',
    err_wrong_token           : 'Tokenforespørsel, tøm serversvar',
    err_profile_empty         : 'Profilforespørsel, tøm serversvar',
    err_mac_empty             : 'MAC-adresseforespørsel, tøm serversvar',

    // stalker replies
    limit                     : 'Lagringsserveren har overbelastning',
    link_fault                : 'Feil lenke til programinnhold',
    nothing_to_play           : 'Programinnhold finnes ikke',
    server_error              : 'Uspesifisert serverfeil',
    wrong_ch_info             : 'Kanalen ble ikke funnet eller deaktivert',
    // player errors
    err_prepare_failed        : 'Medieinnholdet har ikke klart å forberede seg',
    err_seek_failed           : 'Medieinnholdet har ikke klart å endre posisjon',
    err_play_failed           : 'Medieinnhold eller Internett-problem',

    press_ok_close            : 'Trykk OK for å lukke',
    menu : {
        fav : {
            title : 'Favoritter',
            menuTitle : 'Favoritter',
            noChannels : 'Du kan legge til hvilken som helst kanal i Favoritter. Trykk på <span id="star">&nbsp;&#9733;&nbsp;</span> tasten for å fullføre dette'
        },
        settings : {
            title : 'Innstillinger',
            menuTitle : 'Innstillinger',
            initialScreen : {
                title : 'Startskjerm',
                menuTitle : 'Startskjerm',
                playLastChannel     : 'Spill siste kanal',
                showChannelList     : 'Vis kanalliste',
                showFavoriteChannel : 'Vis favorittkanalliste',
            },
            server : {
                title : 'Servervalg',
                menuTitle : 'Server',
                submitMessage : ['Er du sikker på at du vil bytte server?',
                                 'Merk: Denne handlingen vil logge deg ut' ],
            },
            language : {
                title : 'Språkvalg',
                menuTitle : 'Språk',
                en : 'English',
                ru : 'Русский',
                es : 'Español',
                da : 'Dansk',
                nn : 'Norsk',
                sv : 'Svenska',

            },
            accInfo : {
                title : 'Kontoinformasjon',
                menuTitle : 'Kontoinformasjon',
                ls                  : 'Kontonummer',
                mac                 : 'MAC',
                expire_billing_date : 'Utløpsdato',
                created             : 'Opprettet',
                comment             : 'Kommentar',
            },
            userAgreement : {
                title : 'Brukeravtale',
                menuTitle : 'Brukeravtale',
            },
            privacyPolicy : {
                title : 'Personvernerklæring',
                menuTitle : 'Personvernerklæring',
            },
            parentalControl : {
                title        : 'Foreldrekontroll',
                menuTitle    : 'Foreldrekontroll',
                enterPin     : 'Skriv inn PIN',
                changePin    : 'Bytt PIN',
                enterNewPin  : 'Skriv inn ny PIN',
                enterCurPin  : 'Skriv inn gjeldende PIN',
                errMsg       : 'Vennligst skriv inn riktig PIN-kode',
                errCoincided : `Ny PIN samsvarer ikke`,
                pinChanged   : 'PIN-koden er endret',
                pinLength    : 'PIN skal inneholde minst 4 sifre',
            },
            timezone : {
                title : 'Tidssone',
                menuTitle : 'Tidssone',
                autodetect : 'Automatisk gjenkjenning'
            },
            aboutApp : {
                title : 'Om App',
                menuTitle : 'Om App',
                created : 'Opprettet',
                comment : 'Kommentar',
                version : 'Versjon',
                email   : 'Email',
                website : 'Website',
                phone   : 'Telefon',

                app_www : 'Website',
                app_phone : 'Telefon',
                app_email : 'Email',
                app_name : 'Navn',
                app_version : 'Versjon',

                device : 'Enhet',
                device_uuid: 'DUID',
                device_model: 'Model',
                device_firmware: 'Firmware',
                device_server_ver : 'Serverversjon',
            },
            logout : {
                title : 'Logg ut',
                menuTitle : 'Logg ut',
                submitMessage : 'Er du sikker på at du vil logge ut?',
            },
        },
        tv : {
            title : 'Kategorier',
            menuTitle : 'TV',
            channels : {
//                title : 'Channels',
                noChannels : 'Ingen informasjon',
                channelInfo : {
                },
                epg : {
                    day        : 'Dag',
                    dayProgram : 'Dagsprogram',
                    live       : 'Live',
                    noProgram  : 'Ingen informasjon',
                    weekdayNames : ['Søndag', 'Mandag','Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', '​​Lørdag'],
                    monthNames   : ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August',
                                    'September', 'Oktober', 'November', 'Desember'],
                    extended : { today     : 'I dag',
                                 tomorrow  : 'I morgen',
                                 yesterday : 'I går', },
                },
            },
            programInfo : {
                currentProgram  : 'Nåværende program',
                comingNext      : 'Kommer neste',
//                tvGuide         : 'TV Guide',
                fullDescription : 'Full beskrivelse',
                noProgram       : 'Det er ingen programguide',
            },
            archive: {
                continuePlay    : 'Følg med?',
            },
            modes: {
                live            : 'On air',
                archive         : 'Catch-up',
                time_shift      : 'Catch-up',
            },
            toLive : 'On air',
            notAvailableOnChannel: 'Ikke tilgjengelig på denne kanalen',
        },
        film : {
            menuTitle       : 'Video',
            title           : 'Kategorier',
            description     : 'Beskrivelse',
            episode         : 'Episode',
            country         : 'Land',
            director        : 'Regissør',
            genre           : 'Sjanger',
            year            : 'År',
            rating          : 'Vurdering',
            selectEpisode   : 'Velg episode',
            length          : 'Lengde',
            min             : 'min',
            imdb            : 'Vurdering IMDB',
            age             : 'Age',
            mpaa            : 'Vurdering MPAA',
            listIsEmpty     : 'Listen er tom',
            favorites       : 'Favoritter',
            noFavorites     : 'Du kan legge til hvilken som helst film i favorittlisten. Trykk på <span id="star">&nbsp;&#9733;&nbsp;</span> knappen på filmbeskrivelsen',
            search          : 'Søk',
            category        : 'Kategori',
            search_filter   : 'Søkefilter',
            search_history  : 'History',
            clear_history   : 'Tøm',
            records_found   : 'Poster funnet',
            press_ok_search : 'Trykk OK for å søke',
        },
        exit : {
            title : 'Avslutte',
            menuTitle : 'Avslutte',
            submitMessage : 'Er du sikker på at du vil avslutte appen?',
        },
    },
};
export default translations;
