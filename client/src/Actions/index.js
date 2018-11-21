let counter = 0;

export function addProject(project) {
  project.idx = ++counter;
  return {
    type: 'ADD_PROJECT',
    project
  };
}

export function fetchProjects() {
  return (dispatch) => {
    return fetch('/api/projects')
    .then(response => response.json())
    .then(projects => dispatch({type: "FETCH_PROJECTS", payload: projects}))
  }
}

export function deleteData(project) {
  return (dispatch) => {
    return fetch(`/api/projects/${project.id}`, {
      method: 'delete'
    })
  .then(response => response.json())
  .then(data => dispatch({type: "DELETE_PROJECT", payload: data.project.id}))
  }
}
