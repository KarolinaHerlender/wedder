
interface BaseGuest {
  name: string;
  surname: string;
  hasConfirmed: boolean;
  willSleep: boolean;
  isChild: boolean;
  phoneNumber: number;
}

interface ApiGuest extends BaseGuest {
  accompany: Array<string>;

}
interface IGuest extends BaseGuest {
  accompany: Array<Guest>;

}

class Guest extends Model {
  data: IGuest;
  public accompany: Array<Guest>;

  deserialize(apiGuest: ApiGuest, guests: Array<Guest>) {
    const iGuest = apiGuest as any as IGuest;
    // iGuest.accompany = guests.`f
    return iGuest;
  }
  constructor(iGuest: IGuest) {
    super();
    this.data = iGuest;
  }

  get name(): string {
    return this.data.name;
  }
  get surname(): string {
    return this.data.surname;
  }
  get hasConfirmed(): boolean {
    return this.data.hasConfirmed;
  }
  get willSleep(): boolean {
    return this.data.willSleep;
  }
  get isChild(): boolean {
    return this.data.isChild;
  }
  get phoneNumber(): number {
    return this.data.phoneNumber;
  }
}
