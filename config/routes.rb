Rails.application.routes.draw do
  devise_for :users
  root to: 'effects#index'
  namespace :effects do
    resources :searches, only: :index
  end
  resources :effects do
    resources :comments, only: :create
  end
  resources :users, only: :show
end