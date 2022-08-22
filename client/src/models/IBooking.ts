export interface IGuest {
  namn: "";
  email: "";
  phone: "";
  message: "";
}

export interface IBooking {
  date: Date[];
  time: string[];
  amount: number[];
  guestInfo: any[];
}
