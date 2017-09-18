Rails.application.routes.draw do
  resources :libraries
  resources :authors
  resources :books
  resources :invitations
   namespace :admin do
      resources :invitations
      resources :libraries do
         resources :books, path: 'relationships/books'
        end
      resources :authors do
         resources :books, path: 'relationships/books'
        end
      resources :books
   end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_ember_app :frontend, to: "/"
end
