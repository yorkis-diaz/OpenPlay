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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
