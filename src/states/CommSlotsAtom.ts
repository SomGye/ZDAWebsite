import { atom } from "recoil";

/**
 * ACTIVE Commission Slots
 */
export const commSlotsAtom = atom({
  key: "CommSlots",
  default: 5,
}); // ACTIVE commission slots open

/**
 * WAITLIST Commission Slots
 */
export const waitlistSlotsAtom = atom({
  key: "WaitlistSlots",
  default: 5,
}); // WAITLIST commission slots open

/**
 * Commission Status: OPEN or CLOSED
 */
export const commStatusAtom = atom({
  key: "CommStatus",
  default: "OPEN", // "OPEN" or "CLOSED"
});

/**
 * FLAG for hiding Spinner and setting Slots display to Ready
 */
export const slotsReadyAtom = atom({
  key: "slotsReady",
  default: false,
});
