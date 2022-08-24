export interface IGuest {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface IBooking {
  date: string;
  time: string;
  numberOfGuests: number;
  bookedBy: IGuest;
}
