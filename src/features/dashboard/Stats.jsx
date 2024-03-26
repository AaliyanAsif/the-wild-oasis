import { BsBarChart } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import React from "react";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  // num checked in nights / (num of days + num of cabins)

  return (
    <>
      <Stat
        title={"Bookings"}
        color={"blue"}
        icon={<BsBriefcase />}
        value={numBookings}
      />
      <Stat
        title={"Sales"}
        color={"green"}
        icon={<MdAttachMoney />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={"Check Ins"}
        color={"indigo"}
        icon={<SlCalender />}
        value={checkins}
      />
      <Stat
        title={"Occupancy Rate"}
        color={"yellow"}
        icon={<BsBarChart />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}
