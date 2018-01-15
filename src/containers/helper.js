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