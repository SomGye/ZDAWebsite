/* Source for WritingsPage */
export type writingsContentsType = {
  type: string;
  title: string;
  content: string;
  datetime: string;
  year: number;
  month: number;
  day: number;
  time: string;
};
export type writingsType = {
  section: string;
  contents: writingsContentsType[];
};
export const writings: writingsType[] = [
  {
    section: "Poems",
    contents: [
      {
        type: "poem",
        title: "Nothing At All",
        content: `Nothing at all
        I wish I thought
        Too much, to recall
        
        Consumed in thoughts
        I had it all
        Only in mind
        Nothing to recall
        
        Nothing at all
        Matters in these halls
        Too much, to fall
        
        Consumed in memories
        Bitter and sour
        Always in mind
        Dour the tone,
        Grim the reflection
        
        Nothing at all
        Really matters
        Too much, to recall.
        `,
        datetime: "2025-01-23 1438",
        year: 2025,
        month: 1,
        day: 23,
        time: "1438",
      },
      {
        type: "poem",
        title: "Just Testing",
        content: `Testing,
        Just a thing to see
        Does it really work?
        
        Not really;
        Even if you think it did,
        it was merely a mirage,
        A meaningless mirage,
        Just like you.
        `,
        datetime: "2025-01-23 2110",
        year: 2025,
        month: 1,
        day: 23,
        time: "2110",
      },
      {
        type: "poem",
        title: "Burning Forgiveness",
        content: `Burned away, tucked away
It never goes away
Memories hotter than a searing knife
It never goes away

Days of wishing
Wishing it would go away
When you remember who started it:
Does everyone deserve forgiveness?
        `,
        datetime: "2025-01-26 0850",
        year: 2025,
        month: 1,
        day: 26,
        time: "0850",
      },
      {
        type: "poem",
        title: "Nourish Me",
        content: `Deep spinning void
A depth unseen
Cast me out into an unknown ocean
Nourish me with your depth

Staring out, hoping it stares back
I never know, if I'll come back
Staring out, where will I go
Nourish me, and never let go`,
        datetime: "2025-04-27 1039",
        year: 2025,
        month: 4,
        day: 27,
        time: "1039",
      },
    ],
  },
  {
    section: "Ramblings",
    contents: [],
  },
  {
    section: "Phrases",
    contents: [],
  },
];
