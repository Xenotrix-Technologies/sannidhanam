import { ServiceItem, MachineryItem, ProjectItem, MaterialItem, TestimonialItem, StatItem } from '../types';

export const COMPANY_INFO = {
  name: 'Sannidhanam Earth Movers',
  shortName: 'Sannidhanam',
  tagline: 'POWERING PROJECTS. MOVING THE EARTH.',
  subTagline: 'Trusted Heavy Machinery Hire, Excavation & Building Materials Supply across Thrissur and Central Kerala.',
  primaryPhone: '+91 9496697937',
  primaryPhoneRaw: '9496697937',
  secondaryPhone: '+91 9846882822',
  secondaryPhoneRaw: '9846882822',
  whatsappNumber: '919496697937',
  email: 'info@sannidhanamearthmovers.com',
  address: {
    room: 'Ground Floor, Room No. 3',
    building: 'KM Complex, SM Junction',
    city: 'Thrissur',
    state: 'Kerala',
    pincode: '680588',
    full: 'Ground Floor, Room No. 3, KM Complex, SM Junction, Thrissur, Kerala – 680588',
  },
  googleMapsUrl: 'https://maps.google.com/?q=KM+Complex+SM+Junction+Thrissur+Kerala+680588',
  workingHours: 'Open 7 Days a Week (6:00 AM - 9:00 PM)',
  operatingDays: 'Sunday through Monday (7 Days Operational)',
  stats: {
    experienceYears: 15,
    projectsCompleted: 1250,
    fleetSize: 22,
    satisfiedClients: 850,
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'earthmoving',
    title: 'Earthmoving Works',
    shortDesc: 'Comprehensive bulk earthmoving, cut-and-fill grading, and large-scale soil repositioning for development projects.',
    fullDesc: 'We execute high-capacity bulk earthmoving projects with modern heavy excavators, articulated tippers, and bulldozers. From rugged agricultural transformations to expansive commercial platforms, our operators ensure precise grade compliance and efficient soil relocation with minimal cycle times.',
    iconName: 'Tractor',
    image: '/services/earthmoving-works.jpg',
    badge: 'Core Specialty',
    applications: [
      'Commercial & industrial site development',
      'Cut and fill earth balancing',
      'Agricultural land conversion & terracing',
      'Embankment construction & slope stabilization'
    ],
    keyBenefits: [
      'High-tonnage daily throughput',
      'GPS-guided & precision grade checks',
      'Experienced operators adept with Kerala soil conditions',
      'Fuel-efficient, modern heavy hydraulic machinery'
    ],
    recommendedMachinery: ['Hitachi ZX210 Heavy Excavator', 'Komatsu D65EX Bulldozer', 'Multi-Axle Tipper Fleet']
  },
  {
    id: 'excavation',
    title: 'Precision Excavation',
    shortDesc: 'Deep trenching, utility pipeline channels, basement pits, and high-precision foundation earth extraction.',
    fullDesc: 'Equipped with versatile JCB backhoe loaders and specialized Hitachi mini-excavators, our excavation crews execute clean, accurate trenches and excavations even in confined residential plots, busy urban alleys, or rocky substrata.',
    iconName: 'Shovel',
    image: '/services/precision-excavation.jpg',
    badge: 'High Precision',
    applications: [
      'Utility trenching (water pipes, electrical conduit, fiber cables)',
      'Basement & underground tank excavation',
      'Septic tank pits & rainwater harvesting sumps',
      'Narrow boundary foundation footings'
    ],
    keyBenefits: [
      'Compact footprint for tight access gates',
      'Minimal disturbance to surrounding structures',
      'Laser-aligned trenching accuracy',
      'Clean spoil removal and backfilling options'
    ],
    recommendedMachinery: ['Hitachi EX70 Mini Excavator', 'JCB 3DX EcoMAX Backhoe Loader']
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing & Levelling',
    shortDesc: 'Complete removal of vegetation, wild brush, stubborn tree stumps, and boulders with full plot levelling.',
    fullDesc: 'Transform overgrown plots, neglected plantations, or rugged hillsides into clean, construction-ready terrain. We clear roots, boulders, and dense wild scrub efficiently, disposing of or redistributing organic debris and grading the ground perfectly.',
    iconName: 'Trees',
    image: '/services/land-clearing.jpg',
    badge: 'Popular',
    applications: [
      'Plot preparation for villa projects & layout subdivisions',
      'Rubber plantation & timber root uprooting',
      'Rocky terrain clearing & boulder displacement',
      'Uneven land terracing & step levelling'
    ],
    keyBenefits: [
      'Rapid clearing of dense vegetation & deep root balls',
      'Eliminates need for manual labour delays',
      'Uniform ground level ready for structural foundation',
      'On-site stone sorting and levelling'
    ],
    recommendedMachinery: ['Komatsu D65EX Bulldozer', 'JCB 3DX Backhoe Loader', 'Hitachi Heavy Excavator']
  },
  {
    id: 'site-preparation',
    title: 'Site Preparation & Grading',
    shortDesc: 'Engineered ground preparation, soil compaction, access ramp construction, and subgrade stabilization.',
    fullDesc: 'A flawless building begins with professional ground engineering. We sculpt site access roads, stabilize weak subgrades, compact soil to engineering density specifications, and construct perimeter drainage to prevent erosion during monsoon downpours.',
    iconName: 'Layers',
    image: '/services/site-preparation.jpg',
    badge: 'Engineered',
    applications: [
      'Subgrade preparation for warehouses & factories',
      'Temporary haul roads for heavy construction vehicles',
      'Perimeter swales and monsoon stormwater channels',
      'Building pad stabilization and stone packing'
    ],
    keyBenefits: [
      'Prevents post-construction foundation settlement',
      'All-weather site accessibility for material trucks',
      'Optimized natural drainage slopes',
      'Certified compaction readiness'
    ],
    recommendedMachinery: ['JCB 3DX Backhoe Loader', 'Hitachi ZX210 Excavator', 'Vibratory Soil Compactor']
  },
  {
    id: 'foundation-excavation',
    title: 'Foundation Excavation',
    shortDesc: 'Engineered foundation pits, isolated footings, combined raft foundations, and pile cap excavations.',
    fullDesc: 'We work directly with structural engineers and contractors to excavate according to architectural drawings. Our operators take care to avoid over-digging, maintain structural wall integrity, and extract hard rock with hydraulic breaker attachments when necessary.',
    iconName: 'Building2',
    image: '/services/foundation-excavation.jpg',
    badge: 'Structural',
    applications: [
      'Multi-storey building column footings',
      'Raft & mat foundation deep excavation',
      'Retaining wall footing trenches on slopes',
      'Basement parking subterranean pits'
    ],
    keyBenefits: [
      'Zero over-excavation to save expensive concrete',
      'Sharp, vertical trench walls and square corners',
      'Integrated rock breaker for hard granite strata',
      'Coordinated spoil haulage away from work zone'
    ],
    recommendedMachinery: ['Hitachi ZX210 with Rock Breaker', 'JCB 3DX Backhoe Loader']
  },
  {
    id: 'road-construction',
    title: 'Road Construction Support',
    shortDesc: 'Sub-base excavation, aggregate spreading, road camber grading, and shoulder clearing for road networks.',
    fullDesc: 'Providing specialized earthmoving and material handling machinery to road contractors, local panchayats, and infrastructure agencies. We support highway widening, village road formation, township internal streets, and industrial driveways.',
    iconName: 'Route',
    image: '/services/road-construction.jpg',
    badge: 'Infrastructure',
    applications: [
      'Highway widening & embankment earth filling',
      'Gravel road grading and camber shaping',
      'Aggregate and Wet Mix Macadam (WMM) spreading',
      'Roadside ditch formation and culvert trenches'
    ],
    keyBenefits: [
      'Consistent daily output meeting highway authority milestones',
      'Integrated supply of road metals and coarse aggregates',
      'High-mobility wheeled & tracked machinery',
      'Dependable 7-day-a-week operation'
    ],
    recommendedMachinery: ['Komatsu Bulldozer', 'JCB Backhoe Loader', 'High-Capacity Tipper Trucks']
  },
  {
    id: 'demolition',
    title: 'Building Demolition & Breaker Services',
    shortDesc: 'Controlled demolition of old residential, commercial concrete structures, rock fracturing, and debris removal.',
    fullDesc: 'Safe, controlled demolition services adhering to strict safety protocols. Utilizing heavy hydraulic rock breakers and pulverizer attachments, we dismantle reinforced concrete columns, brick masonry, slab roofs, and industrial structures with complete debris clearing.',
    iconName: 'Hammer',
    image: '/vehicles/rock-breaker.jpg',
    badge: 'Demolition',
    applications: [
      'Dismantling old houses and obsolete commercial shops',
      'Concrete slab breaking and foundation removal',
      'Quarry rock breaking & hard boulder cracking',
      'Site clearance and debris haulage to approved yards'
    ],
    keyBenefits: [
      'Safety-first methodology protecting adjacent properties',
      'High-impact hydraulic hammer minimizes job duration',
      'Comprehensive debris removal and site broom cleaning',
      'Metal rebar extraction and material salvaging support'
    ],
    recommendedMachinery: ['Hitachi ZX210 Hydraulic Excavator with Chisel Breaker', 'Dump Trucks']
  },
  {
    id: 'equipment-rental',
    title: 'Heavy Equipment Rental',
    shortDesc: 'Flexible dry and wet hire of well-maintained earthmovers, excavators, and JCBs with certified operators.',
    fullDesc: 'Rent the right machine for your job by the hour, day, week, or project contract. Every machine in our fleet undergoes rigorous maintenance checks before mobilization. Our experienced operators hold heavy machinery licenses and proven track records on challenging terrains.',
    iconName: 'Truck',
    image: '/vehicles/jcb-3dx.jpg',
    badge: 'Rental Fleet',
    applications: [
      'Hourly & daily hire for quick residential digging',
      'Long-term commercial project machinery leasing',
      'Backup machinery support for contractor peak loads',
      'Emergency mobilization for landslip or drainage clearance'
    ],
    keyBenefits: [
      'Transparent hourly and shift-based pricing',
      'Skilled, safety-certified operators included',
      'Zero downtime policy with rapid on-site field mechanics',
      'Available 7 days a week, 365 days a year'
    ],
    recommendedMachinery: ['Entire Fleet (JCB, Hitachi Excavators, Bulldozers, Tippers)']
  },
  {
    id: 'building-materials',
    title: 'Building Materials Supply',
    shortDesc: 'Direct site delivery of premium M-Sand, P-Sand, Crushed Metals, Boulder Stones, and Aggregate Mixes.',
    fullDesc: 'We supply high-grade, certified construction raw materials straight from approved quarries to your site. With our dedicated tipper fleet, we offer flexible delivery volumes (1, 2, 3, or 5 units) with guaranteed quality, clean grading, and prompt arrival.',
    iconName: 'Boxes',
    image: '/vehicles/tipper-truck.jpg',
    badge: 'Direct Supply',
    applications: [
      'R.C.C. concrete mixing & structural casting',
      'Stone masonry foundation and retaining wall construction',
      'Interior and exterior wall plastering',
      'Flooring subgrade bedding and paver installation'
    ],
    keyBenefits: [
      'Strict quality grading free of silt and organic impurities',
      'Flexible unit delivery options (1 to 5 units per load)',
      'Direct quarry-to-site pricing without middlemen markups',
      'Same-day and scheduled delivery slots across Thrissur'
    ],
    recommendedMachinery: ['16-Ton Multi-Axle Tippers', 'Mini Dumpers for tight access']
  }
];

export const MACHINERY_DATA: MachineryItem[] = [
  {
    id: 'jcb-3dx',
    name: 'JCB Backhoe Loader',
    model: '3DX EcoMAX Super',
    category: 'backhoe',
    tagline: 'The Ultimate Versatile Workhorse for Every Construction Site',
    description: 'The industry-standard backhoe loader designed for multi-functional agility. Exceptional digging depth, robust loading capacity, and high road mobility make it ideal for site clearing, basement digs, pipe trenching, and gravel handling.',
    image: '/vehicles/jcb-3dx.jpg',
    available: true,
    rentalTypes: ['Hourly Hire', 'Daily Shift', 'Weekly Contract', 'Monthly Project Lease'],
    specs: {
      operatingWeight: '7,460 kg',
      enginePower: '74 HP @ 2200 RPM',
      bucketCapacity: 'Loader 1.1 m³ / Excavator 0.26 m³',
      maxDigDepth: '4.77 meters (15.6 ft)',
      payloadCapacity: '1,850 kg payload',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'EcoMAX fuel-efficient turbocharged engine',
      'Heavy-duty stabilizer legs for maximum dig balance',
      'High breakout force for dense clay & laterite soil',
      'Road legal travel speed up to 36 km/h for swift deployment'
    ]
  },
  {
    id: 'hitachi-mini',
    name: 'Hitachi Mini Excavator',
    model: 'EX70 / ZX75 Urban Series',
    category: 'excavator',
    tagline: 'Compact Power for Confined Spaces & Residential Plots',
    description: 'Specially engineered for residential sites, congested narrow roads, and precision foundation trenches where large excavators cannot enter. Rubber track options prevent damage to paved driveways while delivering formidable hydraulic digging power.',
    image: '/vehicles/hitachi-mini.jpg',
    available: true,
    rentalTypes: ['Hourly Hire', 'Daily Shift', 'Custom Site Scope'],
    specs: {
      operatingWeight: '6,800 kg',
      enginePower: '55 HP @ 2000 RPM',
      bucketCapacity: '0.28 m³',
      maxDigDepth: '4.15 meters',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'Zero or ultra-compact tail swing for working against walls',
      'Low ground pressure tracks protecting existing lawns/slabs',
      'High-precision joystick hydraulics for delicate utility work',
      'Operates seamlessly inside narrow house compound gates'
    ]
  },
  {
    id: 'hitachi-heavy',
    name: 'Hitachi Heavy Excavator',
    model: 'ZX200 / ZX210 Heavy Duty',
    category: 'excavator',
    tagline: 'High-Output Earthmoving for Major Commercial & Infrastructure Projects',
    description: 'Built for massive earthmoving, quarry work, deep structural excavation, and extensive site levelling. Features reinforced heavy-duty boom arms and high-pressure hydraulic pumps that effortlessly tear through rocky strata.',
    image: '/vehicles/hitachi-heavy.jpg',
    available: true,
    rentalTypes: ['Daily Shift', 'Weekly Contract', 'Long-term Infrastructure Lease'],
    specs: {
      operatingWeight: '20,500 kg (20.5 Tons)',
      enginePower: '148 HP @ 2000 RPM',
      bucketCapacity: '1.02 m³ Heavy Duty Rock Bucket',
      maxDigDepth: '6.67 meters (21.9 ft)',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'Twin hydraulic pumps for instantaneous cycle times',
      'Reinforced undercarriage for rugged rocky terrain',
      'Quick-coupler ready for hydraulic rock breakers',
      'Heavy-duty counterweight for maximum lifting leverage'
    ]
  },
  {
    id: 'komatsu-dozer',
    name: 'Heavy Bulldozer',
    model: 'Komatsu D65EX Power Bulldozer',
    category: 'bulldozer',
    tagline: 'Unmatched Pushing Force for Bulk Levelling & Land Clearing',
    description: 'Engineered for clearing thick vegetative overgrowth, moving hundreds of cubic meters of earth per hour, and grading expansive areas. Equipped with a rugged Semi-U blade and hydraulic ripper to break compacted soil.',
    image: '/vehicles/komatsu-dozer.jpg',
    available: true,
    rentalTypes: ['Daily Shift', 'Weekly Contract', 'Bulk Land Development'],
    specs: {
      operatingWeight: '20,800 kg',
      enginePower: '205 HP @ 1950 RPM',
      bladeCapacity: '4.3 m³ Semi-U Blade',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'Hydrostatic steering for smooth, continuous power turns',
      'Heavy-duty multi-shank rear ripper for hard ground',
      'Wide track shoes providing exceptional traction on slopes',
      'High-capacity blade moves massive earth volumes per pass'
    ]
  },
  {
    id: 'hydraulic-breaker',
    name: 'Hydraulic Rock Breaker Unit',
    model: 'Soosan / Montabert Heavy Chisel Breaker',
    category: 'breaker',
    tagline: 'Superior Impact Energy for Hard Rock & Reinforced Concrete',
    description: 'Mounted onto our 20-ton Hitachi excavators, this industrial-grade hydraulic hammer fractures natural granite boulders, concrete foundations, and old bridges with devastating efficiency.',
    image: '/vehicles/rock-breaker.jpg',
    available: true,
    rentalTypes: ['Hourly Hire', 'Daily Demolition Shift'],
    specs: {
      operatingWeight: '1,800 kg hammer assembly',
      enginePower: 'Hydraulic flow driven (150-200 L/min)',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'High-frequency piston impact (400 - 800 BPM)',
      'Heat-treated alloy steel moil chisel points',
      'Vibration dampening housing protecting excavator arm',
      'Safe, controlled demolition in close proximity to structures'
    ]
  },
  {
    id: 'tipper-fleet',
    name: 'Multi-Axle Tipper Trucks',
    model: 'Tata / BharatBenz Heavy Tipper (16T & 25T)',
    category: 'tipper',
    tagline: 'Prompt Transport of Building Materials & Spoil Haulage',
    description: 'Dedicated fleet of heavy-duty tippers and mini dump trucks designed to deliver building aggregates, M-Sand, and boulder stones directly to your site, or clear excavated muck away from site without bottlenecking excavation.',
    image: '/vehicles/tipper-truck.jpg',
    available: true,
    rentalTypes: ['Per Load Delivery', 'Daily Truck Hire', 'Shift Basis'],
    specs: {
      operatingWeight: '16,000 kg – 28,000 kg GVW',
      enginePower: '180 HP – 280 HP Heavy Turbo',
      payloadCapacity: '10 to 18 Metric Tons / 1 to 5 Units',
      operatorType: 'Certified Operator Included'
    },
    features: [
      'High-angle hydraulic tipping for rapid clean discharge',
      'Heavy steel reinforced tub resists rock drop impact',
      'GPS tracked for real-time dispatch updates',
      'Compact mini-tippers available for narrow Kerala residential lanes'
    ]
  }
];

export const BUILDING_MATERIALS: MaterialItem[] = [
  {
    id: 'rocks',
    name: 'Rocks / Boulder Stones',
    category: 'Foundation Stone',
    description: 'High-density natural hard granite quarry stones for solid basement foundations, retaining walls, and slope protection.',
    image: '/materials/rocks.jpg',
    icon: '🪨',
    applications: 'Foundation masonry, boundary retaining walls, well-lining, and revetments.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  },
  {
    id: 'crushed-metals',
    name: 'Crushed Metals / Coarse Aggregates',
    category: 'Concrete Aggregate (20mm / 40mm)',
    description: 'Machine-crushed angular blue granite metal offering superior interlocking strength for structural R.C.C. beams, slabs, and columns.',
    image: '/materials/crushed-metals.jpg',
    icon: '⚙️',
    applications: 'Roof slabs, beams, bridge decks, heavy industrial concrete floors, and road WMM.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  },
  {
    id: 'baby-metals',
    name: 'Baby Metals / Fine Aggregates (12mm / 6mm)',
    category: 'Fine Aggregate',
    description: 'Precisely screened small-size angular aggregates for specialized thin-section concrete elements, hollow blocks, and lintels.',
    image: '/materials/baby-metals.jpg',
    icon: '🔩',
    applications: 'Precast concrete, lintels, sunshades, interlocking paver base, and drainage gravel.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  },
  {
    id: 'm-sand',
    name: 'M-Sand (Manufactured Sand)',
    category: 'Concrete Sand',
    description: 'Double-washed, cube-shaped manufactured sand engineered to replace river sand for high-strength concrete works with zero silt.',
    image: '/materials/m-sand.jpg',
    icon: '🏖️',
    applications: 'Ready-mix concrete, brick laying mortar, column casting, and structural footings.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  },
  {
    id: 'p-sand',
    name: 'P-Sand (Plastering Sand)',
    category: 'Finishing Sand',
    description: 'Micro-filtered super fine sand providing an exceptionally smooth, crack-free finish for wall and ceiling plastering.',
    image: '/materials/p-sand.jpg',
    icon: '✨',
    applications: 'Internal wall plastering, exterior facade plastering, and architectural moldings.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  },
  {
    id: 'slurry',
    name: 'Slurry / Fine Material Mixes',
    category: 'Specialized Fill',
    description: 'Consistent fine material mix designed for specialized soil compaction, pipe bedding, and agricultural soil balancing.',
    image: '/materials/slurry.jpg',
    icon: '💧',
    applications: 'Utility pipe bedding, specialized sub-fill, brick manufacture, and landscape backfilling.',
    deliveryUnits: ['1 Unit', '2 Units', '3 Units', '5 Units']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Commercial Complex Deep Basement Excavation',
    category: 'Excavation',
    location: 'SM Junction, Thrissur, Kerala',
    duration: '22 Days',
    image: '/services/earthmoving-works.jpg',
    scope: 'Excavation of 6,800 cubic meters of earth and laterite stone for a two-level underground parking basement. Utilized dual Hitachi excavators and five tippers for continuous spoil removal without traffic disruptions.',
    machineryUsed: ['Hitachi ZX210 Heavy Excavator', 'JCB 3DX Backhoe', 'Multi-Axle Tippers'],
    clientType: 'Commercial Developer'
  },
  {
    id: 'proj-2',
    title: '5-Acre Gated Residential Layout Land Clearing',
    category: 'Land Clearing',
    location: 'Pazhayannur, Thrissur',
    duration: '14 Days',
    image: '/vehicles/komatsu-dozer.jpg',
    scope: 'Complete jungle clearing, extraction of over 180 rubber tree root-balls, leveling of undulating terrain, and formation of 30-foot central layout access road with proper stormwater grading.',
    machineryUsed: ['Komatsu D65EX Bulldozer', 'JCB 3DX Backhoe Loader'],
    clientType: 'Infrastructure Project'
  },
  {
    id: 'proj-3',
    title: 'Bridge Approach & Embankment Earthmoving',
    category: 'Road Support',
    location: 'Wadakkanchery Highway Stretch, Thrissur',
    duration: '35 Days',
    image: '/services/road-construction.jpg',
    scope: 'Bulk earth filling, embankment compaction, and sub-base aggregate grading for a 1.2 km 4-lane approach road. Supplied over 450 units of crushed metals and gravel with tight daily delivery schedules.',
    machineryUsed: ['Hitachi ZX210', 'Bulldozer', 'High-Capacity Tipper Fleet'],
    clientType: 'Infrastructure Project'
  },
  {
    id: 'proj-4',
    title: 'Old Factory Structure Controlled Demolition & Clearing',
    category: 'Demolition',
    location: 'Ollur Industrial Zone, Thrissur',
    duration: '10 Days',
    image: '/vehicles/rock-breaker.jpg',
    scope: 'Demolition of heavy reinforced concrete warehouse framework and machine beds using hydraulic rock breaker. Crushed and cleared 1,400 tons of debris within 10 days with complete dust suppression measures.',
    machineryUsed: ['Hitachi ZX210 with Heavy Rock Breaker', 'JCB 3DX', 'Tipper Trucks'],
    clientType: 'Industrial Park'
  },
  {
    id: 'proj-5',
    title: 'Luxury Hillside Villa Foundation & Retaining Wall Prep',
    category: 'Foundation',
    location: 'Chelakkara, Thrissur',
    duration: '8 Days',
    image: '/vehicles/hitachi-mini.jpg',
    scope: 'Stepped foundation excavation on an inclined residential plot. Utilized Hitachi mini-excavator to preserve surrounding trees while digging 42 isolated footings and delivering 80 units of boulder rocks for retaining walls.',
    machineryUsed: ['Hitachi Mini Excavator EX70', 'Mini Tipper'],
    clientType: 'Residential Construction'
  },
  {
    id: 'proj-6',
    title: 'Mega Hospital Facility Bulk Earthwork & Materials Supply',
    category: 'Materials',
    location: 'Thrissur City Outskirts',
    duration: '45 Days',
    image: '/services/site-preparation.jpg',
    scope: 'Complete site grading, cut-and-fill soil balancing, and end-to-end supply of 1,200 units of M-Sand, 20mm aggregates, and boulder stones directly from certified quarries.',
    machineryUsed: ['Hitachi ZX210', 'JCB 3DX EcoMAX', 'Full Tipper Fleet'],
    clientType: 'Commercial Developer'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'K. Rajendran',
    role: 'Chief Site Engineer',
    project: 'Sobha Heights Commercial Complex',
    location: 'Thrissur',
    quote: 'Sannidhanam Earth Movers mobilized their Hitachi heavy excavators within 4 hours of our call. Their operators are exceptionally skilled—not a single centimetre of over-digging on our basement footings. Highly reliable team.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Thomas Mathew',
    role: 'Managing Partner',
    project: 'Hillview Developers',
    location: 'Chelakkara',
    quote: 'Being operational 7 days a week is a massive game-changer. When monsoon deadlines were approaching, their JCB and tippers worked uninterrupted over the weekend to finish our road sub-base. True professionals.',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Suresh Menon',
    role: 'Independent Residential Builder',
    project: 'Private Villa Projects',
    location: 'Pazhayannur, Thrissur',
    quote: 'From getting the mini excavator into tight residential gates to supplying top-grade washed M-Sand and boulder stones, Sannidhanam handles everything under one roof. Zero middlemen, great rates.',
    rating: 5
  },
  {
    id: 'test-4',
    author: 'Vinod V. Nair',
    role: 'Civil Infrastructure Contractor',
    project: 'PWD Road Widening Project',
    location: 'Wadakkanchery',
    quote: 'Their machinery is in pristine mechanical condition. We hired their heavy bulldozer and two excavators for 30 consecutive days without a single breakdown or delay. Transparent billing and dedicated support.',
    rating: 5
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'exp',
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Trusted earthmoving and excavation legacy across Kerala'
  },
  {
    id: 'projects',
    value: 1250,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Commercial, infrastructure, and residential milestones'
  },
  {
    id: 'fleet',
    value: 22,
    suffix: '+',
    label: 'Heavy Machinery Fleet',
    description: 'Modern JCBs, excavators, dozers, and tipper units'
  },
  {
    id: 'support',
    value: 7,
    suffix: '/7',
    label: 'Days Operation',
    description: 'Operational all 7 days a week with zero project stoppage'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Zap',
    title: 'Fast On-Site Deployment',
    desc: 'Our machines are prepped, fueled, and ready to mobilize quickly to your job site across Thrissur and neighboring districts without costly waiting periods.'
  },
  {
    icon: 'Calendar',
    title: 'Operational 7 Days a Week',
    desc: 'Sunday to Monday, rain or shine. Construction projects run on strict deadlines, so our machinery and operators remain available every single day.'
  },
  {
    icon: 'Wrench',
    title: 'Modern, Meticulously Maintained Fleet',
    desc: 'Routine daily maintenance, hydraulic checks, and on-site mobile service mechanics prevent breakdowns and eliminate expensive project downtime.'
  },
  {
    icon: 'UserCheck',
    title: 'Experienced & Licensed Operators',
    desc: 'Our operators have over a decade of real site experience dealing with challenging slopes, rocky soil, tight boundaries, and wet Kerala monsoon conditions.'
  },
  {
    icon: 'PackageCheck',
    title: 'End-to-End Machines & Materials Supply',
    desc: 'A single point of contact for earthmoving machinery hire and direct quarry supply of M-Sand, Aggregates, and Rocks. Saves time and eliminates coordination headaches.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Transparent, Direct Pricing',
    desc: 'Direct owner rates with zero broker commissions. Clear hourly, daily shift, or lump-sum contract pricing with itemized logging and verified fuel terms.'
  }
];

