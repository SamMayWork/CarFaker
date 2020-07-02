class CarGenerator {

  constructor (taxChance, motChance) {
    this.carConfig = {
      colors : ['grey', 'black', 'white', 'red', 'blue', 'silver', 'yellow', 'orange', 'green'],
      makes : ['audi', 'bmw', 'ford', 'honda', 'jaguar', 'land rover', 'mercedes-benz', 'nissan', 'porsche', 'toyota', 'vauxhall', 'volkswagen'],
      taxChance : 0,
      motChance : 0,
    }
  
    this.models = {
      "audi" : ["A1","A3","A5","A6","A6 allroad quattro","A7","A8","Q2","Q3","Q5","Q7","Q8","R8","TT","e-tron"],
      "bmw" : ["i3","X5","i8","X1" ,"X2","X3","X4" ,"X5","X6","X7","7 Series","5 Series","6 Series","8 Series","3 Series" ,"1 Series","4 Series" ,"2 Series"],
      "ford" : ['Ka', 'Fiesta', 'Focus', 'Mondeo', 'Fiesta ST', 'Focus ST', 'Mustang', 'Raptor', 'GT', 'S-Max', 'C-Max', 'Galaxy', 'Transit', 'Explorer', 'Ranger'],
      "honda" : ['Accord', 'Acty', 'Amaze', 'Avancier', 'Ballade', 'Brio', 'BR-V', 'City', 'Civic', 'Clarity', 'Crider', 'Jazz', 'CR-X'],
      "jaguar" : ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF', 'XJ'],
      "land rover" : ['Defender', 'Discovery Sport', 'Discovery', 'Range Rover Evoque', 'Velar', 'Sport', 'Range Rover'],
      "mercedes-benz" : ['A-Class', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'G-Glass', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'SLC', 'V-Class', 'AMG GT', 'AMG GT4', 'X-Class'],
      "nissan" : ['Patrol', 'Skyline', 'Pulsar', 'Maxima', 'Micra', 'Pathfina', 'Serena', 'Note', 'Leaf', 'Juke', 'GT-R', 'Titan', 'X-Trail'],
      "porsche" : ['Boxster', 'Cayenne', 'Carrera GT', 'Cayman', 'Panamera', '918 Spyder', 'Macan', 'Taycan'],
      "toyota" : ['Century', 'Crown', 'Camry', '86', 'Supra', 'C-HR', 'Land Cruiser', 'Hilux', 'Corolla', 'Prius', 'Yaris'],
      "vauxhall" : ['Astra', 'Adam', 'Corsa', 'Crossland-X', 'Grandland-X', 'Insignia', 'Zafira', 'VXR8'],
      "volkswagen" : ['Golf', 'Passat', 'Polo', 'Tiguan', 'Caddy', 'Touareg', 'T-Roc', 'Sharan', 'Up!']
    }

    this.carConfig["taxChance"] = taxChance;
    this.carConfig["motChance"] = motChance; 
  }

  
  /**
   * Returns JSON obeject containing the generated information
   * @param {string} registration 
   */
  generateVehicle (registration) {
    const vehicle = {
      taxStatus : 0,
      make : "",
      model : "",
      motStatus : 0,
      color : "",
      registration: registration
    };

    vehicle.color = randomElement(this.carConfig.colors);
    vehicle.make = randomElement(this.carConfig.makes);
    vehicle.model = randomElement(this.models[vehicle.make]);

    vehicle.motStatus = randomValue(0, 100) > this.carConfig["motChance"] ? false : true;
    vehicle.taxStatus = randomValue(0, 100) > this.carConfig["taxChance"] ? false : true;

    return vehicle;
  }
}

/**
 * Returns a random element from a list
 * @param {*} items 
 */
const randomElement = (items) => {
  return items[randomValue(0, items.length)];
}

/**
 * Returns a random element between a minimum and maximum
 * @param {*} min 
 * @param {*} max 
 */
const randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);
 
module.exports.CarGenerator = CarGenerator;