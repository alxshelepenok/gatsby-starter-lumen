// @flow strict
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('vkontakte')).toBe(ICONS.VKONTAKTE);
  expect(getIcon('telegram')).toEqual(ICONS.TELEGRAM);
  expect(getIcon('email')).toEqual(ICONS.EMAIL);
  expect(getIcon('rss')).toEqual(ICONS.RSS);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('instagram')).toEqual(ICONS.INSTAGRAM);
  expect(getIcon('line')).toEqual(ICONS.LINE);
  expect(getIcon('facebook')).toEqual(ICONS.FACEBOOK);
  expect(getIcon('gitlab')).toEqual(ICONS.GITLAB);
  expect(getIcon('weibo')).toEqual(ICONS.WEIBO);
  expect(getIcon('codepen')).toEqual(ICONS.CODEPEN);
  expect(getIcon('youtube')).toEqual(ICONS.YOUTUBE);
  expect(getIcon('soundcloud')).toEqual(ICONS.SOUNDCLOUD);
  expect(getIcon('medium')).toEqual(ICONS.MEDIUM);
  expect(getIcon('kaggle')).toEqual(ICONS.KAGGLE);
});
