class AbilityScores {
  private _strength: number;
  private _dexterity: number;
  private _constitution: number;
  private _intelligence: number;
  private _wisdom: number;
  private _charisma: number;

  constructor(
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
  ) {
    this._strength = strength | 0;
    this._dexterity = dexterity | 0;
    this._constitution = constitution | 0;
    this._intelligence = intelligence | 0;
    this._wisdom = wisdom | 0;
    this._charisma = charisma | 0;
  }

  public save() {
    return {
      strength: this._strength,
      dexterity: this.dexterity,
      constitution: this._constitution,
      intelligence: this._intelligence,
      wisdom: this._wisdom,
      charisma: this._charisma,
    };
  }

  public get strength(): number {
    return this._strength;
  }
  public set strength(value: number) {
    this._strength = value;
  }
  public get dexterity(): number {
    return this._dexterity;
  }
  public set dexterity(value: number) {
    this._dexterity = value;
  }
  public get constitution(): number {
    return this._constitution;
  }
  public set constitution(value: number) {
    this._constitution = value;
  }
  public get intelligence(): number {
    return this._intelligence;
  }
  public set intelligence(value: number) {
    this._intelligence = value;
  }
  public get wisdom(): number {
    return this._wisdom;
  }
  public set wisdom(value: number) {
    this._wisdom = value;
  }
  public get charisma(): number {
    return this._charisma;
  }
  public set charisma(value: number) {
    this._charisma = value;
  }
}

class Feats {
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}

class Spells {
  private _level1: Spell[] = [];
  private _level2: Spell[] = [];
  private _level3: Spell[] = [];

  public get level1(): Spell[] {
    return this._level1;
  }
  public set level1(value: Spell[]) {
    this._level1 = value;
  }
  public get level2(): Spell[] {
    return this._level2;
  }
  public set level2(value: Spell[]) {
    this._level2 = value;
  }
  public get level3(): Spell[] {
    return this._level3;
  }
  public set level3(value: Spell[]) {
    this._level3 = value;
  }
}

class Spell {
  private _name: string;
  private _castingTime: string;
  private _components!: string;
  private _damageType!: string;
  private _description: string;
  private _dice: string;
  private _duration: string;
  private _range: string;
  private _saveType: string;

  constructor(
    name: string,
    castingTime: string,
    components: string,
    damageType: string,
    description: string,
    dice: string,
    duration: string,
    range: string,
    saveType: string
  ) {
    this._name = name;
    this._castingTime = castingTime;
    this.components = components;
    this._damageType = damageType;
    this._description = description;
    this._dice = dice;
    this._duration = duration;
    this._range = range;
    this._saveType = saveType;
  }

  public save() {
    return {
      name: this._name,
      castingTime: this._castingTime,
      components: this._components,
      damageType: this._damageType,
      description: this._description,
      dice: this._dice,
      duration: this._duration,
      range: this._range,
      saveType: this._saveType,
    };
  }

  public get dice(): string {
    return this._dice;
  }
  public set dice(value: string) {
    this._dice = value;
  }
  public get duration(): string {
    return this._duration;
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public get range(): string {
    return this._range;
  }
  public set range(value: string) {
    this._range = value;
  }
  public get saveType(): string {
    return this._saveType;
  }
  public set saveType(value: string) {
    this._saveType = value;
  }
  public get components(): string {
    return this._components;
  }
  public set components(value: string) {
    this._components = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get castingTime(): string {
    return this._castingTime;
  }
  public set castingTime(value: string) {
    this._castingTime = value;
  }
  public get damageType(): string {
    return this._damageType;
  }
  public set damageType(value: string) {
    this._damageType = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}

class Attack {
  private _name: string;
  private _range: string;
  private _bonus: string;
  private _type: string;
  constructor(name: string, range: string, bonus: string, type: string) {
    this._name = name;
    this._range = range;
    this._bonus = bonus;
    this._type = type;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get range(): string {
    return this._range;
  }
  public set range(value: string) {
    this._range = value;
  }
  public get bonus(): string {
    return this._bonus;
  }
  public set bonus(value: string) {
    this._bonus = value;
  }
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
}

class Skills {
  private _athletics: boolean;
  private _acrobatics: boolean;
  private _slightOfHand: boolean;
  private _stealth: boolean;
  private _arcana: boolean;
  private _history: boolean;
  private _investigation: boolean;
  private _nature: boolean;
  private _religion: boolean;
  private _animalHandling: boolean;
  private _insight: boolean;
  private _medicine: boolean;
  private _perception: boolean;
  private _survival: boolean;
  private _deception: boolean;
  private _intimidation: boolean;
  private _performance: boolean;
  private _persuasion: boolean;

  constructor(
    athletics: boolean,
    acrobatics: boolean,
    slightOfHand: boolean,
    stealth: boolean,
    arcana: boolean,
    history: boolean,
    investigation: boolean,
    nature: boolean,
    religion: boolean,
    animalHandling: boolean,
    insight: boolean,
    medicine: boolean,
    perception: boolean,
    survival: boolean,
    deception: boolean,
    intimidation: boolean,
    performance: boolean,
    persuasion: boolean
  ) {
    this._acrobatics = acrobatics;
    this._athletics = athletics;
    this._slightOfHand = slightOfHand;
    this._stealth = stealth;
    this._arcana = arcana;
    this._history = history;
    this._investigation = investigation;
    this._nature = nature;
    this._religion = religion;
    this._animalHandling = animalHandling;
    this._insight = insight;
    this._medicine = medicine;
    this._perception = perception;
    this._survival = survival;
    this._deception = deception;
    this._intimidation = intimidation;
    this._performance = performance;
    this._persuasion = persuasion;
  }

  public get athletics(): boolean {
    return this._athletics;
  }
  public set athletics(value: boolean) {
    this._athletics = value;
  }
  public get acrobatics(): boolean {
    return this._acrobatics;
  }
  public set acrobatics(value: boolean) {
    this._acrobatics = value;
  }
  public get slightOfHand(): boolean {
    return this._slightOfHand;
  }
  public set slightOfHand(value: boolean) {
    this._slightOfHand = value;
  }
  public get stealth(): boolean {
    return this._stealth;
  }
  public set stealth(value: boolean) {
    this._stealth = value;
  }
  public get arcana(): boolean {
    return this._arcana;
  }
  public set arcana(value: boolean) {
    this._arcana = value;
  }
  public get history(): boolean {
    return this._history;
  }
  public set history(value: boolean) {
    this._history = value;
  }
  public get investigation(): boolean {
    return this._investigation;
  }
  public set investigation(value: boolean) {
    this._investigation = value;
  }
  public get nature(): boolean {
    return this._nature;
  }
  public set nature(value: boolean) {
    this._nature = value;
  }
  public get religion(): boolean {
    return this._religion;
  }
  public set religion(value: boolean) {
    this._religion = value;
  }
  public get animalHandling(): boolean {
    return this._animalHandling;
  }
  public set animalHandling(value: boolean) {
    this._animalHandling = value;
  }
  public get insight(): boolean {
    return this._insight;
  }
  public set insight(value: boolean) {
    this._insight = value;
  }
  public get medicine(): boolean {
    return this._medicine;
  }
  public set medicine(value: boolean) {
    this._medicine = value;
  }
  public get perception(): boolean {
    return this._perception;
  }
  public set perception(value: boolean) {
    this._perception = value;
  }
  public get survival(): boolean {
    return this._survival;
  }
  public set survival(value: boolean) {
    this._survival = value;
  }
  public get deception(): boolean {
    return this._deception;
  }
  public set deception(value: boolean) {
    this._deception = value;
  }
  public get intimidation(): boolean {
    return this._intimidation;
  }
  public set intimidation(value: boolean) {
    this._intimidation = value;
  }
  public get performance(): boolean {
    return this._performance;
  }
  public set performance(value: boolean) {
    this._performance = value;
  }
  public get persuasion(): boolean {
    return this._persuasion;
  }
  public set persuasion(value: boolean) {
    this._persuasion = value;
  }
}
