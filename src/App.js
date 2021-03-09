import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseTable from "./components/course-table/course-table";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/edit" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;