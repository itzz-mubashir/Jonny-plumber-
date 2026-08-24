import { ServiceItem, ProjectItem, ReviewItem, CoverageArea } from '../types';

export const BUSINESS_INFO = {
  name: 'Jonny Eagle Plumbing & Heating',
  owner: 'Jonny Eagle',
  phone: '+44 7496 785620',
  phoneDisplay: '07496 785620',
  email: 'enquiries@jonnyeagleplumbing.co.uk',
  address: {
    street: 'Lewis St',
    city: 'Derby',
    postcode: 'DE23 8BY',
    country: 'United Kingdom',
    full: 'Lewis St, Derby DE23 8BY, United Kingdom'
  },
  gasSafe: {
    registered: true,
    title: 'Gas Safe Registered',
    badgeText: 'Gas Safe Registered Engineer'
  },
  tagline: 'Reliable and friendly plumbing service in and around Derby.',
  serviceAreasSummary: 'Derby & Surrounding Derbyshire Areas',
  heroEyebrow: 'LOCAL • RELIABLE • PROFESSIONAL',
  heroHeadline: 'Keep Your Home Flowing & Warm',
  heroSupportingCopy: 'Professional plumbing, heating and gas engineering services for homes and landlords. Quality workmanship, clear communication and dependable local service.'
};

export const PLUMBING_SERVICES: ServiceItem[] = [
  {
    id: 'plumbing-pipe-repair',
    name: 'Plumbing Pipe Repair',
    category: 'plumbing',
    tagline: 'Fast, clean repairs for leaking, burst, or damaged water pipes.',
    description: 'Specialist diagnostics and pinpoint repairs for pinhole leaks, burst copper or push-fit pipes, low pressure, and noisy pipework throughout domestic properties.',
    features: ['Leak detection & diagnosis', 'Copper & plastic pipe repairs', 'Corrosion inspection', 'Minimal disruption guarantee'],
    icon: 'Wrench'
  },
  {
    id: 'shower-installation',
    name: 'Shower Installation',
    category: 'plumbing',
    tagline: 'Modern thermostatic, digital, and electric shower installations.',
    description: 'Expert installation of concealed valves, rainfall heads, digital mixers, and complete walk-in shower enclosures tailored for exceptional water pressure and durability.',
    features: ['Thermostatic mixers & rainfall heads', 'Walk-in wet room enclosures', 'Electric & power shower upgrades', 'Precision watertight sealing'],
    icon: 'ShowerHead'
  },
  {
    id: 'tap-installation',
    name: 'Tap Installation',
    category: 'plumbing',
    tagline: 'Kitchen, basin, and bath tap replacements and modernisations.',
    description: 'Fitting premium monobloc, mixer, wall-mounted, and waterfall taps for kitchens and bathrooms. Seamless replacements with clean isolation valves.',
    features: ['Kitchen mixer & instant hot taps', 'Basin mono & pillar taps', 'Freestanding bath taps & fillers', 'High & low pressure compatibility'],
    icon: 'Droplets'
  },
  {
    id: 'toilet-installation',
    name: 'Toilet Installation',
    category: 'plumbing',
    tagline: 'Close-coupled, back-to-wall, and concealed cistern installations.',
    description: 'Professional fitting and replacement of modern toilets, integrated vanity combinations, silent flush valves, and soil stack connections with zero mess.',
    features: ['Back-to-wall & concealed cisterns', 'Rimless hygienic pans & soft-close seats', 'Dual-flush efficiency upgrades', 'Leak-proof waste connections'],
    icon: 'Bath'
  },
  {
    id: 'repairs-maintenance',
    name: 'Plumbing & Heating Repairs & Maintenance',
    category: 'plumbing',
    tagline: 'Comprehensive maintenance to prevent costly system breakdowns.',
    description: 'Routine servicing and preventative maintenance for all domestic plumbing and central heating systems, radiator balancing, valve replacements, and minor faults.',
    features: ['Radiator bleeding & TRV upgrades', 'Central heating system flushes', 'Immersion & unvented cylinder checks', 'Water hammer & pressure adjustments'],
    icon: 'Settings'
  },
  {
    id: 'bathroom-installation',
    name: 'Bathroom Installation',
    category: 'plumbing',
    tagline: 'Complete bespoke bathroom, en-suite, and wet room renovations.',
    description: 'Turnkey bathroom transformations from initial plumbing layout to final sanitaryware, feature mirrors, bespoke tiling, and precision finish.',
    features: ['Full project management', 'Luxury walk-in wet rooms & baths', 'Feature tiling & LED illuminated mirrors', 'Custom vanity units & heated rails'],
    badge: 'Popular',
    icon: 'Sparkles'
  },
  {
    id: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    category: 'plumbing',
    tagline: 'Rapid response for urgent leaks, overflows, and plumbing faults.',
    description: 'Fast, calm assistance when urgent water leaks, burst pipes, or severe blockages threaten your home. Immediate action to isolate and repair.',
    features: ['Urgent leak isolation', 'Burst pipe repair', 'Overflow & drainage emergencies', 'Straightforward transparent rates'],
    isEmergency: true,
    badge: 'Priority Call',
    icon: 'AlertTriangle'
  }
];

export const GAS_HEATING_SERVICES: ServiceItem[] = [
  {
    id: 'boiler-servicing',
    name: 'Boiler Servicing',
    category: 'gas_heating',
    tagline: 'Annual safety, efficiency, and manufacturer warranty servicing.',
    description: 'Thorough multi-point Gas Safe boiler servicing to verify combustion efficiency, clean heat exchangers, test safety devices, and keep running costs low.',
    features: ['Flue gas combustion analysis', 'Heat exchanger & burner inspection', 'Safety device & pressure testing', 'Official service record stamp'],
    icon: 'Flame',
    badge: 'Gas Safe'
  },
  {
    id: 'boiler-breakdowns',
    name: 'Boiler Breakdowns',
    category: 'gas_heating',
    tagline: 'Prompt fault-finding and repairs for heating and hot water loss.',
    description: 'Quick diagnostics for error codes, pilot light failures, pump issues, ignition faults, and thermostat malfunctions to get your heating restored.',
    features: ['Component diagnostics & testing', 'Genuine manufacturer replacement parts', 'Pressure loss & leak repairs', 'Thermostat & programmer faults'],
    icon: 'Activity'
  },
  {
    id: 'boiler-installation',
    name: 'Boiler Installation',
    category: 'gas_heating',
    tagline: 'High-efficiency combi, system, and conventional boiler upgrades.',
    description: 'Gas Safe registered boiler replacements and new installations with high energy efficiency ratings, magnetic system filters, and warranty compliance.',
    features: ['A-rated energy efficiency boilers', 'Magnetic filter & chemical cleanse', 'Smart thermostat setup (Hive / Nest)', 'Gas Safe notification & register'],
    badge: 'Gas Safe',
    icon: 'Gauge'
  },
  {
    id: 'landlords-safety-certificates',
    name: 'Landlords Safety Certificates',
    category: 'gas_heating',
    tagline: 'Official CP12 Gas Safety Certificates for landlords & letting agents.',
    description: 'Comprehensive annual gas safety inspections of all gas appliances, pipework, and flues across rental properties in Derby with digital CP12 documentation.',
    features: ['Full CP12 certificate issued', 'Gas appliance & flue safety checks', 'Gas tightness testing', 'Direct tenant appointment coordination'],
    badge: 'Landlords CP12',
    icon: 'ShieldCheck'
  }
];

export const ALL_SERVICES = [...PLUMBING_SERVICES, ...GAS_HEATING_SERVICES];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Gas Safe Registered',
    description: 'Fully qualified and legally certified to carry out domestic gas and heating work with uncompromising safety standards.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Quality Workmanship',
    description: 'Every pipe, tile, valve, and fitting is executed with meticulous care, clean finishes, and durable materials that last.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Experienced & Reliable',
    description: 'Dependable local tradesman who arrives on time, communicates clearly, and treats your home with absolute respect.',
    icon: 'Clock'
  },
  {
    title: 'Local & Friendly',
    description: 'Proudly serving Derby and nearby communities with honest advice, personal accountability, and friendly service.',
    icon: 'MapPin'
  },
  {
    title: 'Customer Focused',
    description: 'Clear transparent quotes with no jargon, leaving your property spotless once the job is successfully completed.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Clean & Tidy Working',
    description: 'Protective floor coverings used on every job, leaving your home as clean and neat as when we arrived.',
    icon: 'Sparkles'
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'project-slate-wetroom',
    title: 'Minimalist Slate Wet Room & Rainfall Shower',
    category: 'Wet Rooms',
    location: 'Derby',
    description: 'Complete walk-in wet room transformation featuring contemporary grey slate wall cladding, sleek chrome thermostatic dual shower, recessed spotlighting, and seamless frameless glass enclosure.',
    highlights: ['Slate wall panelling', 'Dual thermostatic rainfall head', 'Recessed ceiling lighting', 'Low-profile wet room tray'],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'project-luxury-timber-vanity',
    title: 'Dark Luxury Bathroom Suite with Halo Mirror',
    category: 'Bathrooms',
    location: 'Derbyshire',
    description: 'High-end bathroom renovation combining rich dark timber vanity, countertop vessel basin, deep relaxation bath with black thermostatic shower rail, and illuminated circular LED mirror.',
    highlights: ['Circular backlit LED halo mirror', 'Dark walnut finish vanity', 'Deep immersion bath with glass screen', 'Wood-effect water-resistant flooring'],
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'project-yellow-hex-bath',
    title: 'Geometric Hexagon Tile Bath & Mustard Wall',
    category: 'Bathrooms',
    location: 'Derby',
    description: 'Bespoke bathroom installation pairing crisp white hexagonal tiling, polished chrome mixer taps, deep vanity storage, and vibrant architectural mustard wall styling.',
    highlights: ['Geometric hexagonal wall tiling', 'Anthracite double drawer vanity', 'Thermostatic over-bath shower', 'Contemporary oval mirror'],
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square'
  },
  {
    id: 'project-petrol-blue-brass',
    title: 'Teal Metro Brick Tiling with Brushed Brass Taps',
    category: 'Bathrooms',
    location: 'Derby',
    description: 'Stunning luxury bathroom makeover with deep teal glazed metro brick tilework, wall-mounted brushed gold/brass mixer taps, illuminated halo mirror, and fitted bath.',
    highlights: ['Brushed brass wall-mounted brassware', 'Deep blue glazed subway tiling', 'Backlit vanity mirror', 'Wall-hung ceramic basin shelf'],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'project-white-gloss-fitted',
    title: 'Integrated High-Gloss Vanity & WC Suite',
    category: 'Bathrooms',
    location: 'Derby',
    description: 'Space-maximising fitted furniture featuring seamless white gloss countertop, integrated basin, soft-close storage, concealed cistern WC, and water-resistant panelling.',
    highlights: ['Integrated WC & vanity furniture', 'Sparkle hygienic wall panelling', 'Modern chrome monobloc mixer', 'Double panel convector radiator install'],
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  },
  {
    id: 'project-modern-walkin-wetroom',
    title: 'Contemporary En-Suite Walk-In Shower Suite',
    category: 'Wet Rooms',
    location: 'Derby',
    description: 'Long modern en-suite featuring tall gloss storage cabinetry, rectangular backlit vanity mirror, chrome mixer tap, non-slip floor treatment, and full-length glass walk-in shower.',
    highlights: ['Full height gloss storage unit', 'Rectangular backlit LED mirror', 'Slimline shower screen', 'Contemporary basin unit'],
    imageUrl: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'project-boiler-central-heating',
    title: 'High-Efficiency Combi Boiler & Central Heating System',
    category: 'Heating',
    location: 'Derby',
    description: 'Gas Safe combi boiler installation featuring neat copper pipework, magnetic filter protection, digital room thermostat, and full radiator balancing.',
    highlights: ['Gas Safe certified install', 'System magnetic filtration', 'Smart programmable controls', 'Full pressure test & flush'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark T.',
    location: 'Allestree, Derby',
    service: 'Bathroom Installation',
    rating: 5,
    date: 'Recent Customer',
    verified: true,
    content: 'Jonny completed our full bathroom renovation and the quality of finish is exceptional. His attention to detail on the tiling and shower plumbing was second to none. Reliable, tidy, and a pleasure to have working in the house.'
  },
  {
    id: 'rev-2',
    author: 'Sarah P.',
    location: 'Mickleover, Derby',
    service: 'Boiler Servicing & Safety Check',
    rating: 5,
    date: 'Recent Customer',
    verified: true,
    content: 'Great service from Jonny. Carried out our annual Gas Safe boiler service and solved a persistent radiator heating issue that another engineer couldn’t fix. Clear communication and fair pricing.'
  },
  {
    id: 'rev-3',
    author: 'David H.',
    location: 'Derby Centre',
    service: 'Emergency Plumbing Repair',
    rating: 5,
    date: 'Recent Customer',
    verified: true,
    content: 'Had an urgent leaking pipe under the sink that was dripping through to the ceiling below. Jonny was quick to respond, diagnosed the issue straight away, and fixed it cleanly without any fuss. Highly recommended.'
  },
  {
    id: 'rev-4',
    author: 'Emma R.',
    location: 'Chellaston, Derby',
    service: 'Shower & Tap Installation',
    rating: 5,
    date: 'Recent Customer',
    verified: true,
    content: 'Jonny replaced our old electric shower with a new thermostatic mixer and fitted new kitchen taps. Everything works perfectly with great water pressure now. Very polite, clean, and knowledgeable.'
  },
  {
    id: 'rev-5',
    author: 'James W.',
    location: 'Derby Landlord',
    service: 'Landlord Gas Safety Certificates (CP12)',
    rating: 5,
    date: 'Recent Customer',
    verified: true,
    content: 'Jonny handles the annual Gas Safety certificates for my rental properties in Derby. He liaises politely with the tenants, is always punctual, and provides digital CP12 paperwork promptly.'
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  { name: 'Derby City Centre', postcode: 'DE1', priority: true },
  { name: 'Allestree', postcode: 'DE22', priority: true },
  { name: 'Mickleover', postcode: 'DE3', priority: true },
  { name: 'Littleover', postcode: 'DE23', priority: true },
  { name: 'Chaddesden', postcode: 'DE21', priority: true },
  { name: 'Chellaston', postcode: 'DE73', priority: true },
  { name: 'Oakwood', postcode: 'DE21', priority: true },
  { name: 'Alvaston', postcode: 'DE24', priority: true },
  { name: 'Spondon', postcode: 'DE21', priority: true },
  { name: 'Sinfin', postcode: 'DE24', priority: true },
  { name: 'Duffield', postcode: 'DE56', priority: false },
  { name: 'Belper', postcode: 'DE56', priority: false },
  { name: 'Burton upon Trent', postcode: 'DE14', priority: false },
  { name: 'Ashbourne', postcode: 'DE6', priority: false }
];
