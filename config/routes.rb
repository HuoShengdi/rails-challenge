Rails.application.routes.draw do
  get 'order/:id/feedback' => 'order_feedback#new'
  get 'order/:id/feedback/complete' => 'order_feedback#new'

  namespace :api, defaults: {format: :json} do
    resources :order, only:[:show] do
      resources :order_feedback, only:[:create]
      resources :item_feedback, only:[:create]
    end
  end

end
