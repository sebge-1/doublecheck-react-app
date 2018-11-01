let counter = 1;

export function addProject(project) {
  project.id = ++counter;
  return {
    type: 'ADD_PROJECT',
    project
  };
}

export function fetchProjects() {
  return (dispatch) => {
    return fetch('/projects')
      .then(response => response.json())
      .then(projects => dispatch({type: "FETCH_PROJECTS", payload: projects}))
    }
}
