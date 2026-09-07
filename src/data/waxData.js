export const waxData = {
  soy: {
    label: 'Soy wax',
    melt: '~45–55°C',
    frag: '65–75°C',
    dye: '70–80°C',
  },
  paraffin: {
    label: 'Paraffin',
    melt: '~50–65°C',
    frag: '70–80°C',
    dye: '75–85°C',
  },
  beeswax: {
    label: 'Beeswax',
    melt: '~62–65°C',
    frag: '70–80°C',
    dye: '75–85°C',
  },
  blend: {
    label: 'Soy / paraffin blend',
    melt: 'varies — follow supplier',
    frag: '65–75°C',
    dye: '70–80°C',
  },
}

export const inductionSettings = [
  { power: '300–500 W', use: 'Start here for melting', highlight: true },
  { power: '500–700 W', use: 'If melting is too slow' },
  { power: '800+ W', use: 'Usually unnecessary — overheating risk' },
  { power: '1400 W', use: 'Avoid for candle wax' },
]

export const processSteps = [
  {
    title: 'Prepare the vessel',
    desc: 'Clean and completely dry the vessel. Fix the wick centred and upright before you start melting.',
  },
  {
    title: 'Weigh the wax',
    temp: 'e.g. 500 g',
    desc: 'Weigh directly rather than guessing from vessel volume — see the vessel calculator if you only know how much liquid your mould holds.',
  },
  {
    title: 'Melt on induction',
    temp: '300–500 W',
    desc: 'Start low and increase only if melting is too slow. The induction dial controls how fast heat goes in — your thermometer tells you the real wax temperature, not the dial.',
  },
  {
    title: 'Add powder dye',
    temp: '~70–80°C',
    desc: "Once the wax is fully melted, turn the induction off, then add dye and stir until it's completely dissolved — the dye needs heat to disperse, not to stay hot.",
  },
  {
    title: 'Cool for fragrance',
    temp: '~65–75°C',
    desc: "Let the wax drop to its fragrance-addition temperature. If it drops too far and starts looking cloudy or thick, a brief 300–400 W reheat brings it back — don't hold it at high heat continuously.",
  },
  {
    title: 'Add fragrance and stir',
    temp: '8% start',
    desc: 'Stir gently for 1–2 minutes. Use the calculator for the exact gram amount for your batch size.',
  },
  {
    title: 'Cool to pouring temperature',
    temp: '~55–65°C',
    desc: "60°C is a reasonable starting point — follow your specific wax supplier's number if they give you one.",
  },
  {
    title: 'Pour and rest',
    temp: '12–24 hrs',
    desc: 'Pour slowly. Leave the candle completely undisturbed while it sets.',
  },
  {
    title: 'Trim, cure, test',
    temp: '7–14 days',
    desc: 'Trim the wick to 5–6 mm. Cure (soy generally 7–14 days) before your first burn test — always burn-test before selling.',
  },
]

export const troubleshootNotes = [
  {
    title: 'Wax hardens before you finish pouring',
    body: "Put it back on the induction at low power (200–400 W), stir gently as it re-melts, and aim for roughly 50–60°C — just enough to be fully liquid again. Don't automatically heat it back to 70–80°C.",
  },
  {
    title: "Dye isn't dissolving",
    body: 'Reheat briefly at 300–400 W in short bursts, stirring continuously, until the powder is fully dispersed. Then turn the induction off again and let it cool for fragrance. Avoid holding a constant 75–80°C for minutes at a time — the pot keeps gaining heat and overshoots.',
  },
  {
    title: 'Unknown vessel volume',
    body: "Fill the vessel with water to your intended fill line and measure that volume — don't assume the vessel's stated capacity is your wax amount. Use the calculator in volume mode to convert that to a wax weight.",
  },
]
