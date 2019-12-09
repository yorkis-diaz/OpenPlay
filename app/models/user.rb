# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :firstname, :lastname, :password_digest, presence: true
    validates :password, length: { minimum: 6}, allow_nil: true

    has_many :reservations,
        foreign_key: :participant_id,
        class_name: :Reservation,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :reviewer_id,
        class_name: :Review,
        dependent: :destroy

    has_many :saved_events,
        class_name: :SavedEvent,
        dependent: :destroy

    has_many :events,
        through: :reservations,
        source: :event

    

    attr_reader :password
    after_initialize :ensure_session_token

    def self.generate_session_token 
        SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
end
