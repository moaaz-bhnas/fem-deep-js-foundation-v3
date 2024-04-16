/**
 * Let's say we need an object for each country containing all its config
 * Thes objects should have shared methods as countries and methods from their region
 */

/** What is the issue with this design?
 * It implies something that JavaScript doesn't really do
 * It implies that egypt inherited all properties/methods from MenaCountry class
 * while actually what happened is that egypt just has a link to MenaCountry's prototype, which has a link to Country's prototype
 */
class Country {
  constructor(name, code, provinces) {
    this.name = name;
    this.code = code;
    this.provinces = provinces;
  }

  getLocation() {}
}

class MenaCountry extends Country {
  constructor(name, code, provinces) {
    super(name, code, provinces);
  }

  getTranslatedProvinces() {}
}

const egypt = new MenaCountry("Egypt", "EG", ["Cairo", "Fayoum"]);
egypt.getTranslatedProvinces();

/** The issue here?
 * While the code implies what it actually does,
 * it's verbose
 */
function Country(name, code, provinces) {
  this.name = name;
  this.code = code;
  this.provinces = provinces;
}
Country.prototype.getLocation = function () {};

function MenaCountry(name, code, provinces) {
  Country.call(this, name, code, provinces);
}
MenaCountry.prototype = Object.create(Country);
MenaCountry.prototype.constructor = MenaCountry;
MenaCountry.prototype.getTranslatedProvinces = function () {};

/** OLOO (Objects Linked to Other Objects)
 *
 */
const Country = {
  setProperties(name, code, provinces) {
    this.name = name;
    this.code = code;
    this.provinces = provinces;
  },
  getLocation() {},
};

const MenaCountry = Object.assign(Object.create(Country), {
  getTranslatedProvinces() {},
});

const iraq = Object.create(MenaCountry);
iraq.setProperties("Iraq", "IR", []);
iraq.getTranslatedProvinces();
iraq.getLocation();
