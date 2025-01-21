// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-data",
          title: "Data",
          description: "Selected published datasets",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Highlighted GitHub repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-a-preprint-of-our-sce2g-model-is-out-check-it-out-on-biorxiv",
          title: 'A preprint of our scE2G model is out! Check it out on bioRxiv....',
          description: "",
          section: "News",},{id: "news-the-lab-receives-a-novo-nordisk-foundation-project-grant-in-bioscience-and-basic-biomedicine-resolving-gene-regulation-during-differentiation-at-single-cell-resolution",
          title: 'The lab receives a Novo Nordisk Foundation Project Grant in Bioscience and Basic...',
          description: "",
          section: "News",},];
