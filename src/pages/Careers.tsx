import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Users,
  TrendingUp,
  Zap,
  Coffee,
  Award,
  Laptop,
  ArrowRight
} from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family',
    },
    {
      icon: Laptop,
      title: 'Remote Work',
      description: 'Flexible work-from-home options',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear paths for advancement and skill development',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous PTO',
    },
    {
      icon: Award,
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented, passionate people',
    },
  ];

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies',
      requirements: [
        '5+ years of full-stack development',
        'Expert in React and Node.js',
        'Experience with AWS/Azure',
        'Strong problem-solving skills',
      ],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Create beautiful mobile experiences for iOS and Android platforms',
      requirements: [
        '3+ years mobile development',
        'React Native or Flutter experience',
        'Published apps in App Store/Play Store',
        'Strong UI/UX sensibility',
      ],
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Design intuitive interfaces that users love',
      requirements: [
        '4+ years UI/UX design',
        'Expert in Figma/Adobe XD',
        'Strong portfolio',
        'User research experience',
      ],
      gradient: 'from-orange-500 to-red-400',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines',
      requirements: [
        '4+ years DevOps experience',
        'Kubernetes & Docker expertise',
        'AWS/GCP/Azure proficiency',
        'Automation mindset',
      ],
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Drive product strategy and work with cross-functional teams',
      requirements: [
        '5+ years product management',
        'Technical background',
        'Strong analytical skills',
        'Excellent communication',
      ],
      gradient: 'from-cyan-500 to-blue-400',
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote / Boston',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Develop cutting-edge AI and machine learning solutions',
      requirements: [
        '3+ years ML experience',
        'Python, TensorFlow, PyTorch',
        'Strong math background',
        'Published research (bonus)',
      ],
      gradient: 'from-indigo-500 to-purple-400',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new ideas and push boundaries',
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve great things',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything',
    },
    {
      title: 'Growth',
      description: 'We invest in personal and professional development',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with passionate, talented people
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Why Work With Us
              </span>
            </h2>
            <p className="text-xl text-gray-600">Amazing benefits and perks await you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center border-2 border-blue-100 hover:border-blue-300 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {value.title}
                </div>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Find your perfect role</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${job.gradient} text-white text-sm font-semibold rounded-full mb-4`}>
                  {job.department}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">{job.title}</h3>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start space-x-2 text-gray-600 text-sm">
                        <Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-4 bg-gradient-to-r ${job.gradient} text-white rounded-xl font-semibold shadow-lg flex items-center justify-center space-x-2 group`}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Don't See a Perfect Fit?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/30 inline-flex items-center space-x-2"
              >
                <span>Send General Application</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
