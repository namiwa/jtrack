import * as utils from '../utils/index.js';

const DASHBOARD = 'dashboard';
const SAVE = 'save';
const TRACK = 'track';
const VIEW = 'view';

const validButtonSet = new Set([
  SAVE,
  TRACK,
  VIEW,
  DASHBOARD
]);

function listenForClicks() {
  document.addEventListener("click", (e) => {
    const { id } = e.target;
    console.log(`button ${id} clicked!`);
    if (validButtonSet.has(id)) {
      switch (id) {
        case DASHBOARD: {
          const createData = {
            url: "pages/dashboard.html",
            active: true
          };
          console.log("opening current dashboard page!");
          const creating = utils.getBrowser().tabs.create(createData);
          console.log('debug creating tab:', creating);
          creating
            .then(tab => console.log(`tab opened with id: ${tab.id}`))
            .catch(e => console.log(`error opening dashboard tab: ${e}`));
          return;
        }
        default: return;
      }
    }
  })
}

listenForClicks();
