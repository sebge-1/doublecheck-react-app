class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render json: @projects, include: ['tones', 'sentences', 'sentences.tones']
  end

  def create
    project = Project.create({text: params[:text], title: params[:title], img: params[:img]})
    params[:sentences].each do |sent|
      sentence = project.sentences.create({text: sent["text"]})
      sent["tones"].each do |tone|
        sentence.tones.create({score: tone["score"], tone_name: tone["tone_name"]})
      end
    end

    params[:tones].each do |tone|
      project.tones.create({score: tone["score"], tone_name: tone["tone_name"]})
    end
    render json: {status: 201, project: project}
  end

  def delete
    project = Project.find(params[:id])
    render json: {project: project}
    project.destroy
  end

  private
  def project_params
    params.permit(:text, :title, :img, sentences_attributes: [:id, :text, tones_attributes: [:score, :tone_name]], tones_attributes: [:id, :score, :tone_name])
  end
end
