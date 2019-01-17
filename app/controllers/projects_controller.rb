class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render json: @projects, include: ['tones', 'sentences', 'sentences.tones']
  end

  def create
    project = Project.create(project_params)
    render json: {status: 201, project: project}
  end

  def delete
    project = Project.find(params[:id])
    render json: {project: project}
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:text, :title, :img, sentences_attributes: [:text, :id, tones_attributes: [:score, :tone_name]], tones_attributes: [:score, :tone_name])
  end
end
