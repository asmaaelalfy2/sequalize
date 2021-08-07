const express = require('express');
const { course, center, season, batch } = require('./models');

const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/batchcode', async (req, res) => {
  try {
    const centers = await center.findAll();
    const seasons = await season.findAll();
    const courses = await course.findAll();
    // const centers = await center.findAll();
    

    res.render('BatchCode', { centers, courses, seasons });
  } catch (error) {
    console.log(error);
  }
});

app.post('/batchcode', async (req, res) => {
  batchCd = '';
  batchCd += req.body.course;
  batchCd += req.body.season;
  console.log(req.body.course);

  batchCd += req.body.batch;
  try {
    const Batch = await batch.create({
      code: req.body.batch,
      start: Date.parse(req.body.start),

      end: Date.parse(req.body.end),
      seasonId:req.body.season,
      courseId:req.body.course,

      centerId:req.body.center,

      
    });

    res.send(Batch.code);
  } catch (error) {}

  //   res.send(batchCd);
});

module.exports = {
  app,
};
// app.listen(3000);
