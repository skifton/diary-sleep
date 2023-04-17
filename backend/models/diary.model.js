const { Sequelize } = require("sequelize");
const db = require("../config/db.config.js");

const { DataTypes } = Sequelize;

const Diary = db.define('diary',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amountOfSleepYesterday: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    totalMinutesOfSleepYesterday: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    kindOfSport: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    totalMinutesOfSports: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    numberOfCigarretesSmokedYesterday: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    kindOfAlcohol: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    amountOfAlcoholConsumedYesterday: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nameOfTheSleepingPill: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    doseOfTheSleepingPill: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    timeWentToBedYesterday: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    decisionTimeToSleep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberOfMinutesBeforeSleep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numberOfAwakeningsAtNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalWakeUpTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wakeUpTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeToGetOutOfBed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeOfSleep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rateOfSleep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
module.exports = Diary;