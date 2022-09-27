
const urls = {
    serverUrl : 'http://control.wooow.tv',
    stalkerPortal : '/stalker_portal',
    getFile       : '/c/',
    stbAction : {
        template : '/server/load.php?type=stb&action=',
        getToken        : 'handshake',
        getProfile      : 'get_profile',
        login           : 'do_auth',
        logout          : 'logout',
        getModules      : 'get_modules',
        setParentPassword : 'set_parent_password',
        log             : 'log',
    },
    itvAction : {
        template : '/server/load.php?type=itv&action=',
        getGenres       : 'get_genres',
        getOrderedList  : 'get_ordered_list',
        getShortEpg     : 'get_short_epg',
        setFav          : 'set_fav',
        getFav          : 'get_all_fav_channels',
        getFavIds       : 'get_fav_ids',
        createLink      : 'create_link',
    },
    epgAction : {
        template : '/server/load.php?type=epg&action=',
        getEPG          : 'get_simple_data_table',
    },
    tvArchive : {
        template : '/server/load.php?type=tv_archive&action=',
        createLink          : 'create_link',
        getLinkForChannel   : 'get_link_for_channel',
        setPlayed           : 'set_played',
        updatePlayedEndTime : 'update_played_end_time',
        getNextPartUrl      : 'get_next_part_url',

    },
    getMac : '/auth/getmac',
    vodAction: {
        template: '/server/load.php?type=vod&action=',
        getCategories   : 'get_categories',
        getOrderedList  : 'get_ordered_list',
        createLink      : 'create_link',
        deleteLink      : 'del_link',
        setFavorite     : 'set_fav',
        deleteFavorite  : 'del_fav',
        setNotEnded     : 'set_not_ended',
        setEnded        : 'set_ended',
    },
    watchDogAction: {
        template        : '/server/load.php?type=watchdog&action=',
        getEvents       : 'get_events',
        confirmEvent    : 'confirm_event',
    }
};

export default urls;