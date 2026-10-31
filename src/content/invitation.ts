/**
 * All copy for the invitation lives here — swap these values and the whole
 * storybook updates.
 */

export const invitation = {
  couple: {
    bride: "Abhaya",
    groom: "Vishakh",
    fullNameBride: "Abhaya Raju",
    fullNameGroom: "Vishakh M V",
    initials: "A & V",
  },
  /** ISO date-time of the ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-15T11:00:00+05:30",
  dateLabel: "Sunday, 15 November 2026",
  timeLabel: "11:00 AM – 12:30 PM",
  venue: {
    name: "Kabani Auditorium",
    address: "Pulpally, Wayanad, Kerala",
    mapsQuery: "11.789588,76.164963",
    mapsUrl: "https://maps.google.com/?q=11.789588,76.164963",
  },
  dressCode: "Traditional / Festive Indian",
  hero: {
    kicker: "Together with their families",
    eyebrow: "Save the Date",
    blessing: "Two souls, one heart, a lifetime together",
  },
  story: {
    title: "The Two of Them",
    subtitle: "A story written in smiles, laughter, and endless love",
    bride: {
      name: "Abhaya Raju",
      role: "The Bride",
      text: "Bright, radiant, and full of heartfelt warmth. She lights up every room with her gentle smile, infectious laughter, and a spirit that embraces every joy of life.",
    },
    groom: {
      name: "Vishakh M V",
      role: "The Groom",
      text: "Calm, steadfast, and deeply caring. Always dependable with an open heart and quiet strength, he found his joy and true home by Abhaya's side.",
    },
  },
  chapters: [
    {
      no: "I",
      title: "When Paths Crossed",
      when: "The Beginning",
      text: "An effortless connection that began with smiles and conversation, quickly turning ordinary moments into cherished memories.",
    },
    {
      no: "II",
      title: "Growing Together",
      when: "The Journey",
      text: "Laughter shared, dreams whispered, and a bond nurtured by mutual understanding, quiet patience, and unwavering support.",
    },
    {
      no: "III",
      title: "The Promise",
      when: "Forever Begins",
      text: "With full hearts and joyful certainty, they chose to walk together through every season of life.",
    },
    {
      no: "IV",
      title: "Our Celebration With You",
      when: "15 November 2026",
      text: "Surrounded by our families and dearest ones at Kabani Auditorium, Pulpally, we step into forever.",
    },
  ],
  footer: {
    line1: "Come celebrate with us.",
    line2: "Be part of our joyous celebration.",
    signoff: "With all our love, Abhaya & Vishakh",
  },
} as const;

export const wishes = [
  {
    from: "Family",
    text: "May your home always be filled with joy, laughter, and an abundance of love.",
  },
  {
    from: "Friends",
    text: "Here's to a lifetime of adventures, shared dreams, and happily ever after!",
  },
  {
    from: "Well-Wishers",
    text: "Wishing you both endless happiness as you start this wonderful journey together.",
  },
] as const;
