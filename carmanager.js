const cg = require('./cargenerator');

class CarManager {
  constructor () {
    this.cars = {};
    this.carGenerator = new cg.CarGenerator(90, 90);
  }

  /**
   * Gets the details for a specific vehicle, if the details already
   * exist, it returns those, otherwise it creates some new details
   * @param {string} reg  Car Registration
   */
  getDetails (reg) {
    if(this.cars[reg] !== undefined) {
      return this.cars[reg];
    }

    const vehicle = this.carGenerator.generateVehicle(reg);
    this.cars[reg] = vehicle;
    return vehicle;
  }
}

module.exports.CarManager = CarManager;