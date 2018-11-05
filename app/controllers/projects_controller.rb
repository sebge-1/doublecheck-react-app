class ProjectsController < ApplicationController
  def index
    render json: Project.all, include:['document', 'document.document_tones', 'document.sentences', 'document.sentences.sentence_tones']
  end

  def create
    project = Project.create(project_params)
    render json: project, status: 201
  end

  def project_params
    params.permit(:id, :text, :result)
  end
end
