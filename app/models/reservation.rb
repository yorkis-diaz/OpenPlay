# == Schema Information
#
# Table name: reservations
#
#  id               :integer          not null, primary key
#  time             :time             not null
#  num_participants :integer          not null
#  date             :date             not null
#  participant_id   :integer          not null
#  event_id         :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Reservation < ApplicationRecord
    validates :time, :num_participants, :phone_number, :date, presence: true

    belongs_to :participant,
        foreign_key: :participant_id,
        class_name: :User

    belongs_to :event,
        foreign_key: :event_id,
        class_name: :Event

    has_many :reviews,
        class_name: :Review,
        dependent: :destroy
end
