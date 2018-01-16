import { isEmpty } from 'lodash';

export const listID = (index, length_match, ID_type) => `${ID_type}-${('0' + (length_match + index)).slice(-2)}`;
export const stats = (genres, year) => {
  if (!isEmpty(genres)) {
    return [
      { Title: '80% INDICADO', ID: 'GEN-00' },
      { Title: genres.map(({ Title }) => Title).join(' '), ID: genres[0].ID },
      { Title: String(year), ID: listID(1, genres.length, 'GEN') },
      { Title: 'EUA', ID: listID(2, genres.length, 'GEN') },
      { Title: '14', ID: listID(3, genres.length, 'GEN') }
    ];
  }
  return;
};

export const scroll = (direction, container) => {
  let node = document.getElementById(container);
  const left = () => node.scrollLeft -= 4;
  const right = () => node.scrollLeft += 4;
  const options = [left, right];

  const sub_routine = (index) => {
    if (index < 162) {
      setTimeout(() => {
        options[direction]();
        sub_routine(index + 4);
      }, 4);
    }
  }

  return sub_routine(0);
};


export const format_duration = duration => {
  let hour = duration,
    minute = duration;
  if (duration > 59) {
    hour = Math.ceil(duration / 60);
    minute = Math.ceil(duration % 60);
    return `${hour}h ${!!minute ? `${minute}min` : '' }`;
  }
  return `${minute}min`;
};