const { defineMessages } = craftercms.libs.ReactIntl;

var w7YdZu$1 = "My custom placeholder.";
var en = {
	"org.craftercms.examples.sitesView.noContentTypesMessage": "There are no content types",
	"org.craftercms.examples.sitesView.numOfContentTypesMessage": "There {total, plural, one {is one content type} other {are {total} content types}}",
	"org.craftercms.examples.sitesView.numOfProjectsMessage": "You have {total, plural, one {one project} other {{total} projects}}",
	"org.craftercms.examples.vanilla.exampleTranslations": "Hello. This text is internationalized.",
	"org.craftercms.examples.vanilla.myProjects": "My Projects",
	"org.craftercms.examples.vanilla.viewProjects": "View my projects",
	w7YdZu: w7YdZu$1
};

var w7YdZu = "Mi placeholder personalizado.";
var es = {
	"org.craftercms.examples.sitesView.noContentTypesMessage": "No hay tipos de contenido",
	"org.craftercms.examples.sitesView.numOfContentTypesMessage": "Hay {total, plural, one {un tipo de contenido} other {{total} tipos de contenido}}",
	"org.craftercms.examples.sitesView.numOfProjectsMessage": "Hay {total, plural, one {un proyecto} other {{total} proyectos}}",
	"org.craftercms.examples.vanilla.exampleTranslations": "Hola. Este text esta traducido.",
	"org.craftercms.examples.vanilla.myProjects": "Mis Proyectos",
	"org.craftercms.examples.vanilla.viewProjects": "Ver mis proyectos",
	w7YdZu: w7YdZu
};

defineMessages({
    w7YdZu: {
        id: 'w7YdZu',
        defaultMessage: 'My custom placeholder.'
    }
});
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

export { Translations as Vanilla, plugin as default };
