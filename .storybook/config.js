import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import GithubCorner from '@personare/react-storybook-decorator-github-corner';

addDecorator(GithubCorner);

setAddon(infoAddon);

function loadStories() {
  require('../stories/index.jsx');
}

configure(loadStories, module);
