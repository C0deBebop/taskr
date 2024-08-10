class Job < ActiveRecord::Base
    def listings
    #get all job listings
    end  

    def get_listing(listing_id)
    #get job listing by id
    end  

    def remove_listing(listing_id)
    #delete job listing
    end 
    
    def update_listing(listing_id)
        #update job listing
    end  

    def search_listings(search_term)
    #search by job title
    end
    
    def add_listing
        #add job listing
    end
end    