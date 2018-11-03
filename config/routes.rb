Rails.application.routes.draw do
  get '/api/projects', to: 'projects#index'
end
