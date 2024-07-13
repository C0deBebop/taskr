require 'sinatra/base'
require 'pg'
require 'dotenv'

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

     companies = connection.exec('SELECT * FROM companies')
     companies.each do |company|
        listings.push({ company_name: company['name'] })
      end   
      puts listings
     erb :listings, :locals => {:listings => listings}
  end

  get '/create-account' do 
    
  end

  get '/top-career' do 
  
  end

  get '/job/listing/:id' do 
     
  end



  run!
end