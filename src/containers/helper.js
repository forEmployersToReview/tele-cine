const stats = (genres, year) => {
  console.log(genres, 'genres')
  if (genres && genres.length) {
    const listID = index => `GEN-${'0' + (genres.length + index)}`.slice(-2);
    return [
      { Title: '80% INDICADO', ID: 'GEN-00' },
      ...genres,
      { Title: String(year), ID: listID(1) },
      { Title: 'EUA', ID: listID(2) },
      { Title: '14', ID: listID(3) }
    ];
  }
  return null;
};

export default stats;
