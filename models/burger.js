



module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {


    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      
      // len is a validation that checks that our todo is between 1 and 140 characters
     
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    },
  });
  return Burgers;
};
