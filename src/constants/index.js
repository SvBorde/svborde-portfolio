import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/Project-3.png";

export const HERO_CONTENT = `I am a Result-oriented professional with a demonstrated ability in driving successful project delivery through expertise in development,
security, and data analysis. Skilled in leading cross-functional teams, enhancing system security, and mentoring junior professionals to
cultivate a culture of continuous improvement and collaboration. Strong communicator and problem solver, consistently delivering
results under tight deadlines in complex financial environments.`;

export const ABOUT_TEXT = `Result-oriented professional with a demonstrated ability in driving successful project delivery through expertise in development,
security, and data analysis. Skilled in leading cross-functional teams, enhancing system security, and mentoring junior professionals to
cultivate a culture of continuous improvement and collaboration. Strong communicator and problem solver, consistently delivering
results under tight deadlines in complex financial environments.`;

export const EXPERIENCES = [
  {
    year: "July 2022 - Present",
    role: "Associate Consultant",
    company: "Oracle Financial Software Services",
    description: `Developed and contributed to the development of a transaction mediator platform for clients and SWIFT, improving functionality and efficiency using Java, SQL, and Struts framework. As Consulting Security Specialist, ensured safety and compliance of team release, safeguarding the integrity of the platform. Coached and mentored colleagues, and supported them towards creating an effective team to work within. Demonstrating a commitment to excellence, I proactively delivered effective solutions through proactive problem-solving. I also conducted research and presented innovative strategies for continuous improvement, driving forward-thinking enhancements in the platform's development.`,
    technologies: ["Javascript", "MySQL", "Java", "Apache-Struts", "AutoSys"],
  },
  {
    year: "Nov 2021 - June 2022",
    role: "Project Intern",
    company: "Prescient Technologies",
    description: `I proposed and designed a deep learning-based solution by developing and testing a novel 3D Generative Adversarial Network (GAN) model to generate engineering part models using Python and TensorFlow. The accuracy of the model is significantly improved from 51.8% in the client's existing Variational Autoencoder (VAE) to a new high of 73.6%.`,
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Kaggle","Open3D"],
  },
];

export const PROJECTS = [
  {
    title: "Client Management CRUD Application",
    image: project1,
    description:
      "A full-stack CRUD application for managing client records with features to create, read, update, and delete entries. The application includes a search functionality by name, email, and job description. The project focuses on implementing best practices and industry standards to ensure a robust and maintainable solution.",
    technologies: ["React.js", "Tailwind CSS", "Express", "Node.js", "PostgreSQL","Axios"],
  },
  {
    title: "Interactive AI Music Generator",
    image: project2,
    description:
      "A web-based application powered by an RNN-LSTM music generation model, designed to create music based on user-defined parameters like tempo and genre. The application features an intuitive Streamlit frontend, allowing users to generate and download music in MIDI or audio formats. It also includes dynamic visualizations showcasing the model's training process, such as loss curves and generated musical patterns, enhancing user understanding and engagement.",
    technologies: ["RNN-LSTM", "Streamlit", "Matplotlib/Plotly", "Firebase"],
  },
  {
    title: "SQL Dashboard for Analytics",
    image: project3,
    description:
      "This project involves cleaning and transforming a dataset into a relational database, followed by writing custom SQL queries to extract valuable insights. Using Looker, an interactive dashboard is created to visualize the data and allow for dynamic querying. The dashboard is then embedded onto a website and hosted, providing users with an interactive way to explore the data and analytics.",
    technologies: ["MySQL", "Looker", "HTML/CSS", "Git"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India - 411028",
  phoneNo: "+91 9307096051 ",
  email: "shantanuvborde@gmail.com",
};
