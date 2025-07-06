import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Technology stacks with logos
  const techStacks = [
    {
      category: "Frontend Development",
      description: "Our experts can help with all your frontend development assignments using these modern frameworks and libraries.",
      technologies: [
        { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.png" },
        { name: "Vue", logo: "https://vuejs.org/images/logo.png" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
        { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" }
      ]
    },
    {
      category: "Backend Development",
      description: "Get expert assistance with server-side programming, APIs, and backend architecture.",
      technologies: [
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Express", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
        { name: "Django", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
        { name: "Flask", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
        { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
        { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { name: "Ruby on Rails", logo: "https://cdn.worldvectorlogo.com/logos/rails.svg" },
        { name: ".NET", logo: "https://cdn.worldvectorlogo.com/logos/dotnet.svg" }
      ]
    },
    {
      category: "Mobile Development",
      description: "Our mobile development experts can assist with native and cross-platform app development assignments.",
      technologies: [
        { name: "Kotlin", logo: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },
        { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
        { name: "Flutter", logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
        { name: "Swift", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
        { name: "Android", logo: "https://cdn.worldvectorlogo.com/logos/android-4.svg" },
        { name: "Xamarin", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Xamarin-logo.svg" }
      ]
    },
    {
      category: "Databases",
      description: "Get help with database design, queries, optimization, and data modeling for all major database systems.",
      technologies: [
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" },
        { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { name: "SQL Server", logo: "https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg" },
        { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Oracle", logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
        { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
        { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" },
        { name: "DynamoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png" }
      ]
    },
    {
      category: "Cloud Platforms",
      description: "Our cloud experts can help with deployments, infrastructure as code, and cloud-native application development.",
      technologies: [
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
        { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
        { name: "Heroku", logo: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg" },
        { name: "Digital Ocean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean-icon-1.svg" },
        { name: "Netlify", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" },
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png" }
      ]
    },
    {
      category: "DevOps & Tools",
      description: "Get assistance with CI/CD pipelines, containerization, and infrastructure automation.",
      technologies: [
        // { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
        // { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
        // { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
        // { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
        // { name: "GitHub Actions", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
        // { name: "Terraform", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
        // { name: "Ansible", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" }
        { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
        { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
        { name: "Jenkins", logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
        { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "GitHub Actions", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
        { name: "Terraform", logo: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
        { name: "Ansible", logo: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Our AI experts can help with machine learning models, neural networks, and data science assignments.",
      technologies: [
        { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
        { name: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Keras", logo: "https://keras.io/img/logo.png" },
        { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
        { name: "NLTK", logo: "https://miro.medium.com/max/592/1*YM2HXc7f4v02pZBEO8h-qw.png" },
        { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png" },
        { name: "NumPy", logo: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg" }
      ]
    },
    {
      category: "Data Science & Analytics",
      description: "Get help with data analysis, visualization, and statistical modeling for your assignments.",
      technologies: [
        { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
        { name: "R", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png" },
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
        { name: "SAS", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg" },
        { name: "SPSS", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/SPSS_logo.svg" },
        { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
        { name: "Seaborn", logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Work With</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Our experts are proficient in a wide range of technologies to help with your assignments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Technical Expertise"
            subtitle="Get professional help with assignments in these technologies"
          />

          <div className="mt-16">
            {techStacks.map((stack, stackIndex) => (
              <div key={stackIndex} className="mb-20 last:mb-0">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{stack.category}</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">{stack.description}</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                    >

                      <div className="h-16 flex items-center justify-center mb-4">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="max-h-16 max-w-[80px] object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://via.placeholder.com/80x60?text=${encodeURIComponent(tech.name)}`;
                          }}
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-center">{tech.name}</h4>
                      {/* <TechLogo name={tech.name} logo={tech.logo} />
                      <h4 className="text-lg font-medium text-center mt-3">{tech.name}</h4> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Technical Services"
            subtitle="Expert assistance for all your technical assignments"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Programming Assignments",
                description: "Get help with coding assignments in any programming language. Our experts can assist with algorithm implementation, data structures, and complex programming problems.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                title: "Web Development Projects",
                description: "From simple websites to complex web applications, our experts can help with frontend, backend, or full-stack development projects using modern frameworks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Mobile App Development",
                description: "Get assistance with native or cross-platform mobile app development for Android and iOS using Kotlin, Swift, React Native, or Flutter.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Database Design & SQL",
                description: "Our experts can help with database design, normalization, complex SQL queries, stored procedures, and database optimization.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
              {
                title: "Cloud & DevOps",
                description: "Get help with cloud deployments, infrastructure as code, CI/CD pipelines, containerization, and cloud-native application development.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              },
              {
                title: "AI & Machine Learning",
                description: "Our experts can assist with machine learning models, neural networks, deep learning, natural language processing, computer vision, and AI algorithm implementation.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Technical Assignment Help?</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Our experts are ready to assist you with any technical or academic challenge
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/get-quote" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </a>
              <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesPage;
