export interface PersonalSettings {
    forum: {
        username: string;
        password: string;
    };

    discord: {
        key: string,
        owner: number;
    };
    riotApi: {
        key: string;
    };
    webServer: {
        relativeFolderLocation: string;
        relativeLiveLocation: string;
    };
    github: {
        username: string;
        password: string;
    };

    isProduction: boolean;
    appName: string;
}

export enum PageType {
    Page = "page",
    Article = "article",
}

export interface PageDifferPage {
    name: string;
    ident: string;
    type: PageType;
}

export interface SharedSettings {
    server: string;

    botty: PersonalSettings;

    uptimeSettings: {
        checkInterval: number,
    };

    esports: {
        printChannel: string;
        updateTimeout: number;
        printToChannelTimeout: number;
    };

    commands: {
        default_prefix: string,
        adminRoles: string[];
    };

    techBlog: {
        checkInterval: number,
        channel: string,
        url: string,
    };

    keyFinder: {
        reportChannel: string,
    };

    forum: {
        checkInterval: number,
        channel: string,
        url: string,
    };

    pageDiffer: {
        checkInterval: number,
        channel: string,
        pages: PageDifferPage[],
        articleHost: string,
        embedImageUrl: string,
    };

    autoReact: {
        emoji: string,
    };

    info: {
        allowedRoles: string[],
        command: string,
        maxScore: number,
        maxListeners: number,
    };

    officehours: {
        allowedRoles: string[],
        openMessage: string,
        closeMessage: string,
        addedMessage: string,
        removedMessage: string,
    };

    riotApiLibraries: {
        noLanguage: string,
        languageList: string,
        githubErrorList: string,
        githubErrorLanguage: string,
        baseURL: string,
        aliases: { [key: string]: string[] },
    };

    versionChecker: {
        checkInterval: number,
        channel: string,
        gameThumbnail: string,
        dataDragonThumbnail: string,
    };

    logger: {
        server: string,

        prod: {
            errorChannel: string,
            logChannel: string,
        },

        dev: {
            errorChannel: string,
            logChannel: string,
        }

        errorChannel: string,
        logChannel: string,
    };

    apiStatus: {
        checkInterval: number,
        apiOnFireThreshold: number,
        statusUrl: string,
        onFireImages: string[],
    };

    onJoin: {
        messageFile: string;
    };

    apiUrlInterpreter: {
        timeOutDuration: number;
    };

    endpoint: {
        updateInterval: number,
        timeOutDuration: number,
        baseUrl: string,
        maxDistance: number,
        aliases: { [key: string]: string[] },
    };

    pickem: {
        // this is an id that only has the riotdev pickem leaderboards, in this case "stelar7"
        blankId: number,
        worldsId: number,
        listId: number,
        updateTimeout: number,
        leaderboardUrl: string,
        pointsUrl: string,
        // not used yet, as the data format for the brackets is unknown..
        bracketsUrl: string,
        groupPickUrl: string;
    };
}
