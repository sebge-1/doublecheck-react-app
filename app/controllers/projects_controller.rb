class ProjectsController < ApplicationController
  def index
    Project.all.each do |project|
      render json: project, include:['document', 'document.document_tones', 'document.sentences', 'document.sentences.sentence_tones']
    end
  end

  def create
    project = Project.create(project_params)
    render json: project, status: 201
  end

  def project_params
    params.permit(:id, :text, :result)
  end
end
