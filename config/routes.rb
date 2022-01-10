Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :destroy, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :expenses, only: [:index, :create, :destroy, :update, :show]
    resources :splits, only: [:index, :show]
    resources :friends, only: [:index, :create, :destroy, :show]
    resources :groups, only: [:index, :create, :destroy, :show]
    resources :activities, only: [:index, :create, :show]
  end
  root to: 'static_pages#root'
end
