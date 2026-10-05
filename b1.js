const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9
};

const priceKey = "roomPrice";

// Dot Notation bookingReservation.priceKey tìm thuộc tính có tên "priceKey"
// nhưng đối tượng không có thuộc tính này nên kết quả là undefined.
// Khi dùng biến priceKey để lấy tên thuộc tính, phải dùng Bracket Notation.
const basePrice = bookingReservation[priceKey];

let surcharge = 0;

if (bookingReservation.checkInHour < 12) {
  surcharge = basePrice * 0.3;
  bookingReservation.surcharge = surcharge;
}

const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

console.log("Mã đặt phòng:", bookingReservation.bookingId);
console.log("Khách hàng:", bookingReservation.guestName);
console.log("Phụ thu nhận phòng sớm:", bookingReservation.surcharge);
console.log("Tổng số tiền thanh toán:", bookingReservation.totalAmount);