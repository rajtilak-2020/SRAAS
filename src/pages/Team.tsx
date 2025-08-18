import { Github, Linkedin, Mail, User } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  linkedin?: string;
  email?: string;
  github?: string;
};

const teamMembers: TeamMember[] = [
    {
    name: 'Anshuman Pal',
    role: 'Founder and Team Lead',
    bio: ' My passion for uncovering insights from data drives me to master tools like Python, SQL, and Tableau, while exploring machine learning algorithms like regression and clustering. Through coursework and projects, I’m building skills in data visualization and predictive modeling.',
    image: '/anshuman.jpg',
    linkedin: 'https://www.linkedin.com/in/anshuman-pal-42042b326',
    email: 'mailto:palanshuman21@gmail.com',
    github: 'https://github.com/Anshu2005-ap',
  },
  {
    name: 'Satya Sarthak Manohari',
    role: 'Co-Founder & Pitch Lead.',
    bio: ' Passionate about technology and innovation, I am eager to explore the world of engineering and contribute to cutting-edge advancements.',
    image: '/satya.jpg',
    linkedin: 'http://www.linkedin.com/in/satya-sarthak-manohari-b2a609297',
    email: 'mailto:manoharisatyasarthak@gmail.com',
    github: 'https://github.com/Satya37x1112',
  },
  {
    name: 'Gyana Ranjan Sahoo',
    role: 'Co-Founder & Pitch Lead.',
    bio: 'Driving strategy, execution, and presenting our vision',
    image: '/gyana.png',
    linkedin: 'https://www.linkedin.com/in/gyana-ranjan-sahoo-29224733b',
    email: 'mailto:granjansahoo241@gmail.com',
    github: '#',
  },

  {
    name: 'Suryakanta Sahoo',
    role: 'Product Designer',
    bio: 'Developing IoT solutions and integrating hardware with software systems.',
    image: '/surya.jpg',
    linkedin: 'http://www.linkedin.com/in/suryakant-sahoo-2abb6332a',
    email: 'mailto:surya1206sai@gmail.com',
    github: 'https://github.com/kenshin-3050',
  },
  {
    name: 'K Rajtilak',
    role: 'Project Manager & Developer',
    bio: 'Conducting agricultural research and developing innovative farming solutions.',
    image: '/raj.jpg',
    linkedin: 'www.linkedin.com/in/krajtilak2020',
    email: 'mailto:rajtilak1062020@gmail.com',
    github: 'https://github.com/rajtilak-2020',
  },
];

const Team = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            The passionate minds behind SRAAS, dedicated to revolutionizing agriculture through technology
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-full">
                        <User className="h-16 w-16 text-white" aria-label="Profile placeholder" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin || '#'}
                      aria-label="LinkedIn"
                      className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href={member.email || '#'}
                      aria-label="Email"
                      className="bg-red-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-red-600" />
                    </a>
                    <a
                      href={member.github || '#'}
                      aria-label="GitHub"
                      className="bg-gray-300 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-black" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SRAAS was born from a shared vision among five passionate technologists who witnessed 
                the challenges faced by farming communities in rural areas. Coming from diverse 
                backgrounds in AI, software development, IoT, and agricultural research, we united 
                with a common goal.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team combines deep technical expertise with genuine understanding of agricultural 
                needs. We've spent countless hours in the field, talking to farmers, understanding 
                their pain points, and developing solutions that truly make a difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, SRAAS represents our commitment to bridging the gap between advanced technology 
                and traditional farming practices, creating a sustainable future for agriculture.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that drive our mission and guide our decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing the boundaries of agricultural technology to create breakthrough solutions.',
                icon: '🚀',
              },
              {
                title: 'Accessibility',
                description: 'Making advanced farming technology accessible and affordable for farmers of all scales.',
                icon: '🤝',
              },
              {
                title: 'Sustainability',
                description: 'Promoting environmentally responsible farming practices for a sustainable future.',
                icon: '🌱',
              },
              {
                title: 'Community',
                description: 'Building strong connections within farming communities to share knowledge and support.',
                icon: '👥',
              },
              {
                title: 'Quality',
                description: 'Delivering reliable, accurate, and high-quality solutions that farmers can trust.',
                icon: '⭐',
              },
              {
                title: 'Impact',
                description: 'Creating measurable positive impact on farmers\' lives and agricultural productivity.',
                icon: '📈',
              },
            ].map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Team;