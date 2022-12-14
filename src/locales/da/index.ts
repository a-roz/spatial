const translations = {
    //                      1          2         3         4
    //             1234567890 1234567890123456789012345678901234
    keyboard    : "1234567890\\qwertyuiopåasdfghjklæøzxcvbnm<>?@",
    key_clear   : "Ryd",
    key_done    : "OK",
    key_space   : "Mellemrum",
    key_abc     : "ABC",

    username    : "Brugernavn",
    password    : "Adgangskode",
    sign_in     : 'Log på',
    login       : 'Log ind',
    change_srv  : 'Byt Server',
    title       : 'Titel',
    save        : 'Gem',
    change      : 'Skift',
    enter       : 'Enter',
    close       : 'Luk',
    back        : 'Tilbage',
    tvGuide     : 'TV Guide',
    channelList : 'Kanalliste',
    yes         : 'Ja',
    no          : 'Nej',
    on          : 'På ',
    off         : 'Af',
    speed       : 'Hastighed',
    audio       : 'Lyd',
    cc          : 'Undertekst',
    logout      : 'Log Ud ',
    enabled     : 'Aktiveret',
    disabled    : 'Deaktiveret',
    comingSoon  : 'Kommer Snart',
    setDefault  : 'Set til Default',
    setDefaultS : 'Set til standard serveradresse',
    done        : 'Færdig',
    noInternet  : 'Dårlig forbindelse til server',
    connecting  : 'Tilslutning...',

    disconsent      : 'Utilfredshed',
    sure_disconsent : ['Vores service vil være utilgængelig.',
                       'Er du sikker på, at du vil afvise vilkårene?'],

    error       : 'Fejl',
    // communication
    err_failed_to_fetch       : 'Dårligt internet eller server nede',
    err_empty_body            : 'Server Tom ',

    err_access_denied         : 'Adgang nægtet. Kontakt din forhandler',
    err_authorization_failed  : 'Godkendelse mislykkedes. Kontakt din forhandler',
    err_identification_failed : 'Identifikation mislykkedes. Kontakt din forhandler',
    err_unauthorized_request  : 'Uautoriseret anmodning. Kontakt din forhandler',
    err_unspecified           : 'Uspecificeret fejl. Kontakt din forhandler',

    err_login_required        : 'Brug dit login og password for at logge på',
    err_wrong_user_pass       : 'Forkert login/password kontakt din forhandler',
    err_wrong_token           : 'Token anmodning, Server tom',
    err_profile_empty         : 'Profil anmodning, Server tom',
    err_mac_empty             : 'MAC addresse anmodning, Server tom',
    // stalker replies
    limit                     : 'Server Overbelastet',
    link_fault                : 'Forkert link til program indhold',
    nothing_to_play           : 'Program indhold eksisterer ikke ',
    server_error              : 'Server uspecificeret fejl',
    wrong_ch_info             : 'Kanal ikke fundet eller midlertidigt afbrudt',
    // player errors
    err_prepare_failed        : 'Media indhold har fejlet',
    err_seek_failed           : 'Media indhold har fejlet på søg',
    err_play_failed           : 'Media indhold eller internet problem',

    press_ok_close            : 'Tryk på OK for at lukke',
    menu : {
        fav : {
            title : 'Favoriter',
            menuTitle : 'Favoriter',
            noChannels : 'Du kan lægge alle kanaler til favoritter , Tryk <span id="star">&nbsp;&#9733;&nbsp;</span> for at gøre dette '
        },
        settings : {
            title : 'Settings',
            menuTitle : 'Settings',
            initialScreen : {
                title : 'Start skærm',
                menuTitle : 'Start skærm',
                playLastChannel     : 'Afspil sidste kanal',
                showChannelList     : 'Vis kanalliste ',
                showFavoriteChannel : 'Vis favorit kanalliste',
            },
            server : {
                title : 'Vælg Server',
                menuTitle : 'Server',
                submitMessage : ['Er du siker på du vil bytte server  ?',
                    'Note: Dette vil logge dig ud' ],
            },
            language : {
                title : 'Vælg sprog',
                menuTitle : 'Sprog',
                en : 'English',
                ru : 'Русский',
                es : 'Español',
                da : 'Dansk',
                nn : 'Norsk',
                sv : 'Svenska',
            },
            accInfo : {
                title : 'Konto Information',
                menuTitle : 'Konto Information',
                ls                  : 'Konto nummer',
                mac                 : 'MAC',
                expire_billing_date : 'Slut dato',
                created             : 'Lavet af',
                comment             : 'Kommentar',
            },
            userAgreement : {
                title : 'Bruger aftale',
                menuTitle : 'Bruger aftale',
            },
            privacyPolicy : {
                title : 'Privatlivs politik',
                menuTitle : 'Privatlivs politik',
            },
            parentalControl : {
                title        : 'Voksen Kontrol',
                menuTitle    : 'Voksen Kontrol',
                enterPin     : 'Indtast PIN',
                changePin    : 'Byt PIN',
                enterNewPin  : 'Indtast ny PIN',
                enterCurPin  : 'Indtast nuværende PIN',
                errMsg       : 'Indtast venligst korrekt PIN',
                errCoincided : 'Ny pin stemmer ikke overens',
                pinChanged   : 'PIN er ændret med succes',
                pinLength    : 'PIN skal indeholde minimum 4 karakter',
            },
            timezone : {
                title : 'Tids zone',
                menuTitle : 'Tids zone',
                autodetect : 'Automatisk'
            },
            aboutApp : {
                title : 'Om Application',
                menuTitle : 'Om Application',
                version     : 'Version',
                email       : 'Email',
                website     : 'Website',
                phone       : 'Telefon',

                app_www : 'Website',
                app_phone : 'Telefon',
                app_email : 'Email',
                app_name : 'Navn',
                app_version : 'Version',

                device : 'Enhed',
                device_uuid: 'DUID',
                device_model: 'Model',
                device_firmware: 'Firmware',
                device_server_ver : 'Serverversion',
            },
            logout : {
                title : 'Log ud',
                menuTitle : 'Log ud',
                submitMessage : 'Er du sikker på du vil logge ud?',
            },
        },
        tv : {
            title : 'Kategorier',
            menuTitle : 'TV',
            channels : {
                noChannels : 'Ingen information',
                channelInfo : {
                },
                epg : {
                    day          : 'Dag',
                    dayProgram   : 'Dag program',
                    live         : 'Live',
                    noProgram    : 'Ingen information',
                    weekdayNames : ['Søndag', 'Mandag','Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
                    monthNames   : ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August',
                                    'September', 'Oktober', 'November', 'December' ],
                    extended : { today     : 'Idag',
                                 tomorrow  : 'I morgen',
                                 yesterday : 'I går',
                               },
                    },
            },
            programInfo : {
                currentProgram  : 'Nuværende program',
                comingNext      : 'Næste program',
                fullDescription : 'Bskrivelse',
                noProgram       : 'Der er ingen program guide',
            },
            archive: {
                continuePlay    : 'Fortsæt afspilning?',
            },
            modes: {
                live            : 'On air',
                archive         : 'Catch-up',
                time_shift      : 'Catch-up',
            },
            toLive : 'On air',
            notAvailableOnChannel: 'Ikke muligt på denne kanal',
        },
        film : {
            menuTitle       : 'Video',
            title           : 'Kategorier',
            description     : 'Beskrivelse',
            episode         : 'Episode',
            country         : 'Land',
            director        : 'Instruktør',
            genre           : 'Genre',
            year            : 'År',
            rating          : 'Bedømmelse',
            selectEpisode   : 'Vælg episode',
            length          : 'Længde',
            min             : 'min',
            imdb            : 'Bedømmelse IMDB',
            age             : 'Alder',
            mpaa            : 'Bedømmelse MPAA',
            listIsEmpty     : 'Listen er tom',
            favorites       : 'Favoriter',
            noFavorites     : 'Du kan gemme alle film til favoritter. Tryk <span id="star">&nbsp;&#9733;&nbsp;</span> på film beskrivelse',
            search          : 'Søg',
            category        : 'Kategori',
            search_filter   : 'Søgefilter',
            search_history  : 'History',
            clear_history   : 'Ryd',
            records_found   : 'Optagelser fundet',
            press_ok_search : 'Tryk OK For at søge',
        },
        exit : {
            title : 'Afslut',
            menuTitle : 'Afslut',
            submitMessage : 'Er du sikker på at du vil afslutte App?',
        },
    },
};
export default translations;
