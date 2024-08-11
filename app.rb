require 'sinatra/base'
require 'sequel'
require 'pg'
require 'dotenv'


Dotenv.load

class TaskrApp < Sinatra::Base

  configure do
    DB = Sequel.connect(ENV['SQLALCHEMY_URI'])
    require './models/user.rb'
    require './models/job.rb'
    require './models/employer.rb'
    require './models/applicant.rb'
    require './models/company.rb'
    require './models/listings.rb'
    Dir[File.join(File.dirname(__FILE__), "models", "*.rb")].each {|model| require model}
  end  

  get '/' do
     erb :index
  end  

  get '/jobs' do
     #listings = []
     @listings = DB[:listings]
     erb :listings
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