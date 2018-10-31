let counter = 1;

export function addProject(project) {
  project.id = ++counter;
  return {
    type: 'ADD_PROJECT',
    project
  };
}
