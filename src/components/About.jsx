import React from 'react'

const About = () => {
  return (
    <div
     name="about"
     className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-20">
            Hello there! 👋 I am a passionate and results-driven Full Stack Developer with 8 months of hands-on experience at Truminds Software Systems in Gurugram. I thrive in dynamic environments and enjoy taking on new challenges that push my technical skills to new heights.

            🔧 Skills 🔧

            🚀 Frontend: React JS
            🛠 Backend: Node JS, Spring Boot
            ☕️ Programming Languages: Java
            🐳 Containers: Docker
            📁 Version Control: Git
            🛢️ Databases: SQL, MongoDB
            </p>

            <br />

            <p className="text-xl">
            Developed and maintained scalable and efficient web applications using React JS for the frontend and Node JS and Spring Boot for the backend.
            Implemented robust and secure RESTful APIs to enhance system functionality.
            Utilized Docker for containerization, ensuring seamless deployment and scalability.
            Collaborated with cross-functional teams to deliver high-quality software solutions.
            🎓 Education 🎓

            🎓 B.Tech in Computer Science | Indian Institute of Technology (IIT), Delhi 
                Secured AIR456 rank in JEE ADVANCE Examination.
            </p>
        </div>
    </div>
  )
}

export default About