require 'bcrypt'

class Jobs
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


class User
   def create_account(account_type)
   
   end

   def deactivate_account(user_id)

   end
   
   def update_account(user_id)

   end

   def signin(email, password)

   end

   def signout(user_id)

   end

   def create_secure_password(password)
      return BCrypt::Password.create(password)
   end

   def account_status(email)
      #check if account exists
   end 
   
end


class Employer
  def add_company()
    #add business profile
  end  

  def update_company(company_id)
  
  end

end


class Applicant
    def create_pdf_resume(user_id)
      #create pdf of resume from form fields
    end

end