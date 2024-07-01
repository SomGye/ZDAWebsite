import { atom } from "recoil";

/**
 * ACTIVE Commission Slots
 */
export const activeSlotsAtom = atom({
  key: "ActiveSlots",
  default: -1, // for state change detection
}); // ACTIVE commission slots open

/**
 * WAITLIST Commission Slots
 */
export const waitlistSlotsAtom = atom({
  key: "WaitlistSlots",
  default: -1, // for state change detection
}); // WAITLIST commission slots open

/**
 * MAX Commission Slots  
 * (Applies to ACTIVE and WAITLIST, each)
 */
export const maxSlotsAtom = atom({
  key: "maxSlots",
  default: 5,
});

/**
 * Commission Status: OPEN or CLOSED
 */
export const commStatusAtom = atom({
  key: "CommStatus",
  default: "", // "OPEN" or "CLOSED"
});

/**
 * Commissions Open: true or false
 */
export const commsOpenAtom = atom({
  key: "CommsOpen",
  default: false, // false/true, depending on commStatusAtom value
});

/**
 * FLAG for hiding Spinner and setting data display to Ready
 */
export const slotsReadyAtom = atom({
  key: "slotsReady",
  default: false,
});
