const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('seqlize', 'asmaa', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// try {
//   await db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

db.authenticate()
  .then(console.log('connected successfully'))
  .catch((err) => console.log(err));

const student = db.define('std', {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(2),
    defaultValue: 0,
  },
});

const course = db.define('course', {
  id: {
    type: DataTypes.STRING(2),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});

const teacher = db.define('teacher', {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});

const season = db.define('season', {
  id: {
    type: DataTypes.STRING(2),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});

const center = db.define('center', {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(20),
  },
});

const batch = db.define('batch', {
  code: {
    type: DataTypes.STRING(4),
    primaryKey: true,
  },
  start: {
    type: DataTypes.DATE,
  },
  end: {
    type: DataTypes.DATE,
  },
});

batch.belongsTo(course)
batch.belongsTo(season)

batch.belongsTo(center)

center.hasMany(batch)
season.hasMany(batch)
course.hasMany(batch)
module.exports={db,batch,course,season,center}


//insert Into DB
const std1 = async () => {
  try {
    await db.sync();
    await student.create({
      name: 'nada',
      age: 12,
    });
  } catch (e) {
    console.log(e);
  }
};
std1();

//query DB

const queryDB = async () => {
  try {
    await db.sync();
    const stds = await student.findAll({
      //   where: {
      //     age:{$lt:16}},

      order: [['age', 'asc']],
    });

    stds.forEach((s) =>
      console.log(` name : ${s.dataValues.name},age :${s.dataValues.age}`)
    );
  } catch (e) {
    console.log(e);
  }
};
queryDB();

db.sync().then(() => console.log('data suncronised'));
