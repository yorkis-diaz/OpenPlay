# == Schema Information
#
# Table name: reviews
#
#  id             :integer          not null, primary key
#  body           :string           not null
#  rating         :integer          not null
#  reviewer_id    :integer          not null
#  event_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  reservation_id :integer          not null
#

class Review < ApplicationRecord
    validates :body, :rating, presence: true

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :event,
        foreign_key: :event_id,
        class_name: :Event

    belongs_to :reservation,
        foreign_key: :reservation_id,
       class_name: :Reservation
end
