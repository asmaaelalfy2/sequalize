const { db, course, batch, center, season } = require('./index');

const seed = async () => {
  try {
    await course.bulkCreate(
      [
        { id: 'FP', name: 'FUCTIONAL PROGRAMMING' },
        { id: 'SQL', name: 'STRUCTURD QUERY LANG' },

        { id: 'PYTHON', name: 'PYTHON DJANGO' },
      ],
      { ignoreDuplicates: true }
    );

    await season.bulkCreate(
      [
        { id: '12', name: 'season1' },
        { id: '13', name: 'season3' },

        { id: '14', name: 'season4' },
      ],
      { ignoreDuplicates: true }
    );
  } catch (e) {
    console.log(e);
  } 
};
seed();
