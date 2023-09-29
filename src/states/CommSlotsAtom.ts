import { atom } from "recoil";

/**
 * ACTIVE Commission Slots  
 * Update default manually!
 */
export const commSlotsAtom = atom({
  key: "CommSlots",
  default: 5,
}); // ACTIVE commission slots open

/**
 * WAITLIST Commission Slots  
 * Update default manually!
 */
export const waitlistSlotsAtom = atom({
  key: "WaitlistSlots",
  default: 5,
}); // WAITLIST commission slots open

/**
 * Commission Status: OPEN or CLOSED  
 * Update default manually!
 */
export const commStatusAtom = atom({
  key:"CommStatus",
  default: "OPEN" // "OPEN" or "CLOSED"
});
