// @flow strict
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    case 'line':
      icon = ICONS.LINE;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'gitlab':
      icon = ICONS.GITLAB;
      break;
    case 'weibo':
      icon = ICONS.WEIBO;
      break;
    case 'codepen':
      icon = ICONS.CODEPEN;
      break;
    case 'youtube':
      icon = ICONS.YOUTUBE;
      break;
    case 'soundcloud':
      icon = ICONS.SOUNDCLOUD;
      break;
    case 'medium':
      icon = ICONS.MEDIUM;
      break;
    case 'kaggle':
      icon = ICONS.KAGGLE;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
