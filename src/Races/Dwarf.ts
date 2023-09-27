import Race from './Race';

export default class Dwarf extends Race {
  static instances = 0;
  private maxLifePointsDwarf = 80;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints() {
    return this.maxLifePointsDwarf;
  }

  static override createdRacesInstances():number {
    return Dwarf.instances;
  }
}