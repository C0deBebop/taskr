require 'sinatra/base'

class TaskrApp < Sinatra::Base
  get '/' do
     erb :index
  end  

  get '/jobs' do
   
  end

  get '/create-account' do 
    
  end

  get 'top-career' do 
  
  end

  get 'job/listing/:id' do 
     
  end



  run!
end