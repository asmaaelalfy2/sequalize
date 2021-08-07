
const { Sequelize, DataTypes } = require('sequelize');

const db=require('./connectdb')
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
  module.exports={batch,course,season,center}