class ProjectsController < ApplicationController
  def index
    render json: Project.all
  end

  def create
    project = Project.create(project_params)
    render json: project, status: 201
  end

  def project_params
    params.permit(:id, :text, :result)
  end
end
