import './App.css';
import CourseCard from './components/CourseCard/CourseCard';

function App() {

  const courses = [
    {
      id: 1,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe"
      },
      rating: 4.5,
      students: 934,
      modules: 5,
      duration: 5400
    },
    {
      id: 2,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Beginnner",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe"
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      finishedModules: 3,
      duration: 5400,
      isMyCource: true
    },
    {
      id: 3,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "Sara Parker"
      },
      rating: 4.1,
      students: 1234,
      modules: 5,
      finishedModules: 1,
      duration: 5400,
      isMyCource: true
    },
    {
      id: 4,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "Kate Cameron"
      },
      rating: 4.6,
      students: 934,
      modules: 5,
      duration: 5400
    },
    {
      id: 5,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "Kate Cameron"
      },
      rating: 4.8,
      students: 934,
      modules: 5,
      duration: 5400
    },
    {
      id: 6,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Beginner",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "Kate Cameron"
      },
      rating: 3.6,
      students: 934,
      modules: 5,
      duration: 5400
    },
    {
      id: 7,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Beginnner",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe"
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      finishedModules: 4,
      duration: 5400,
      isMyCource: true
    },
    {
      id: 8,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "Sara Parker"
      },
      rating: 4.1,
      students: 1234,
      modules: 5,
      finishedModules: 2,
      duration: 5400,
      isMyCource: true
    },
  ];
  
  const renderCourses = () => {
    return courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ));
  }

  return (
    <div className='list'>
      {renderCourses()}
    </div>
    
  );
}

export default App;
