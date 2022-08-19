export interface IGuest {
  namn: "";
  email: "";
  phone: "";
  message: "";
}

export interface IBooking {
  date: string;
  time: string[];
  amount: string[];
  guestInfo: any[];
}
