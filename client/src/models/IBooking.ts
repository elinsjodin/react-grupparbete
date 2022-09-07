export interface IGuest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface IBooking {
  _id: string;
  date: string;
  time: string;
  numberOfGuests: number;
  bookedBy: IGuest;
}

export interface IEditBooking {
  date: string;
  time: string;
  numberOfGuests: number;
}

export interface IEditGuest {
  name: string;
  email: string;
  phone: string;
  message?: string;
}
