require 'bcrypt'

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