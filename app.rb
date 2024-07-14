require 'sinatra/base'
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
     connection = PG.connect(
         :dbname => ENV['DB'],
         :user => ENV['USER'],
         :password => ENV['PASSWORD']
     )
     job_listings = connection.exec('SELECT * FROM listings')
     job_listings.each do | listing |
         listings.push({ title: listing['title'] })
     end   

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
  
  end

  get '/job/listing/:id' do 
     
  end

  get 'search/:search_term' do

  end

  run!
end