export type ComparisonCase = Readonly<{
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  before: string;
  after: string;
}>;

export const comparisons: readonly ComparisonCase[] = [
  {
    slug: 'reception_waiting',
    number: '00',
    eyebrow: 'Reception / Waiting',
    title: 'First impression, compressed footprint.',
    description: 'A compact front room becomes a controlled check-in and waiting moment: efficient, quiet, premium, and realistic for the existing entry condition.',
    before: 'images/reception_waiting-before.jpg',
    after: 'images/reception_waiting-after.jpg',
  },
  {
    slug: 'treatment_room_1',
    number: '01',
    eyebrow: 'Treatment Room #1',
    title: 'Facial and skin-health treatment room.',
    description: 'Soft ivory, clinical warmth, storage, device cart, and a calmer treatment bed setup without changing the existing room geometry.',
    before: 'images/treatment_room_1-before.jpg',
    after: 'images/treatment_room_1-after.jpg',
  },
  {
    slug: 'treatment_room_2',
    number: '02',
    eyebrow: 'Treatment Room #2',
    title: 'Advanced-device treatment room.',
    description: 'A more capable treatment environment for device-based work while keeping the footprint practical and medically credible.',
    before: 'images/treatment_room_2-before.jpg',
    after: 'images/treatment_room_2-after.jpg',
  },
  {
    slug: 'treatment_room_3',
    number: '03',
    eyebrow: 'Treatment Room #3',
    title: 'Private quiet treatment room.',
    description: 'A quieter treatment room concept with acoustic softness, warmer walls, and a more elevated patient experience.',
    before: 'images/treatment_room_3-before.jpg',
    after: 'images/treatment_room_3-after.jpg',
  },
  {
    slug: 'retail_consult_room',
    number: '04',
    eyebrow: 'Room #4 · Retail + Consult',
    title: 'Skin analysis, retail, and sales room.',
    description: 'Two-couch consultation energy, product display, consultant zone, and a skin-examining machine for the highest-conversion room in the plan.',
    before: 'images/retail_consult_room-before.jpg',
    after: 'images/retail_consult_room-after.jpg',
  },
  {
    slug: 'recovery_room',
    number: '05',
    eyebrow: 'Room #5 · Recovery',
    title: 'Dimmer, softer, post-treatment recovery.',
    description: 'A recovery room with a reclined rest posture, soft materials, and lower stimulation after more intensive procedures.',
    before: 'images/recovery_room-before.jpg',
    after: 'images/recovery_room-after.jpg',
  },
  {
    slug: 'restroom',
    number: '06',
    eyebrow: 'ADA Restroom',
    title: 'Clean spa-grade restroom refresh.',
    description: 'A finish-level refresh that keeps the existing accessible layout while making it feel intentional and brand-consistent.',
    before: 'images/restroom-before.jpg',
    after: 'images/restroom-after.jpg',
  },
  {
    slug: 'hallway',
    number: '07',
    eyebrow: 'Hallway / Circulation',
    title: 'The clinic spine becomes part of the brand.',
    description: 'Wayfinding, acoustic softness, and gallery lighting turn circulation into a deliberate patient transition.',
    before: 'images/hallway-before.jpg',
    after: 'images/hallway-after.jpg',
  },
  {
    slug: 'kitchen_backofhouse',
    number: '08',
    eyebrow: 'Kitchen / Back-of-house',
    title: 'Staff function with controlled visual noise.',
    description: 'A practical staff kitchen and laundry zone made cleaner, darker, and more organized without pretending it is a public-facing room.',
    before: 'images/kitchen_backofhouse-before.jpg',
    after: 'images/kitchen_backofhouse-after.jpg',
  },
];
