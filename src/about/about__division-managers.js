import AlessandroDatti from './assets/people/AlessandroDatti.png';
import AlessandroDatti2x from './assets/people/AlessandroDatti2x.png';
import AlessandroDatti3x from './assets/people/AlessandroDatti3x.png';
import BrettLarsen from './assets/people/BrettLarsen.png';
import BrettLarsen2x from './assets/people/BrettLarsen2x.png';
import BrettLarsen3x from './assets/people/BrettLarsen3x.png';
import KinChan from './assets/people/KinChan.png';
import KinChan2x from './assets/people/KinChan2x.png';
import KinChan3x from './assets/people/KinChan3x.png';
import MonicaHasegan from './assets/people/MonicaHasegan.png';
import MonicaHasegan2x from './assets/people/MonicaHasegan2x.png';
import MonicaHasegan3x from './assets/people/MonicaHasegan3x.png';

const divisionManagers = [
  {
    description: `Brett Larsen has over 15 years experience in mass
    spectrometry and he has been managing the Proteomics facility since 2004.
    He is an expert in quantitative proteomics, post-translational modifications
    and data analysis. He is responsible for equipment oversight, technology
    development, and user training. As the manager, Brett works with users
    from project inception to project completion.`,
    email: 'larsen@lunenfeld.ca',
    images: [
      BrettLarsen,
      BrettLarsen2x,
      BrettLarsen3x,
    ],
    name: 'Brett Larsen',
    phone: '416-586-4800 x 2702',
    title: 'Proteomics Manager',
  },
  {
    description: `Dr. Alessandro Datti supervises and coordinates the
    scientific operations of the High-Throughput Screening facility, and
    serves as a senior Lecturer of Biochemistry at the University of
    Perugia (Italy). His main research expertise and competencies are
    dedicated to the strategic design, development and validation of
    biological/biochemical assays for applications in high-throughput,
    robot-assisted formats aimed at identifying molecular entities with
    biological or pharmacological properties.`,
    email: 'datti@lunenfeld.ca',
    images: [
      AlessandroDatti,
      AlessandroDatti2x,
      AlessandroDatti3x,
    ],
    name: 'Alessandro Datti',
    phone: '416-586-4800 X 4732',
    title: 'High-Throughput Screening Manager',
  },
  {
    description: `Dr. Monica Hasegan is in charge of the high-resolution
    and super-resolution optical microscopes within the NBCC and is
    the manager of the High-Content Screening facility. With a PhD
    in Physics, she has a strong background in instrumentation, advanced
    imaging, data processing and analysis (including denoising algorithms
    and automation of high-throughput applications), high performance
    computing on cluster of computers and data management. She assists
    users with microscopy training, as well as standard and custom-made
    image analyses.`,
    email: 'hasegan@lunenfeld.ca',
    images: [
      MonicaHasegan,
      MonicaHasegan2x,
      MonicaHasegan3x,
    ],
    name: 'Monica Hasegan',
    phone: '416-586-4800 x 2258',
    title: 'High-Content Screening and High-Resolution Imaging Manager',
  },
  {
    description: `Kin Chan (MSc) has worked on high-throughput data screening
    platforms for more than fifteen years and has managed both microarray and
    sequencing facilities. He has in-depth technical and scientific knowledge
    of genomics with a focus on transcriptomics profiling. His current focus
    is to translate scientific finding to clinical use by working with research
    investigators, physicians and clinical labs.`,
    email: 'kin@lunenfeld.ca',
    images: [
      KinChan,
      KinChan2x,
      KinChan3x,
    ],
    name: 'Kin Chan',
    phone: '416-586-4800 x 6720',
    title: 'Next-Generation Sequencing Manager',
  },
];

export default divisionManagers;
