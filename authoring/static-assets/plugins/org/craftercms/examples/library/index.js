var w7YdZu$1 = "My custom placeholder.";
var en = {
	w7YdZu: w7YdZu$1,
	"words.settings": "System Settings"
};

var w7YdZu = "Mi placeholder personalizado.";
var es = {
	w7YdZu: w7YdZu
};

function Translations() {
    return null;
}

var plugin = {
    id: 'org.craftercms.examples.componentLibrary',
    locales: {
        en: en,
        es: es
    },
    widgets: {
        'org.craftercms.examples.translations': Translations
    },
    scripts: [
    // Below are examples of how to load scripts into the Studio runtime
    // {
    //   src: 'https://code.jquery.com/jquery-3.5.1.min.js',
    //   integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
    //   crossorigin: 'anonymous'
    // },
    // 'script.js'
    ],
    stylesheets: [
    // Examples of how to load stylesheets into the Studio runtime
    // 'index.css'
    ]
};

export { Translations, plugin as default };
