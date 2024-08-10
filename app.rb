require 'sinatra/base'
require 'sinatra/activerecord'
require 'pg'
require 'dotenv'
require './models'

Dotenv.load

class TaskrApp < Sinatra::Base
  get '/' do
     erb :index
  end  

  get '/jobs' do
     listings = []
     erb :listings, :locals => {:listings => listings}
  end

  post '/signup' do 
    @payload = JSON.parse(request.body.read, symbolize_names: true) 
    puts @payload
    @user = User.new
    @password = @user.create_secure_password(:password)
  end

  post '/signin' do
    @payload = JSON.parse(request.body.read, symbolize_names: true)
    puts @payload
  end

  get '/signin' do
    redirect '/'
  end

  get '/signup' do
    redirect '/'
  end


  get '/top-career' do 
     erb :careers
  end

  get '/job/listing/:id' do 
     
  end

  get 'search/:search_term' do

  end

  get '/employer/add/listing' do
   erb :'add-listing'
  end

  run!
end